import { useState } from 'react';
import * as S from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SearchBar() {
    const [inputValue, setInputValue] = useState('');

    console.log('renderizou');
    

    const handleSearch = (e) => {
        setInputValue(e.target.value);
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