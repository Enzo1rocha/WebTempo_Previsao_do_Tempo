import { useEffect, useState } from 'react';
import * as S from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SearchBar() {
    const [inputValue, setInputValue] = useState('');
    const [cities, setCities] = useState([])
    console.log('renderizou');
    console.log(cities);
    
    
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (inputValue.length >= 0) {
                SearchSugestions(inputValue)
                    .then(cities => {
                        setCities(cities);
                    })
                    .catch(() => {
                        setCities([]);
                    })
            } else {
                setCities([]);
            }
        }, 500);

        return () => clearTimeout(timeoutId);
    }, [inputValue])




    const handleSearch = async (e) => {
        setInputValue(e.target.value);
    }

    const SearchSugestions = async (query) => {
        try {
            const response = await fetch(
            `http://api.geonames.org/searchJSON?` +
            `q=${query}&` +
            `featureClass=P&` +
            `maxRows=5&` +
            `orderby=population&` + // Ordena por população
            `username=enzo1rocha`
            );
            const data = await response.json();
            console.log(data);
            
            const filteredData = [];
            const validFeatureCodes = ['PPL', 'PPLA', 'PPLA2', 'PPLA3', 'PPLA4', 'PPLC', 'PPLX'];
            
            for (const city of data.geonames) {
                if (validFeatureCodes.includes(city.fcode)) {
                    const {name, lat, lng, adminName1, countryName} = city
                    let filteredCity = {
                        name: name,
                        state: adminName1 || null,
                        country: countryName || null,
                        lat: lat,
                        lon: lng
                    }
                    filteredData.push(filteredCity)
                }
            }
            return filteredData
        } catch (error) {
            console.log('Erro ao buscar sugestões', error);
            throw error
            
        }
    }


    return (
        <S.Container>
            <S.SearchBarContainer hasSearch={inputValue}>
                <input value={inputValue} onChange={handleSearch} type="text" name="" id="" placeholder={
                    !inputValue ? 'Pesquisar por local' : ''
                } />
                {inputValue && (
                    <FontAwesomeIcon icon="x" onClick={() => setInputValue('')} />
                )}
                <FontAwesomeIcon icon="magnifying-glass" />
            </S.SearchBarContainer>
            {cities.length > 0 && (
                <S.Containerlocations>
                    {cities.map(city => (
                        <S.LocationItem data-lat={city.lat} data-lon={city.lon}>
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