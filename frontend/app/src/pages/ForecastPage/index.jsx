import * as S from './styles';
import moon from '../../assets/forecastPage/moon.svg'
import rightArrow from '../../assets/authPageIMGS/RightArrow.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DetalhesClimaticosDoDia from '../../components/DetalhesClimaticosDoDIa';
import OptionOfDays from '../../components/OptionOfDays';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    plugins,
} from 'chart.js'
import { Line } from 'react-chartjs-2';
import { text } from '@fortawesome/fontawesome-svg-core';

ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );



export default function ForecastPage() {

    const options = {
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: false,
                text: 'Clima',
            },
        },
    };

    const labels = ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00']

    const data = {
        labels,
        datasets : [{
            label: 'Temperatura',
            data: [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
            borderColor: 'rgb(55, 65, 81)',
            backgroundColor: 'rgba(55, 65, 81, 0.5)',
        }],
    }

    return (
        <S.Main>
            <S.textSection>
                <S.localName>
                    <p>Clima Atual</p>
                    <p>São Paulo - Brasil</p>
                </S.localName>
                <S.temperatureAndIconDiv>
                    <S.TemperatureDiv>
                        <FontAwesomeIcon icon={'moon'} />
                        <div>
                            <p>17<span>c</span></p>
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
                        <p>7km/h <FontAwesomeIcon icon={'arrow-right'} /></p>
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
                <S.visãoGeralDias>
                    <OptionOfDays day={'10'} day_name={'Hoje'} value1={'22'} value2={'14'} icon={'moon'} />

                    <OptionOfDays day={'11'} day_name={'Amanhã'} value1={'0'} value2={'10'} icon={null} option={'PRECIPITAÇÃO'} />

                    <OptionOfDays day={'12'} day_name={'Terça'} value1={'12'} value2={'7'} icon={null} option={'VENTO'} />

                    <OptionOfDays day={'13'} day_name={'Quarta'} value1={'105'} value2={'Ruim'} icon={null} option={'QUALIDADE'} />
                </S.visãoGeralDias>
            </S.SectionForGraph>
            <S.Grafico>

                <Line options={options} data={data} />

            </S.Grafico>
            <S.DetalhesDoDia>
                <DetalhesClimaticosDoDia Titulo={'Temperatura'} Icone={'temperature-half'} alt_Icone={'Icone Temperatura'} Valor={13} codigoValor={'°C'} subTitulo={'Teste'} />
                
                <DetalhesClimaticosDoDia Titulo={'Sensação Térmica'} Icone={'temperature-low'} alt_Icone={'Icone Temperatura'} Valor={13} codigoValor={'°C'} subTitulo={'Teste'} />

                <DetalhesClimaticosDoDia Titulo={'Precipitação'} Icone={'droplet'} alt_Icone={'Icone Precipitação'} Valor={0} codigoValor={'mm'} subTitulo={'Teste'} />

                <DetalhesClimaticosDoDia Titulo={'Vento'} Icone={'wind'} alt_Icone={'Icone Vento'} Valor={10} codigoValor={'km/h'} subTitulo={'Teste'} />

                <DetalhesClimaticosDoDia Titulo={'Umidade'} Icone={'percent'} alt_Icone={'Icone Umidade'} Valor={75} codigoValor={'%'} subTitulo={'Teste'} />

                <DetalhesClimaticosDoDia Titulo={'Visibilidade'} Icone={'eye'} alt_Icone={'Icone Visibilidade'} Valor={7} codigoValor={'km'} subTitulo={'Teste'} />
                <DetalhesClimaticosDoDia Titulo={'Pressão'} Icone={'gauge-simple-high'} alt_Icone={'Icone Pressão'} Valor={1024} codigoValor={'mb'} subTitulo={'Teste'} />

                <DetalhesClimaticosDoDia Titulo={'UV'} Icone={'circle-exclamation'} alt_Icone={'Icone UV'} Valor={3} codigoValor={'Moderado'} subTitulo={'Teste'} />

                <DetalhesClimaticosDoDia Titulo={'AQI'} Icone={'triangle-exclamation'} alt_Icone={'Icone Qualidade do Ar'} Valor={58} subTitulo={'Teste'} />

            </S.DetalhesDoDia>

        </S.Main>
    )
}