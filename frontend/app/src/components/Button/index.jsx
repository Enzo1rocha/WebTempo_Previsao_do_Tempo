import * as S from './style.js'

function Button({value, IsLink = false, href='', className, ...rest}) {

    function checkOptions() {
        if (IsLink) {
            window.location.href = href;
        } else {
            console.log('Button clicked');
        }
    }

    return (
        <S.Button onClick={checkOptions} className={className} {...rest} >
            {value}
        </S.Button>
    )
} 

export default Button