import * as S from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';


function LocationsLayout ({Location_Name, State, ID, Country, Icon, lat, lon, Icon_OnClick, onClick}) {

    const navigate = useNavigate()

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
            let url = `forecast/${DATA.location_name}/${DATA.country}/${DATA.state}/${DATA.lon}/${DATA.lat}`
            onClick(e, url);
        }
    }

    return (
        <S.Container data-state={State} data-country={Country} data-lat={lat} data-long={lon} data-id={ID} onClick={handleClick}>
            <h1>{Location_Name}</h1>
            <p>{State}, {Country}</p>
            <div data-id={ID} onClick={handleIconClick}>
                <FontAwesomeIcon icon={Icon} />
            </div>
        </S.Container>
    )   
};

export default LocationsLayout;