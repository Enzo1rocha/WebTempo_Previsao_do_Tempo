import * as S from './styles';
import LocationsLayout from '../../components/LocationsLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LocationsPageService from '../../services/LocationsPageService';
import {useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChangeBootLocation from '../../components/ChangeBootLocation';


function LocationsPage() {

    const [favoriteLocations, setFavoriteLocations] = useState([]);
    const [bootLocation, setBootLocation] = useState(null);
    const [loading, setLoading] = useState(true);
    const [mostrarChangeBootLocation, setMostrarChangeBootLocation] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        RenderFavoriteLocationsAndBootLocation()
    }, []);


    console.log('renderizou');

    const RenderFavoriteLocationsAndBootLocation = async () => {
        try {
            const FavoriteLocations = await LocationsPageService.getFavoriteLocations();
            const BootLocation = await LocationsPageService.getBootLocation();
            setFavoriteLocations(FavoriteLocations.message);
            setBootLocation(BootLocation.message); 
        } catch (error) {
            console.log('Erro ao renderizar localizações favoritas e localização inicial', error);
            throw error;
        } finally {
            setLoading(false);
        }
    }

    const RemoveFavoriteLocation = (e) => {
        const DATA_ID = e.currentTarget.getAttribute('data-id');
        try {
            LocationsPageService.removeFavoriteLocation(DATA_ID)
                .then(() => {
                    setFavoriteLocations(prevLocations => 
                        prevLocations.filter(location => location.id !== parseInt(DATA_ID))
                    );
                });
        } catch (error) {
            console.log('Erro ao remover local favorito', error);
            throw error;
            
        }
    }

    const HandleBootLocationClick= () => {
        console.log('cliquei');
        
        setMostrarChangeBootLocation(!mostrarChangeBootLocation)
        }

    const AddFavoriteLocation = () => {
        navigate('/user/favorite/add')
    }

    const CallCityWeather = (e, DATA) => {
        const CITY_DATA = DATA
        // {city, state, country, lat, lon}
        console.log(CITY_DATA);
        
    }

    if (loading) {
        return (<div>Loading...</div>);
    }

    console.log(favoriteLocations);
    console.log(bootLocation);
    
    

    return (
        <S.Location_Page_Container>
            {mostrarChangeBootLocation ? <ChangeBootLocation ReturnClick={HandleBootLocationClick} /> : null}
            <S.Container_Locations>
                <S.Container_Boot_Location>
                    <h1>Boot Location</h1>
                    <div>
                        <LocationsLayout ID={1} 
                        onClick={(e, DATA) => {
                            const layoutData = JSON.stringify(DATA);
                            console.log(`Location Clicked: ${layoutData}`);
                        }} 

                        Icon_OnClick={HandleBootLocationClick} 
                        Country={bootLocation.country}  State={bootLocation.state} Icon={'pen-to-square'} lat={bootLocation.lat} lon={bootLocation.long} Location_Name={bootLocation.location_name} />
                    </div>
                </S.Container_Boot_Location>
                <S.Container_Favorite_Locations>
                    <h1>Favorite Locations</h1>
                    <S.container_favorite_locations>
                        {favoriteLocations.map(location => (
                            
                            <LocationsLayout key={location.id}
                            onClick={(e, DATA) => CallCityWeather(e, DATA)} 
                            Icon_OnClick={RemoveFavoriteLocation} 
                            Location_Name={location.location_name} 
                            Country={location.country}
                            State={location.state} 
                            lat={location.lat} 
                            lon={location.long} 
                            Icon={'delete-left'} ID={location.id} />
                        ))}
                        <S.Container_add_favorite_locations onClick={AddFavoriteLocation}>
                            <FontAwesomeIcon icon={'plus'} />
                        </S.Container_add_favorite_locations>
                        
                    </S.container_favorite_locations>
                </S.Container_Favorite_Locations>
            </S.Container_Locations>
        </S.Location_Page_Container>
    )
}

export default LocationsPage;