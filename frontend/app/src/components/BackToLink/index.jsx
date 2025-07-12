import * as S from './style';

function BackToLink({ href, value, classname}) {
    return (
        <S.BackToLink className={classname} href={href}>
            {value}
        </S.BackToLink>
    )
}

export default BackToLink;