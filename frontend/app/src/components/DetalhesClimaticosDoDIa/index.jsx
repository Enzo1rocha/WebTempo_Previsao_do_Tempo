import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as S from './styles'

export default function DetalhesClimaticosDoDia({Titulo, Icone, Valor, codigoValor, subTitulo}) {
    return (
        <S.conteudo>
            <S.titulo>{Titulo}</S.titulo>
            <S.div_icone_valor>
                <FontAwesomeIcon icon={Icone} />
                <div>
                    <h2>{Valor}</h2>
                    <h3>{codigoValor}</h3>
                </div>
            </S.div_icone_valor>
            <S.sub>{subTitulo}</S.sub>
        </S.conteudo>
    )
}