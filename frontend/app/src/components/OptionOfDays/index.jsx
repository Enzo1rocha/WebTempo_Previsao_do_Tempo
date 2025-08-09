import * as S from "./styles"

export default function OptionOfDays({day, day_name, value1, value2, icon, alt_icon, option}) {

    const calcularPercentual = (valor, max) => Math.min((valor/max) * 100, 100)

    const get_option = () => {
        switch (option.toUpperCase()) {
            case 'PRECIPITAÇÃO': {

                let altura_percentual = calcularPercentual(value2, 100);

                return (
                    <S.precipitação>
                        <S.valor_a_esquerda>
                            <p>{value1}mm</p>
                            <p>{value2}%</p>
                        </S.valor_a_esquerda>
                        <S.encher>
                            <S.valor altura_percentual={altura_percentual}></S.valor>
                        </S.encher>
                    </S.precipitação>
                )
            }
            
            case 'VENTO': {

                let altura_percentual = Math.min((value1 / 50) * 100, 100)

                return (
                    <S.vento>
                        <S.valor_a_esquerda>
                            <p>{value1}Km/h</p>
                            <p>{value2}Km/h</p>
                        </S.valor_a_esquerda>
                        <S.encher>
                            <S.valor altura_percentual={altura_percentual}>

                            </S.valor>
                        </S.encher>
                    </S.vento>
                )
            }

            case 'QUALIDADE': {

                let altura_percentual = Math.min((value1 / 301) * 100, 100)

                return (
                    <S.qualidade>
                        <S.valor_a_esquerda>
                            <p>{value1}</p>
                            <p>{value2}</p>
                        </S.valor_a_esquerda>
                        <S.encher>
                            <S.valor altura_percentual={altura_percentual}>

                            </S.valor>
                        </S.encher>
                    </S.qualidade>
                )
            }
            
            case 'UMIDADE':
                return (
                    <S.umidade>
                        <S.valor_a_esquerda>
                            <p>{value1}%</p>
                            <p>{value2}%</p>
                        </S.valor_a_esquerda>
                        <S.encher>
                            <S.valor altura_percentual={value1}>
                                
                            </S.valor>
                        </S.encher>
                    </S.umidade>
                )
                
            case 'VISIBILIDADE': {
                let altura_percentual = calcularPercentual(value1, 100)

                return (
                    <S.visibilidade>
                        <S.valor_a_esquerda>
                            <p>{value1}Km</p>
                            <p>{value2}Km</p>
                        </S.valor_a_esquerda>
                        <S.encher>
                            <S.valor altura_percentual={altura_percentual}>

                            </S.valor>
                        </S.encher>
                    </S.visibilidade>
                )
            }
            
            case 'PRESSÃO': {

                let altura_percentual = calcularPercentual(value1, 100)

                return (
                    <S.pressão>
                        <S.valor_a_esquerda>
                            <p>{value1}mb</p>
                            <p>{value2}mb</p>
                        </S.valor_a_esquerda>
                        <S.encher>
                            <S.valor altura_percentual={altura_percentual}>

                            </S.valor>
                        </S.encher>
                    </S.pressão>
                )
            }
            
            case 'UV':
                return (
                    <S.uv>
                        <S.valor_a_esquerda>
                            <p>{value1}</p>
                            <p>{value2}</p>
                        </S.valor_a_esquerda>
                        <S.encher>
                            <S.valor altura_percentual={value1*10}>
                                
                            </S.valor>
                        </S.encher>
                    </S.uv>
                )
            
            case 'SENSAÇÃO': {

                let altura_percentual = calcularPercentual(value1, 30)

                return (
                    <S.sensação>
                        <S.valor_a_esquerda>
                            <p>{value1}°</p>
                            <p>{value2}°</p>
                        </S.valor_a_esquerda>
                        <S.encher>
                            <S.valor altura_percentual={altura_percentual}></S.valor>
                        </S.encher>
                    </S.sensação>
                ) 
            }
        
            default: {
                
                return (
                    <S.visão>
                        <S.valor_a_direita>
                            <p>{value1}°</p>
                            <p>{value2}°</p>
                        </S.valor_a_direita>
                        <S.icone>
                            <img src={icon} alt={alt_icon} />
                        </S.icone>
                    </S.visão>
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
                    
                </S.value_content>
            </S.Content>
        </S.Container>
    )
}