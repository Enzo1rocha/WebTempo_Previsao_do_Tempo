import * as S from './styles';
import LocationsLayout from '../../components/LocationsLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LocationsPageService from '../../services/LocationsPageService';
import {useEffect, useState } from 'react';


function LocationsPage() {

    const [favoriteLocations, setFavoriteLocations] = useState([]);
    const [bootLocation, setBootLocation] = useState(null);
    const [loading, setLoading] = useState(true);

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

    const ChangeBootLocation = () => {
        console.log('Change Boot Location');
        }


    const AddFavoriteLocation = () => {
        console.log('Add Favorite Location');
    }

    const CallCityWeather = (e, DATA) => {
        const CITY_DATA = DATA
        // {city, state, country, lat, lon}
        console.log(`City: ${CITY_DATA.city}, State: ${CITY_DATA.state}, Country: ${CITY_DATA.country}, Lat: ${CITY_DATA.lat}, Lon: ${CITY_DATA.lon}`);
        
    }

    if (loading) {
        return (<div>Loading...</div>);
    }

    return (
        <S.Location_Page_Container>
            <S.Container_Locations>
                <S.Container_Boot_Location>
                    <h1>Boot Location</h1>
                    <div>
                        <LocationsLayout ID={1} 
                        onClick={(e, DATA) => {
                            const layoutData = JSON.stringify(DATA);
                            console.log(`Location Clicked: ${layoutData}`);
                        }} 

                        Icon_OnClick={(e) => {
                            const DATA_ID = e.currentTarget.getAttribute('data-id');
                            console.log(`Location Clicked with ID: ${DATA_ID}`);
                        }} 
                        City={bootLocation.location_name} Country_Code={(bootLocation.country_code).toUpperCase()}  State={bootLocation.state} Icon={'bars'} lat={bootLocation.lat} lon={bootLocation.long} />
                    </div>
                </S.Container_Boot_Location>
                <S.Container_Favorite_Locations>
                    <h1>Favorite Locations</h1>
                    <S.container_favorite_locations>
                        {favoriteLocations.map(location => (
                            <LocationsLayout key={location.id}
                            onClick={(e, DATA) => CallCityWeather(e, DATA)} 
                            Icon_OnClick={RemoveFavoriteLocation} 
                            City={location.location_name} 
                            Country_Code={location.country_code.toUpperCase()} 
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