import * as S from './style'

function InputComponent({LabelText, type, id, value, onChange, $error, className}) {
    return (
        <S.Container className={className}>
            <S.Label className='input-label' htmlFor={id}>{LabelText}</S.Label>
            <S.Field className='input-field'
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