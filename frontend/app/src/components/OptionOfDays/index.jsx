import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as S from "./styles"

export default function OptionOfDays({day, day_name, value1, value2, icon, option}) {

    const calcularPercentual = (valor, max) => Math.min((valor/max) * 100, 100)

    const get_option = () => {
        switch (option) {
            case 'PRECIPITAÇÃO': {

                let altura_percentual = calcularPercentual(value2, 100);

                return (
                    <S.conteudo_com_dados>
                        <S.valor_a_esquerda>
                            <p>{value1}<span>mm</span></p>
                            <p>{value2}<span>%</span></p>
                        </S.valor_a_esquerda>
                        <S.encher>
                            <S.valor altura_percentual={altura_percentual}></S.valor>
                        </S.encher>
                    </S.conteudo_com_dados>
                )
            }
            
            case 'VENTO': {

                let altura_percentual = Math.min((value1 / 50) * 100, 100)

                return (
                    <S.conteudo_com_dados>
                        <S.valor_a_esquerda>
                            <p>{value1}<span>Km/h</span></p>
                            <p>{value2}<span>Km/h</span></p>
                        </S.valor_a_esquerda>
                        <S.encher>
                            <S.valor altura_percentual={altura_percentual}>

                            </S.valor>
                        </S.encher>
                    </S.conteudo_com_dados>
                )
            }

            case 'QUALIDADE': {

                let altura_percentual = Math.min((value1 / 301) * 100, 100)

                return (
                    <S.conteudo_com_dados>
                        <S.valor_a_esquerda>
                            <p>{value1}</p>
                            <p className="qualidade">{value2}</p>
                        </S.valor_a_esquerda>
                        <S.encher>
                            <S.valor altura_percentual={altura_percentual}>

                            </S.valor>
                        </S.encher>
                    </S.conteudo_com_dados>
                )
            }
            
            case 'UMIDADE':
                return (
                    <S.conteudo_com_dados>
                        <S.valor_a_esquerda>
                            <p>{value1}<span>%</span></p>
                            <p>{value2}<span>%</span></p>
                        </S.valor_a_esquerda>
                        <S.encher>
                            <S.valor altura_percentual={value1}>
                                
                            </S.valor>
                        </S.encher>
                    </S.conteudo_com_dados>
                )
                
            case 'VISIBILIDADE': {
                let altura_percentual = calcularPercentual(value1, 100)

                return (
                    <S.conteudo_com_dados>
                        <S.valor_a_esquerda>
                            <p>{value1}<span>Km</span></p>
                            <p>{value2}<span>Km</span></p>
                        </S.valor_a_esquerda>
                        <S.encher>
                            <S.valor altura_percentual={altura_percentual}>

                            </S.valor>
                        </S.encher>
                    </S.conteudo_com_dados>
                )
            }
            
            case 'PRESSÃO': {

                let altura_percentual = calcularPercentual(value1, 100)

                return (
                    <S.conteudo_com_dados>
                        <S.valor_a_esquerda>
                            <p>{value1}<span>mb</span></p>
                            <p>{value2}<span>mb</span></p>
                        </S.valor_a_esquerda>
                        <S.encher>
                            <S.valor altura_percentual={altura_percentual}>

                            </S.valor>
                        </S.encher>
                    </S.conteudo_com_dados>
                )
            }
            
            case 'UV':
                return (
                    <S.conteudo_com_dados>
                        <S.valor_a_esquerda>
                            <p>{value1}</p>
                            <p>{value2}</p>
                        </S.valor_a_esquerda>
                        <S.encher>
                            <S.valor altura_percentual={value1*10}>
                                
                            </S.valor>
                        </S.encher>
                    </S.conteudo_com_dados>
                )
            
            case 'SENSAÇÃO': {

                let altura_percentual = calcularPercentual(value1, 30)

                return (
                    <S.conteudo_com_dados>
                        <S.valor_a_esquerda>
                            <p>{value1}<span>°</span></p>
                            <p>{value2}<span>°</span></p>
                        </S.valor_a_esquerda>
                        <S.encher>
                            <S.valor altura_percentual={altura_percentual}></S.valor>
                        </S.encher>
                    </S.conteudo_com_dados>
                ) 
            }
        
            default: {
                
                return (
                    <S.conteudo_com_dados>
                        <S.icone>
                            <FontAwesomeIcon icon={icon}/>
                        </S.icone>
                        <S.valor_a_direita>
                            <p>{value1}°</p>
                            <p>{value2}°</p>
                        </S.valor_a_direita>
                    </S.conteudo_com_dados>
                ) 
            }
        }
    }

    return (
        <S.Container>
            <S.Content>
                <S.day_content>
                    <p>{day}</p>
                    <p>{day_name}</p>
                </S.day_content>
                <S.value_content>
                    {get_option(option)}
                </S.value_content>
            </S.Content>
        </S.Container>
    )
}