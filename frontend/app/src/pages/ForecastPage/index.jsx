import * as S from './styles';
import moon from '../../assets/forecastPage/moon.svg'
import rightArrow from '../../assets/authPageIMGS/RightArrow.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DetalhesClimaticosDoDia from '../../components/DetalhesClimaticosDoDIa';
import OptionOfDays from '../../components/OptionOfDays';
import LocationsPageService from '../../services/LocationsPageService';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

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
    Interaction,
} from 'chart.js'

import { Line } from 'react-chartjs-2';
import { text } from '@fortawesome/fontawesome-svg-core';
import { useState } from 'react';

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
    

    const [showOptions, setShowOptions] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [dataForGraph, setDataForGraph] = useState([]);
    const { lat, lon, name, country, state} = useParams();
    const { data: dadosClimáticos, isLoading, isError, error } = useQuery({

        queryKey: ['forecastData', {name, country, state, lon, lat}],

        queryFn: () => LocationsPageService.getForecast({name, country, state, lon, lat}),
        staleTime: 1000 * 60 * 10, // 10 minutes

        enabled: !!name && !!country && !!state && !!lon && !!lat,
    })

    if (isLoading) {
        return <p>Carregando previsão</p>
    }

    if (isError) {
        return <p>Erro {error.message}</p>
    }

    const se_dados_para_o_grafico_estiver_vazio = () => {
        const dados_para_o_grafico = dadosClimáticos.days[0].hours_of_day;
        const dados_por_hora = []
        const dados_mais_limpos = dados_para_o_grafico.map((item) => {
            const hora = Object.keys(item)[0];
            const valor = item[hora];
            dados_por_hora.push(valor.temperature);
        })
        setDataForGraph(dados_por_hora);
    }

    if (dataForGraph.length === 0 || dataForGraph == []) {
        se_dados_para_o_grafico_estiver_vazio();
    }

    
    const pointRadis = dataForGraph.map((_, index) => {
        return index % 2 === 0 ? 6 : 0;
    })
    const pointColors = dataForGraph.map((_, index) => {
        return index % 2 === 0 ? 'rgb(55, 65, 81)' : 'transparent';
    });

    const options = {
        responsive: true,
        maintainAspectRatio: false, 

        interaction: {
            mode: 'index',
            intersect: false,
        },


        plugins: {
            legend: {
                display: false,
                position: 'bottom',
                labels: {
                    font: {
                        size: 16,
                        weight: 'bolder',
                    },
                    color: 'rgb(55, 65, 81)',
                    boxWidth: 0,
                    boxHeight: 0,
                }
            },
            title: {
                display: false,
                text: 'Clima',
            },
            tooltip: {
                enabled: true,
                backgroundColor: 'rgb(55, 65, 81)',
                titleFont: { size: 16 },
                bodyFont: { size: 14 },
                displayColors: false,
            }
        },

        scales: {
            x: {
                grid: {
                    display: false,
                },

                ticks: {
                    color: '#374151',
                    font: {
                        size: 15,
                    },
                    callback: function(value, index, ticks) {
                        return index % 2 === 0 ? this.getLabelForValue(value) : null;
                    },
                    maxRotation: 0,
                    minRotation: 0,
                },
            },

            y: {
                min: Math.floor(Math.min(...dataForGraph)) < 0 ? Math.floor(Math.min(...dataForGraph)): 0,
                max: Math.ceil(Math.max(...dataForGraph)) > 40 ? Math.ceil(Math.max(...dataForGraph)) : 40,

                ticks: {
                    stepSize: 10,
                    color: '#374151',
                    font: {
                        size: 14,
                    }
                },

                grid: {
                    color: '#E5E7EB',
                    drawBorder: false,
                }
            }
        }
    };

    const labels = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];


    const data = {
        labels,
        datasets : [{
            label: 'Temperatura',
            data: dataForGraph,
            borderColor: 'rgb(55, 65, 81)',
            backgroundColor: 'rgba(55, 65, 81, 0.5)',
            borderWidth: 3,
            tension: 0.5,
            fill: false,
            pointRadius: pointRadis,
            pointBackgroundColor: pointColors,
            pointBorderColor: pointColors,
        }],
    }

    const uv_risco = (uvIndex) => {
        if (uvIndex <= 2 && uvIndex >= 0) {
            return 'Baixo';
        } else if (uvIndex <= 5 && uvIndex > 2) {
            return 'Moderado';
        } else if (uvIndex <= 7 && uvIndex > 5) {
            return 'Alto';
        } else {
            return 'Extremo';
        }
    }

    const precipitação_risco = (precipitação) => {

        if (precipitação <= 20 && precipitação >= 1) {
            return 'Baixa';
        } else if (precipitação == 0) {
            return 'Nenhuma';
        } else if (precipitação <= 50 && precipitação > 20) {
            return 'Moderada';
        } else if (precipitação <= 80 && precipitação > 50) {
            return 'Alta';
        } else {
            return 'Extrema';
        }
    }

    const chave_para_pegar_dados_nos_dados_climáticos_do_grafico = (opção) => {
        switch (opção) {
            case 'PRECIPITAÇÃO':
                return 'precipitationProbability';
            case 'VENTO':
                return 'windSpeed';
            case 'UMIDADE':
                return 'humidity';
            case 'VISIBILIDADE':
                return 'visibility';
            case 'PRESSÃO':
                return 'pressureSeaLevel';
            case 'UV':
                return 'uvIndex';
            case 'SENSAÇÃO':
                return 'temperatureApparent';
            default:
                return 'temperature';
        }
    }

    const click_dados_para_o_grafico = (opção, data) => {
        const key = chave_para_pegar_dados_nos_dados_climáticos_do_grafico(opção);
        let dados = dadosClimáticos.days.find((dia) => dia.date === data);
        if (!dados) {
            console.error(`Dados não encontrados para a data: ${data}`);
        }
        const dados_p_hora = []
        dados = dados.hours_of_day
        
        const const_dados_mais_limpos = dados.map((item) => {
            const hora = Object.keys(item)[0];
            const valor = item[hora];
            dados_p_hora.push(valor[key])
        })
        setDataForGraph(dados_p_hora);
        
    }

    const dados_para_opções_dos_graficos = (opçãoSelecionada) => {

        const dados = dadosClimáticos.days

        switch (opçãoSelecionada) {
            case 'PRECIPITAÇÃO':
                return (
                    dados.map((dia) => (
                        <OptionOfDays onClick={() => click_dados_para_o_grafico(opçãoSelecionada, dia.date)} day={dia.date.slice(-2)} day_name={dia.weekday} value1={Math.round(dia.values.precipitationProbability)} value2={precipitação_risco(dia.values.precipitationProbability)} icon={'moon'} option={opçãoSelecionada} />
                    ))
                );

            case 'VENTO':
                return (
                    dados.map((dia) => (
                        <OptionOfDays onClick={() => click_dados_para_o_grafico(opçãoSelecionada, dia.date)} day={dia.date.slice(-2)} day_name={dia.weekday} value1={Math.round(dia.values.windSpeedMax)} value2={Math.round(dia.values.windSpeedMin)} icon={'moon'} option={opçãoSelecionada} />
                    ))
                );
            
            case 'UMIDADE':
                return (
                    dados.map((dia) => (
                        <OptionOfDays key={dia.date} onClick={() => click_dados_para_o_grafico(opçãoSelecionada, dia.date)} day={dia.date.slice(-2)} day_name={dia.weekday} value1={dia.values.humidityMax} value2={dia.values.humidityMin} icon={'moon'} option={opçãoSelecionada} />
                    ))
                );

            case 'VISIBILIDADE':
                return (
                    dados.map((dia) => (
                        <OptionOfDays key={dia.date} onClick={() => click_dados_para_o_grafico(opçãoSelecionada, dia.date)} day={dia.date.slice(-2)} day_name={dia.weekday} value1={Math.round(dia.values.visibilityMax)} value2={Math.round(dia.values.visibilityMin)} icon={'moon'} option={opçãoSelecionada} />
                    ))
                );

            case 'PRESSÃO':
                return (
                    dados.map((dia) => (
                        <OptionOfDays key={dia.date} onClick={() => click_dados_para_o_grafico(opçãoSelecionada, dia.date)} day={dia.date.slice(-2)} day_name={dia.weekday} value1={Math.round(dia.values.pressureSeaLevelMax)} value2={Math.round(dia.values.pressureSeaLevelMin)} icon={'moon'} option={opçãoSelecionada} />
                    ))
                );
            
            case 'UV': {
                return (
                    dados.map((dia) => (
                        <OptionOfDays key={dia.date} onClick={() => click_dados_para_o_grafico(opçãoSelecionada, dia.date)} day={dia.date.slice(-2)} day_name={dia.weekday} value1={dia.values.uvIndexMax} value2={uv_risco(dia.values.uvIndexMax)} icon={'moon'} option={opçãoSelecionada} />
                    ))
                );
            }
            
            case 'SENSAÇÃO':
                return (
                    dados.map((dia) => (
                        <OptionOfDays key={dia.date} onClick={() => click_dados_para_o_grafico(opçãoSelecionada, dia.date)} day={dia.date.slice(-2)} day_name={dia.weekday} value1={Math.round(dia.values.temperatureApparentMax)} value2={Math.round(dia.values.temperatureApparentMin)} icon={'moon'} option={opçãoSelecionada} />
                    ))
                );
        
            default:
                return (
                    dados.map((dia) => (
                        <OptionOfDays key={dia.date} onClick={() => click_dados_para_o_grafico(opçãoSelecionada, dia.date)} day={dia.date.slice(-2)} day_name={dia.weekday} value1={Math.round(dia.values.temperatureMax)} value2={Math.round(dia.values.temperatureMin)} icon={'moon'} option={opçãoSelecionada} />
                    ))
                );
        }
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
                            <p>{Math.round(dadosClimáticos.current.values.temperature)}<span>c</span></p>
                        </div>
                    </S.TemperatureDiv>
                    <S.TemperatureText>
                        <h2>Limpo</h2>
                        <h3>Sensação termica de <span>{Math.round(dadosClimáticos.current.values.temperatureApparent)}</span>°</h3>
                    </S.TemperatureText>
                </S.temperatureAndIconDiv>
                <S.summaryOfTheDayText>
                    <p>O Céu estará predominantemente limpo, A minima será de 12°</p>
                </S.summaryOfTheDayText>
                <S.summaryOfTheDay>
                    <div>
                        <p>Temperatura</p>
                        <p><span>{Math.round(dadosClimáticos.current.values.temperature)}</span>° <S.temperatureSymbol>c</S.temperatureSymbol></p>
                    </div>
                    <div>
                        <p>Vento</p>
                        <p><span>{Math.round(dadosClimáticos.current.values.windSpeed)}</span>km/h <FontAwesomeIcon icon={'arrow-right'} /></p>
                    </div>
                    <div>
                        <p>Umidade</p>
                        <p>{Math.round(dadosClimáticos.current.values.humidity)}%</p>

                    </div>
                    <div>
                        <p>Visibilidade</p>
                        <p>{Math.round(dadosClimáticos.current.values.visibility)}km</p>
                    </div>
                    <div>
                        <p>Pressão</p>
                        <p>{Math.round(dadosClimáticos.current.values.pressureSeaLevel)}mb</p>
                    </div>
                    <div>  
                        <p>Ponto de orvalho</p>
                        <p>{Math.round(dadosClimáticos.current.values.dewPoint)}°</p>
                    </div>
                </S.summaryOfTheDay>
            </S.textSection>
            <S.SectionForGraph>
                <S.OptionsForGraphDiv>
                    <p>Por Hora</p>
                    <S.OptionsForGraph>
                        <S.OptionContent onClick={() => {setSelectedOption(''); if (showOptions == true) {
                            setShowOptions(false);
                        }}}>
                            Visão Geral
                        </S.OptionContent>
                        <S.OptionContent onClick={() => {setSelectedOption('PRECIPITAÇÃO'); if (showOptions == true) {
                            setShowOptions(false);
                        }}}>
                            Precipitação
                        </S.OptionContent>
                        <S.OptionContent onClick={() => {setSelectedOption('VENTO'); if (showOptions == true) {
                            setShowOptions(false);
                        }}}>
                            Vento
                        </S.OptionContent>
                        <S.OptionContent onClick={() => {setSelectedOption('UMIDADE'); if (showOptions == true) {
                            setShowOptions(false);
                        }}}>
                            Umidade
                        </S.OptionContent>
                        <S.OptionContent onClick={() => {setSelectedOption('VISIBILIDADE'); if (showOptions == true) {
                            setShowOptions(false);
                        }}}>
                            Visibilidade
                        </S.OptionContent>
                        <S.OptionContent onClick={() => {setSelectedOption('PRESSÃO'); if (showOptions == true) {
                            setShowOptions(false);
                        }}}>
                            Pressão
                        </S.OptionContent>
                        <S.HiddenOptionsContent onClick={() => setShowOptions(!showOptions)}>
                            <FontAwesomeIcon icon={'ellipsis'} />
                            {showOptions &&
                                <S.hiddenOptions>
                                <div onClick={() => {setSelectedOption('UV');}}>
                                    <p>UV</p>
                                </div>
                                <div onClick={() => {setSelectedOption('SENSAÇÃO');}}>
                                    <p>Sensação</p>
                                </div>
                            </S.hiddenOptions>
                            }
                        </S.HiddenOptionsContent>
                    </S.OptionsForGraph>
                </S.OptionsForGraphDiv>
                <S.visãoGeralDias>
                    {dados_para_opções_dos_graficos(selectedOption)}
                </S.visãoGeralDias>
            </S.SectionForGraph>
            <S.Grafico>

                <Line options={options} data={data} />

            </S.Grafico>
            <S.DetalhesDoDia>
                <DetalhesClimaticosDoDia Titulo={'Temperatura'} Icone={'temperature-half'} alt_Icone={'Icone Temperatura'} Valor={Math.round(dadosClimáticos.current.values.temperature)} codigoValor={'°C'} subTitulo={'Lorem ipsum dolor sit amet consectetur.'} />
                
                <DetalhesClimaticosDoDia Titulo={'Sensação Térmica'} Icone={'temperature-low'} alt_Icone={'Icone Temperatura'} Valor={Math.round(dadosClimáticos.current.values.temperatureApparent)} codigoValor={'°C'} subTitulo={'Lorem ipsum dolor sit amet consectetur.'} />

                <DetalhesClimaticosDoDia Titulo={'Precipitação'} Icone={'droplet'} alt_Icone={'Icone Precipitação'} Valor={Math.round(dadosClimáticos.current.values.precipitationProbability)} codigoValor={'mm'} subTitulo={'Lorem ipsum dolor sit amet consectetur.'} />

                <DetalhesClimaticosDoDia Titulo={'Vento'} Icone={'wind'} alt_Icone={'Icone Vento'} Valor={Math.round(dadosClimáticos.current.values.windSpeed)} codigoValor={'km/h'} subTitulo={'Lorem ipsum dolor sit amet consectetur.'} />

                <DetalhesClimaticosDoDia Titulo={'Umidade'} Icone={'percent'} alt_Icone={'Icone Umidade'} Valor={Math.round(dadosClimáticos.current.values.humidity)} codigoValor={'%'} subTitulo={'Lorem ipsum dolor sit amet consectetur.'} />

                <DetalhesClimaticosDoDia Titulo={'Visibilidade'} Icone={'eye'} alt_Icone={'Icone Visibilidade'} Valor={Math.round(dadosClimáticos.current.values.visibility)} codigoValor={'km'} subTitulo={'Lorem ipsum dolor sit amet consectetur.'} />
                <DetalhesClimaticosDoDia Titulo={'Pressão'} Icone={'gauge-simple-high'} alt_Icone={'Icone Pressão'} Valor={Math.round(dadosClimáticos.current.values.pressureSeaLevel)} codigoValor={'mb'} subTitulo={'TLorem ipsum dolor sit amet consectetur.'} />

                <DetalhesClimaticosDoDia Titulo={'UV'} Icone={'circle-exclamation'} alt_Icone={'Icone UV'} Valor={dadosClimáticos.current.values.uvIndex} codigoValor={'Moderado'} subTitulo={'Lorem ipsum dolor sit amet consectetur.'} />

            </S.DetalhesDoDia>

        </S.Main>
    )
}