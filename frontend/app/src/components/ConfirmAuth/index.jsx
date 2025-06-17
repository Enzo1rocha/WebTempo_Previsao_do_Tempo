import * as S from './style'
import RightArrow from '../../assets/authPageIMGS/RightArrow.svg'

function Sign_Container({LabelText}) {
    return (
        <S.Container>
            <S.LabelForButton htmlFor="input">{LabelText}</S.LabelForButton>
            <S.Button type="button" id="input" name="input">
                <S.SignImage src={RightArrow} />
            </S.Button>
        </S.Container>
    )
}

export default Sign_Container