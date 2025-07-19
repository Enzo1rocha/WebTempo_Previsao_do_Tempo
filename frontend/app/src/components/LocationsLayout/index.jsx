import * as S from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function LocationsLayout ({Location_Name, State, ID, Country, Icon, lat, lon, Icon_OnClick, onClick}) {

    const handleIconClick = (e) => {
        e.stopPropagation();
        if (Icon_OnClick) {
            Icon_OnClick(e);
        }
    }

    const handleClick = (e) => {
        const DATA = {
            location_name: Location_Name,
            country: Country,
            state: State,
            lat: lat,
            lon: lon,
        }
        if (onClick) {
            console.log('clicado');
            onClick(e, DATA);
        }
    }

    return (
        <S.Container data-state={State} data-country={Country} data-lat={lat} data-long={lon} data-id={ID} onClick={handleClick}>
            <h1>{Location_Name}</h1>
            <p>{State} <br /> {Country}</p>
            <div data-id={ID} onClick={handleIconClick}>
                <FontAwesomeIcon icon={Icon} />
            </div>
        </S.Container>
    )   
};

export default LocationsLayout;