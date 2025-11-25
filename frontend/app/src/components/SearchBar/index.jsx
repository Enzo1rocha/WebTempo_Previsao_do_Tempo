import { useEffect, useState, useRef, useCallback} from 'react';
import LocationsPageService from '../../services/LocationsPageService';
import * as S from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function SearchBar({ option, className }) {

    const [inputValue, setInputValue] = useState('');
    const [cities, setCities] = useState([])
    const abortControllerRef = useRef(null);
    const cacheRef = useRef(new Map());
    const navigate = new useNavigate();
    const { user } = useAuth();

    const handleClickLogin = () => {
        navigate('/login')
        setInputValue('');
        setCities([]);
    }

    const SearchSugestions = useCallback(async (query) => { // Função para buscar sugestões de cidades

        if (cacheRef.current.has(query)) {
            console.log('cache funcionando');
            
            return cacheRef.current.get(query)
        }

        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
        }

        abortControllerRef.current = new AbortController();

        try {
            const response = await fetch(
            `http://api.geonames.org/searchJSON?` +
            `q=${encodeURIComponent(query)}&` +
            `featureClass=P&` +
            `maxRows=5&` +
            `orderby=population&` + // Ordena por população
            `username=enzo1rocha`,
            { signal: abortControllerRef.current.signal }
            );

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }

            const data = await response.json();
            const validFeatureCodes = ['PPL', 'PPLA', 'PPLA2', 'PPLA3', 'PPLA4', 'PPLC', 'PPLX'];
            const filteredData = data.geonames
                ?.filter(city => validFeatureCodes.includes(city.fcode))
                .map((city, index) => ({
                    id: index,
                    name: city.name,
                    state: city.adminName1 || null,
                    country: city.countryName || null,
                    lat: city.lat,
                    lon: city.lng
                })) || [];

            if (cacheRef.current.size > 50) {
                const firstKey = cacheRef.current.keys().next().value;
                cacheRef.current.delete(firstKey);
            }

            cacheRef.current.set(query, filteredData);
            return filteredData
        } catch (error) {
            if (error.name === 'AbortError') {
                console.log('Requisição cancelada');
                return [];
            }
            console.log('Erro ao buscar sugestões:', error);
            throw error;
        }
    }, []);
    
    
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (inputValue.trim().length > 0) {
                SearchSugestions(inputValue.trim())
                    .then(cities => {
                        setCities(cities);
                    })
                    .catch(() => {
                        setCities([]);
                    })
            } else {
                setCities([]);
            }
        }, 200);

        return () => {
            clearTimeout(timeoutId);
            if (abortControllerRef.current) {
                abortControllerRef.current.abort();
            };
        };
    }, [inputValue, SearchSugestions])

    const handleSearch = useCallback((e) => {
        setInputValue(e.target.value);
    }, []);

    const handleCitySelect = useCallback((city) => {
        const resp = CitySelectOptions(option, city)
        return resp
    }, [option])

    const CitySelectOptions = async (option, city) => {
        switch (option) {
            case 'boot_location':
                LocationsPageService.addNewBootLocation({
                    location_name: city.name,
                    state: city.state,
                    country: city.country,
                    lat: city.lat,
                    long: city.lon
                })
                setTimeout(() => {
                    window.location.reload();
                }, 400);
                return true
            case 'favorite_location':
                LocationsPageService.addFavoriteLocations({
                    location_name: city.name,
                    state: city.state,
                    country: city.country,
                    lat: city.lat,
                    long: city.lon
                })
                navigate('/user/profile')
                setTimeout(() => {
                    window.location.reload();
                }, 400);

                break;
            default:
                navigate(`/forecast/${city.name}/${city.country}/${city.state}/${city.lon}/${city.lat}`)
                break;
        }
    }

    const handleClear = useCallback(() => {
        setCities([])
        setInputValue('');
        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
        }
    }, []);

    return (
        <S.Container className={className}>
            <S.SearchBarContainer className='searchBarContainer' hasSearch={inputValue}>
                <input value={inputValue} onChange={handleSearch} type="text" name="" id="" placeholder={
                    !inputValue ? 'Pesquisar Local' : ''
                } />
                {inputValue && (
                    <FontAwesomeIcon icon="x" onClick={handleClear} />
                )}
                <FontAwesomeIcon icon="magnifying-glass" />
            </S.SearchBarContainer>
            {!user && inputValue && (
                <S.Containerlocations>
                    <S.Warning className='warning' onClick={handleClickLogin}>faça login para pesquisar o clima das cidades.</S.Warning>
                </S.Containerlocations>
            )}
            {user && cities.length > 0 && (
                <S.Containerlocations>
                    {cities.map(city => (
                        <S.LocationItem onClick={ async () => {
                            const resp = await handleCitySelect(city)
                            console.log(resp);  
                        }} key={city.id} data-lat={city.lat} data-lon={city.lon}>
                            <div>
                                <h1>{city.name}</h1>
                                <p>{city.state}, {city.country}</p>
                            </div>
                            <FontAwesomeIcon icon={"map-location-dot"} />
                        </S.LocationItem>
                    ))}
                </S.Containerlocations>
            )}
        </S.Container>
    )
}