import * as S from './styles'
import SearchBar from '../SearchBar'

export default function ChangeBootLocation({ ReturnClick }) {
    return (
        <S.Background>
            <S.Main>
                <S.SearchContent>
                    <h1>Alterar Local de Inicialização</h1>
                    <div>
                        <SearchBar option={'boot_location'}/>
                    </div>
                </S.SearchContent>
                <S.Return onClick={ReturnClick}>Voltar</S.Return>
            </S.Main>
        </S.Background>
    )
}