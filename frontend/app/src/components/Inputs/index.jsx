import * as S from './style'

function InputComponent({LabelText, type, }) {
    return (
        <S.Container>
            <S.Label htmlFor="input">{LabelText}</S.Label>
            <S.Field type={type} id="input" name="input" />
        </S.Container>
    )
}

export default InputComponent