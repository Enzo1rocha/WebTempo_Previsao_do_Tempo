import { useState } from 'react';
import * as S from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SearchBar() {
    const [inputValue, setInputValue] = useState('');

    console.log('renderizou');
    

    const handleSearch = (e) => {
        setInputValue(e.target.value);
    }

    const SearchCities = async (query) => {
        try {
            const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${query}&format=json&addressdetails=1`);
            const data = await response.json();
            console.log(data);
            
            const filteredData = [];

            for (const item of data) {
                if (!item.address) continue;

                const { suburb, municipality, city, town, state, country, city_district, country_code} = item.address;
                
                const name = item.name

                const isValidLocation = (!city_district && name === suburb) || (!city_district && name === municipality);

                if (isValidLocation) {
                    let filteredItem = {
                        location_name: name,
                        state: state || null,
                        country: country || null,
                        lat: item.lat,
                        lon: item.lon,
                        country_code: country_code.toUpperCase()
                    };
                    if (city || town) {
                        filteredItem['city'] = city || town
                    }
                    filteredData.push(filteredItem)
                }
            }
            return filteredData

        } catch (error) {
            console.error('Erro ao buscar cidades', error);
            throw error;
        }
    }

    const Dadosteste = async () => {
        try {
            const resultado = await SearchCities('Brasilandia');
            console.log('Resultado da busca:', resultado);
        } catch (error) {
            console.error('Erro na busca:', error);
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
                <FontAwesomeIcon onClick={Dadosteste} icon="magnifying-glass" />
            </S.SearchBarContainer>
            {inputValue && (
                <S.Containerlocations>
                    <S.LocationItem>
                        <div>
                            <h1>São Paulo</h1>
                            <p>São Paulo, brasil</p>
                        </div>
                        <FontAwesomeIcon icon={"map-location-dot"} />
                    </S.LocationItem>
                    <S.LocationItem>
                        <div>
                            <h1>São Paulo</h1>
                            <p>São Paulo, brasil</p>
                        </div>
                        <FontAwesomeIcon icon={"map-location-dot"} />
                    </S.LocationItem>
                    <S.LocationItem>
                        <div>
                            <h1>São Paulo</h1>
                            <p>São Paulo, brasil</p>
                        </div>
                        <FontAwesomeIcon icon={"map-location-dot"} />
                    </S.LocationItem>
                    <S.LocationItem>
                        <div>
                            <h1>São Paulo</h1>
                            <p>São Paulo, brasil</p>
                        </div>
                        <FontAwesomeIcon icon={"map-location-dot"} />
                    </S.LocationItem>
                    <S.LocationItem>
                        <div>
                            <h1>São Paulo</h1>
                            <p>São Paulo, brasil</p>
                        </div>
                        <FontAwesomeIcon icon={"map-location-dot"} />
                    </S.LocationItem>
                </S.Containerlocations>
            )}
        </S.Container>
    )
}