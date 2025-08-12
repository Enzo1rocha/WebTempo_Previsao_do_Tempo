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
                            <p>{value1}mm</p>
                            <p>{value2}%</p>
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
                            <p>{value1}Km/h</p>
                            <p>{value2}Km/h</p>
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
                            <p>{value2}</p>
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
                            <p>{value1}%</p>
                            <p>{value2}%</p>
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
                            <p>{value1}Km</p>
                            <p>{value2}Km</p>
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
                            <p>{value1}mb</p>
                            <p>{value2}mb</p>
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
                            <p>{value1}°</p>
                            <p>{value2}°</p>
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
                            <img src={icon} alt='Icone climatico' />
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