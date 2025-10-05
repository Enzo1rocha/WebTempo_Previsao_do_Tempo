import * as S from './style'

function InputComponent({LabelText, type, id, value, onChange, $error}) {
    return (
        <S.Container>
            <S.Label htmlFor={id}>{LabelText}</S.Label>
            <S.Field
            $error={$error} 
            type={type} 
            id={id} 
            name={id} 
            value={value}
            onChange={onChange}
            />
        </S.Container>
    )
}

export default InputComponent