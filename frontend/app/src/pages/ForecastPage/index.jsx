import * as S from './styles';
import moon from '../../assets/forecastPage/moon.svg'
import rightArrow from '../../assets/authPageIMGS/RightArrow.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ForecastPage() {
    return (
        <S.Main>
            <S.textSection>
                <S.localName>
                    <p>Clima Atual</p>
                    <p>São Paulo - Brasil</p>
                </S.localName>
                <S.temperatureAndIconDiv>
                    <S.TemperatureDiv>
                        <img src={moon} alt="Lua" />
                        <div>
                            <p>17 <S.temperatureSymbol>c</S.temperatureSymbol></p>
                        </div>
                    </S.TemperatureDiv>
                    <S.TemperatureText>
                        <h2>Limpo</h2>
                        <h3>Sensação termica de 16°</h3>
                    </S.TemperatureText>
                </S.temperatureAndIconDiv>
                <S.summaryOfTheDayText>
                    <p>O Céu estará predominantemente limpo, A minima será de 12°</p>
                </S.summaryOfTheDayText>
                <S.summaryOfTheDay>
                    <div>
                        <p>Qualidade do Ar</p>
                        <p><span></span> 50</p>
                    </div>
                    <div>
                        <p>Vento</p>
                        <p>7km/h <span><img src={rightArrow} alt="right Arrow" /></span></p>
                    </div>
                    <div>
                        <p>Umidade</p>
                        <p>72%</p>

                    </div>
                    <div>
                        <p>Visibilidade</p>
                        <p>6km</p>
                    </div>
                    <div>
                        <p>Pressão</p>
                        <p>1025mb</p>
                    </div>
                    <div>  
                        <p>Ponto de orvalho</p>
                        <p>12°</p>
                    </div>
                </S.summaryOfTheDay>
            </S.textSection>
            <S.SectionForGraph>
                <S.OptionsForGraphDiv>
                    <p>Por Hora</p>
                    <S.OptionsForGraph>
                        <S.OptionContent>
                            Visão Geral
                        </S.OptionContent>
                        <S.OptionContent>
                            Precipitação
                        </S.OptionContent>
                        <S.OptionContent>
                            Vento
                        </S.OptionContent>
                        <S.OptionContent>
                            Qualidade do ar
                        </S.OptionContent>
                        <S.OptionContent>
                            Umidade
                        </S.OptionContent>
                        <S.OptionContent>
                            Visibilidade
                        </S.OptionContent>
                        <S.HiddenOptionsContent>
                            <FontAwesomeIcon icon={'ellipsis'} />
                        </S.HiddenOptionsContent>
                    </S.OptionsForGraph>
                </S.OptionsForGraphDiv>

            </S.SectionForGraph>

        </S.Main>
    )
}