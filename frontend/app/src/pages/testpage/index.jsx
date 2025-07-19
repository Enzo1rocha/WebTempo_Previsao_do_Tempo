import * as S from './styles';
import SearchBar from '../../components/SearchBar';

export default function TestPage() {
    return (
        <S.ContainerPage>
            <SearchBar option={'favorite_location'} />
        </S.ContainerPage>
    )
}