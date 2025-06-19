import * as S from './style';
import elementAbstract from '../../assets/authPageIMGS/elementAbstract.png';
import NavBar from '../NavBar';
import { Nav } from '../NavBar/style';

function Background({ children }) {
    return (
        <div>
            <S.Container>
            <S.TopRight src={elementAbstract}></S.TopRight>
            <S.BottomLeft src={elementAbstract}></S.BottomLeft>
            {children}
            </S.Container>
        </div>
    )
}

export default Background;