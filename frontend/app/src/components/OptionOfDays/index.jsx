import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as S from "./styles"

export default function OptionOfDays({day, day_name, value1, value2, icon, icon_color, option, onClick}) {

    const METRIC_CONFIG = {
        'PRECIPITAÇÃO': { min: 0, max: 100, unit: '' },
        'VENTO':        { min: 0, max: 50, unit: 'Km/h' }, 
        'UMIDADE':      { min: 0, max: 100, unit: '%' },
        'VISIBILIDADE': { min: 0, max: 20, unit: 'Km' },   
        'PRESSÃO':      { min: 980, max: 1040, unit: 'mb' },
        'UV':           { min: 0, max: 12, unit: '' }, 
        'SENSAÇÃO':     { min: -10, max: 40, unit: '°' },
    };

    const options_class_names = (option) => {
        if (option === 'UV') {
            return 'uv';
        } else if (option === 'PRECIPITAÇÃO') {
            return 'precipitação';
        }  
        else {
            return null;
        }
    }

    const normalizarValor = (valor, min, max) => {
    if (max === min) return 0;

    const percentual = ((valor - min) / (max - min)) * 100;

    return Math.max(0, Math.min(percentual, 100));
    };

    const get_option = () => {

        const config = METRIC_CONFIG[option];
        const WeatherIconComponent = icon
        const IconColor = icon_color

        if (!config) {
        return (
            <S.conteudo_com_dados>
                <S.icone>
                    <WeatherIconComponent color={icon_color} />
                </S.icone>
                <S.valor_a_direita>
                    <p>{value1}°</p>
                    <p>{value2}°</p>
                </S.valor_a_direita>
            </S.conteudo_com_dados>
            );
        }

        const altura_percentual = normalizarValor(value1, config.min, config.max);

        return (
            <S.conteudo_com_dados>
                <S.valor_a_esquerda>
                    <p>{value1}<span>{config.unit}</span></p>
                    <p className={options_class_names(option)}>{value2}<span>{config.unit}</span></p>
                </S.valor_a_esquerda>
                <S.encher>
                    <S.valor altura_percentual={altura_percentual}></S.valor>
                </S.encher>
            </S.conteudo_com_dados>
        );
    }

    return (
        <S.Container onClick={onClick}>
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