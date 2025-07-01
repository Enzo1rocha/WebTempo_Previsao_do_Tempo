import * as S from './style'
import RightArrow from '../../assets/authPageIMGS/RightArrow.svg'

function Sign_Container({LabelText, onClick}) {
    return (
        <S.Container>
            <S.LabelForButton htmlFor="submit">{LabelText}</S.LabelForButton>
            <S.Button type="button" id="submit" name="submit" onClick={onClick}>
                <S.SignImage src={RightArrow} />
            </S.Button>
        </S.Container>
    )
}

export default Sign_Container