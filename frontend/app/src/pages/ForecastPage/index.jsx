import * as S from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DetalhesClimaticosDoDia from '../../components/DetalhesClimaticosDoDIa';
import OptionOfDays from '../../components/OptionOfDays';
import LocationsPageService from '../../services/LocationsPageService';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import useWindowWidth from '../../services/useWindowWidth';
import { getWeatherIcon, getWeatherColor } from '../../utils/weatherIcons';
import Loading from '../../components/Loading';

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
import { use, useState } from 'react';


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
    const [maxY, setMaxY] = useState(40);
    const [minY, setMixY] = useState(0);
    const windowWidth = useWindowWidth();
    const [LabelStep, setLabelStep] = useState('Temperatura');
    const [stepSize, setStepSize] = useState(10);
    const { lat, lon, name, country, state} = useParams();
    const { data: dadosClimáticos, isLoading, isError, error } = useQuery({

        queryKey: ['forecastData', {name, country, state, lon, lat}],

        queryFn: () => LocationsPageService.getForecast({name, country, state, lon, lat}),
        staleTime: 1000 * 60 * 10, // 10 minutes

        enabled: !!name && !!country && !!state && !!lon && !!lat,
    })



    if (isLoading) {
        return <Loading message="Carregando..." />;
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

    
    const pointColors = dataForGraph.map((_, index) => {
        return index % 2 === 0 ? 'rgb(55, 65, 81)' : 'transparent';
    });


    const tamanho_font_grafico = () => {
        if (windowWidth > 1024) {
            return 14
        } else if (windowWidth <= 1024 && windowWidth > 768) {
            return 12
        } else if (windowWidth <= 768 && windowWidth > 480) {
            return 10.5
        } else {
            return 9.5
        }
    }

    const tamanho_da_linha_do_grafico = () => {
        if (windowWidth > 1024) {
            return 3
        } else if (windowWidth <= 1024 && windowWidth > 768) {
            return 2.5
        } else if (windowWidth <= 768 && windowWidth > 480) {
            return 2.3
        } else {
            return 1.8
        }
    }

    const tamanho_ponto_do_grafico = () => {
        if (windowWidth > 1024) {
            return 5.5
        } else if (windowWidth <= 1024 && windowWidth > 768) {
            return 5
        } else if (windowWidth <= 768 && windowWidth > 480) {
            return 4.5
        } else {
            return 3.4
        }
    }

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
                        size:11,
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
                titleFont: { size: tamanho_font_grafico() },
                bodyFont: { size: tamanho_font_grafico() },
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
                        size: tamanho_font_grafico(),
                    },
                    callback: function(value, index, ticks) {
                        return index % 2 === 0 ? this.getLabelForValue(value) : null;
                    },
                    maxRotation: 0,
                    minRotation: 0,
                },
            },

            y: {
                min: minY,
                max: maxY,
                grace: '10%',

                ticks: {
                    stepSize: stepSize,
                    color: '#374151',
                    font: {
                        size: tamanho_font_grafico(),
                    }
                },

                grid: {
                    color: '#E5E7EB',
                    drawBorder: false,
                }
            }
        }
    };

    const labels = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'];


    const data = {
        labels,
        datasets : [{
            label: LabelStep,
            data: dataForGraph,
            borderColor: 'rgb(55, 65, 81)',
            backgroundColor: 'rgba(55, 65, 81, 0.5)',
            borderWidth: tamanho_da_linha_do_grafico(),
            tension: 0.35,
            fill: false,
            pointRadius: tamanho_ponto_do_grafico(),
            pointBackgroundColor: pointColors,
            pointBorderColor: pointColors,
        }],
    }

    const mensagens_detalhes_do_dia = (temperature, cloudcover, precipitationProbability) => {
        
        if (temperature && precipitationProbability == 0 && cloudcover < 20) {
            return ['Limpo', 'O dia está predominantemente limpo.'];
        } else if (temperature && precipitationProbability == 0 && cloudcover >= 20 && cloudcover < 50) {
            return ['Parcialmente Nublado', 'O dia está parcialmente nublado.'];
        } else if (temperature && precipitationProbability == 0 && cloudcover >= 50) {
            return ['Nublado', 'O dia está nublado.'];
        } else if (temperature && cloudcover && precipitationProbability > 0 && precipitationProbability <= 30) {
            return ['Chuva Leve', 'Há uma chance de chuva leve durante o dia.'];
        } else if (temperature && cloudcover && precipitationProbability > 30 && precipitationProbability <= 70) {
            return ['Chuva Moderada', 'Há uma chance de chuva moderada durante o dia.'];
        } else if (temperature && cloudcover && precipitationProbability > 70) {
            return ['Chuva Forte', 'Há uma alta chance de chuva forte durante o dia.'];
        } else if (temperature <= 15 && cloudcover && precipitationProbability == 0) {
            return ['Frio', 'O dia está frio e sem precipitação.'];
        } else if (temperature > 15 && temperature <= 23 && cloudcover && precipitationProbability == 0) {
            return ['Ameno', 'O dia está ameno e sem precipitação.'];
        } else if (temperature > 23 && cloudcover && precipitationProbability == 0) {
            return ['Quente', 'O dia está quente e sem precipitação.'];
        } else {
            return ['Clima Variável', 'O clima está variando ao longo do dia.'];
        }
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

    const temperatura_detalhes = (temperature) => {
        if (temperature <= 15) {
            return 'Clima está frio, se agasalhe bem!';
        } else if (temperature > 15 && temperature <= 23) {
            return 'Clima está ameno, aproveite o dia!';
        } else if (temperature > 23 && temperature <= 30) {
            return 'Clima está quente, hidrate-se!';
        } else {
            return 'Clima está muito quente, evite exposição ao sol!';
        }
    }

    const sensação_termica = (temperature) => {
        if (temperature <= 15) {
            return 'Sensação térmica está fria, cuide-se!';
        } else if (temperature > 15 && temperature <= 23) {
            return 'sensação térmica está amena, aproveite o dia!';
        } else if (temperature > 23 && temperature <= 30) {
            return 'Sensação térmica está quente, hidrate-se bem e tome cuidado!';
        } else {
            return 'Sensação térmica está muito quente, evite exposição ao sol e hidrate-se constantemente!';
        }
    }

    const umidade_detalhes = (umidade) => {
        if (umidade > 80) {
            return 'Umidade muito alta. Sensação de abafado e pegajoso. O ar pode ficar pesado para respirar.';
        } else if (umidade >= 60 && umidade <= 80) {
            return 'Umidade alta. Condições de vapor. Sensação de calor e desconforto.';
        } else if (umidade >= 40 && umidade < 60) {
            return 'Umidade ideal. Condições confortáveis e perfeitas para o dia a dia.';
        } else if (umidade >= 20 && umidade < 40) {
            return 'Umidade baixa. Pode causar desconforto, ressecamento nos olhos e garganta.';
        } else {
            return 'Umidade muito baixa. Condições de ar seco. Beba bastante água e se hidrate!';
        }
    };

    const condicaoVento_detalhes = (velocidade) => {
        if (velocidade < 5) {
            return 'Vento calmo. Perfeito para atividades ao ar livre!';
        } else if (velocidade >= 5 && velocidade <= 20) {
            return 'Brisa leve. Agradável para o dia!';
        } else if (velocidade > 20 && velocidade <= 40) {
            return 'Vento moderado. Pode ser um pouco difícil carregar objetos leves.';
        } else {
            return 'Vento forte. Cuidado com objetos voando e galhos de árvores!';
        }
    };

    const visibilidade_detalhes = (distancia) => {
        if (distancia >= 10) {
            return 'Visibilidade excelente. O céu está limpo e a visão é panorâmica!';
        } else if (distancia >= 4 && distancia < 10) {
            return 'Visibilidade boa. Condições normais para dirigir e para atividades ao ar livre.';
        } else if (distancia >= 1 && distancia < 4) {
            return 'Visibilidade baixa. Cuidado ao dirigir.';
        } else {
            return 'Visibilidade muito baixa. Perigoso para dirigir. Procure um local seguro.';
        }
    };

    const probabilidadePrecipitacao_detalhes = (probabilidade) => {
        if (probabilidade >= 75) {
            return 'Alta probabilidade de chuva. É quase certeza que vai chover.';
        } else if (probabilidade >= 50 && probabilidade < 75) {
            return 'Média probabilidade de chuva. É bom estar preparado, pois a chance é considerável.';
        } else if (probabilidade >= 25 && probabilidade < 50) {
            return 'Baixa probabilidade de chuva. A chance de chover é pequena';
        } else {
            return 'Nenhuma ou baixíssima probabilidade de chuva.';
        }
    };

    const pressao_detalhes = (pressao) => {
        if (pressao > 1020) {
            return 'Pressão alta. Indica clima estável e bom tempo. Céu claro ou poucas nuvens.';
        } else if (pressao >= 1010 && pressao <= 1020) {
            return 'Pressão normal. Condições meteorológicas típicas, sem grandes mudanças previstas.';
        } else if (pressao >= 990 && pressao < 1010) {
            return 'Pressão baixa. Aumenta a chance de tempo instável, como chuvas ou tempestades.';
        } else {
            return 'Pressão muito baixa. Indica instabilidade severa. Fique atento a alertas de tempestades ou ventos fortes.';
        }
    };



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
                setMaxY(100)
                setMixY(0)
                setStepSize(20)
                setLabelStep('Probabilidade de Chuva %')
                return 'precipitationProbability';
            case 'VENTO':
                setMaxY(80)
                setMixY(0)
                setStepSize(20)
                setLabelStep('Vento')
                return 'windSpeed';
            case 'UMIDADE':
                setMaxY(100)
                setMixY(0)
                setStepSize(20)
                setLabelStep('Umidade')
                return 'humidity';
            case 'VISIBILIDADE':
                setMaxY(60)
                setMixY(0)
                setStepSize(15)
                setLabelStep('Visibilidade')
                return 'visibility';
            case 'PRESSÃO':
                setMaxY(1040)
                setMixY(1000)
                setStepSize(10)
                setLabelStep('Pressão mb')
                return 'pressureSeaLevel';
            case 'UV':
                setMaxY(12)
                setMixY(0)
                setStepSize(2)
                setLabelStep('UV')
                return 'uvIndex';
            case 'SENSAÇÃO':
                setMaxY(40)
                setMixY(0)
                setStepSize(10)
                setLabelStep('Sensação')
                return 'temperatureApparent';
            default:
                setMaxY(40)
                setMixY(0)
                setStepSize(10)
                setLabelStep('Temperatura')
                return 'temperature';
        }
    }
    const click_dados_para_o_grafico = (opção, data) => {
        const key = chave_para_pegar_dados_nos_dados_climáticos_do_grafico(opção);
        let dados = dadosClimáticos.days.find((dia) => dia.date === data);
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
        
        const dataMap = {
        'PRECIPITAÇÃO': {
            value1: (dia) => Math.round(dia.values.precipitationProbability),
            value2: (dia) => precipitação_risco(dia.values.precipitationProbability),
        },
        'VENTO': {
            value1: (dia) => Math.round(dia.values.windSpeedMax),
            value2: (dia) => Math.round(dia.values.windSpeedMin),
        },
        'UMIDADE': {
            value1: (dia) => dia.values.humidityMax,
            value2: (dia) => dia.values.humidityMin,
        },
        'VISIBILIDADE': {
            value1: (dia) => Math.round(dia.values.visibilityMax),
            value2: (dia) => Math.round(dia.values.visibilityMin),
        },
        'PRESSÃO': {
            value1: (dia) => Math.round(dia.values.pressureSeaLevelMax),
            value2: (dia) => Math.round(dia.values.pressureSeaLevelMin),
        },
        'UV': {
            value1: (dia) => dia.values.uvIndexMax,
            value2: (dia) => uv_risco(dia.values.uvIndexMax), // Supondo que 'uv_risco' é uma função existente
        },
        'SENSAÇÃO': {
            value1: (dia) => Math.round(dia.values.temperatureApparentMax),
            value2: (dia) => Math.round(dia.values.temperatureApparentMin),
        },
        'PADRÃO': { // Usado para o default, que é a temperatura
            value1: (dia) => Math.round(dia.values.temperatureMax),
            value2: (dia) => Math.round(dia.values.temperatureMin),
        }
    };

    const dados = dadosClimáticos.days;

    const selectedMapping = dataMap[opçãoSelecionada] || dataMap['PADRÃO'];

    return dados.map((dia) => (
        <OptionOfDays
            key={dia.date}
            onClick={() => click_dados_para_o_grafico(opçãoSelecionada, dia.date)}
            day={dia.date.slice(-2)}
            day_name={dia.weekday}
            value1={selectedMapping.value1(dia)}
            value2={selectedMapping.value2(dia)}
            icon={getWeatherIcon(dia.values.weatherCodeMax, true)} icon_color={getWeatherColor(dia.values.weatherCodeMax, true)}
            option={opçãoSelecionada}
        />
    ));
    }

    const responsividade_para_as_opcoes_dos_dias = () => {

        if (windowWidth > 600) {
            return (
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
            )
        } else {
            return (
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
                                <div onClick={() => {setSelectedOption('VISIBILIDADE');}}>
                                    <p>Visibilidade</p>
                                </div>
                                <div onClick={() => {setSelectedOption('PRESSÃO');}}>
                                    <p>Pressão</p>
                                </div>
                            </S.hiddenOptions>
                            }
                        </S.HiddenOptionsContent>
                    </S.OptionsForGraph>
            )
        }
    }


    const detalhes = mensagens_detalhes_do_dia(dadosClimáticos.current.values.temperature, dadosClimáticos.current.values.cloudCover, dadosClimáticos.current.values.precipitationProbability);

    const WeatherIconComponent = getWeatherIcon(dadosClimáticos.current.values.weatherCode, true)
    const Icon_color = getWeatherColor(dadosClimáticos.current.values.weatherCode, true)

    return (
        <S.conteudo_inteiro>

            <S.Main>
            <S.textSection>
                <S.localName>
                    <p>Clima Atual</p>
                    <div>
                        <p>{dadosClimáticos.location_name} - {dadosClimáticos.state} - {dadosClimáticos.country}</p>
                    </div>
                </S.localName>
                <S.temperatureAndIconDiv>
                    <S.TemperatureDiv>
                        <WeatherIconComponent color={Icon_color} />
                        <div>
                            <p>{Math.round(dadosClimáticos.current.values.temperature)}<span>°C</span></p>
                        </div>
                    </S.TemperatureDiv>
                    <S.TemperatureText>
                        <h2>{detalhes[0]}</h2>
                        <h3>Sensação termica de <span>{Math.round(dadosClimáticos.current.values.temperatureApparent)}</span>°</h3>
                    </S.TemperatureText>
                </S.temperatureAndIconDiv>
                <S.summaryOfTheDayText>
                    <p>{detalhes[1]}</p>
                </S.summaryOfTheDayText>
                <S.summaryOfTheDay rotacao_seta_vento={dadosClimáticos.current.values.windDirection}>
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
                    {responsividade_para_as_opcoes_dos_dias()}
                </S.OptionsForGraphDiv>
                <S.visãoGeralDias>
                    {dados_para_opções_dos_graficos(selectedOption)}
                </S.visãoGeralDias>
            </S.SectionForGraph>
            <S.Grafico>

                <Line options={options} data={data} />

            </S.Grafico>
            <S.DetalhesDoDia>
                <DetalhesClimaticosDoDia Titulo={'Temperatura'} Icone={'temperature-half'} alt_Icone={'Icone Temperatura'} Valor={Math.round(dadosClimáticos.current.values.temperature)} codigoValor={'°C'} subTitulo={temperatura_detalhes(dadosClimáticos.current.values.temperature)} />
                
                <DetalhesClimaticosDoDia Titulo={'Sensação Térmica'} Icone={'temperature-low'} alt_Icone={'Icone Temperatura'} Valor={Math.round(dadosClimáticos.current.values.temperatureApparent)} codigoValor={'°C'} subTitulo={sensação_termica(dadosClimáticos.current.values.temperatureApparent)} />

                <DetalhesClimaticosDoDia Titulo={'Probabilidade de Chuva'} Icone={'droplet'} alt_Icone={'Icone Precipitação'} Valor={Math.round(dadosClimáticos.current.values.precipitationProbability)} codigoValor={'%'} subTitulo={probabilidadePrecipitacao_detalhes(dadosClimáticos.current.values.precipitationProbability)} />

                <DetalhesClimaticosDoDia Titulo={'Vento'} Icone={'wind'} alt_Icone={'Icone Vento'} Valor={Math.round(dadosClimáticos.current.values.windSpeed)} codigoValor={'km/h'} subTitulo={condicaoVento_detalhes(dadosClimáticos.current.values.windSpeed)} />

                <DetalhesClimaticosDoDia Titulo={'Umidade'} Icone={'percent'} alt_Icone={'Icone Umidade'} Valor={Math.round(dadosClimáticos.current.values.humidity)} codigoValor={'%'} subTitulo={umidade_detalhes(dadosClimáticos.current.values.humidity)} />

                <DetalhesClimaticosDoDia Titulo={'Visibilidade'} Icone={'eye'} alt_Icone={'Icone Visibilidade'} Valor={Math.round(dadosClimáticos.current.values.visibility)} codigoValor={'km'} subTitulo={visibilidade_detalhes(dadosClimáticos.current.values.visibility)} />
                <DetalhesClimaticosDoDia Titulo={'Pressão'} Icone={'gauge-simple-high'} alt_Icone={'Icone Pressão'} Valor={Math.round(dadosClimáticos.current.values.pressureSeaLevel)} codigoValor={'mb'} subTitulo={pressao_detalhes(dadosClimáticos.current.values.pressureSeaLevel)} />

                <DetalhesClimaticosDoDia Titulo={'UV'} Icone={'circle-exclamation'} alt_Icone={'Icone UV'} Valor={dadosClimáticos.current.values.uvIndex} codigoValor={uv_risco(dadosClimáticos.current.values.uvIndex)} subTitulo={`O indice UV atualmente está: ${uv_risco(dadosClimáticos.current.values.uvIndex)}`} />

            </S.DetalhesDoDia>

        </S.Main>

        </S.conteudo_inteiro>
    )
}