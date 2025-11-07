import * as S from './styles';
import { WiDaySunny } from 'weather-icons-react';

export default function SearchFavoriteLocation() {
    return (
        <S.Container>
            <S.Container_Search>
                <h1>Adicionar aos Favoritos</h1>
                <S.FavoriteSearchBar option={'favorite_location'} />
            </S.Container_Search>
        </S.Container>
    )
}