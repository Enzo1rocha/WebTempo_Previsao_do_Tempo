import * as S from './style';

function BackToLink({ href, value }) {
    return (
        <S.BackToLink href={href}>
            {value}
        </S.BackToLink>
    )
}

export default BackToLink;