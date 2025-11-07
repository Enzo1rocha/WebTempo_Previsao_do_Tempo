import * as S from './style';

function BackToLink({ href, value, className}) {
    return (
        <S.BackToLink className={className} href={href}>
            {value}
        </S.BackToLink>
    )
}

export default BackToLink;