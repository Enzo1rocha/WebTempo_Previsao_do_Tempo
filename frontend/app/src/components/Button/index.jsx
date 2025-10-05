import * as S from './style.js'

function Button({value, type, className, ...rest}) {

    return (
        <S.Button type={type} className={className} {...rest} >
            {value}
        </S.Button>
    )
} 

export default Button