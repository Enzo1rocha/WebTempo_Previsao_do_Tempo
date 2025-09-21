import * as S from './styles'
import LocationsLayout from '../../components/LocationsLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LocationsPageService from '../../services/LocationsPageService';
import {useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChangeBootLocation from '../../components/ChangeBootLocation';
import { useAuth } from '../../context/AuthContext';


function ProfilePage() {

    const { user } = useAuth();
    const [favoriteLocations, setFavoriteLocations] = useState([]);
    const [bootLocation, setBootLocation] = useState(null);;
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [mostrarChangeBootLocation, setMostrarChangeBootLocation] = useState(false)

    useEffect(() => {
        if (user && user.message) {
            setBootLocation(user.message.boot_location || []);
            setFavoriteLocations(user.message.favorite_locations || []);
            setLoading(false);
        } else {
            setBootLocation(user.boot_location || []);
            setFavoriteLocations(user.favorite_locations || []);
            setLoading(false);
        }
    }, [user]);


    console.log('renderizou');

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

    const CallCityWeather = (e, url) => {
        navigate(`/${url}`)
    }

    if (loading) {
        return (<div>Loading...</div>);
    }

    console.log(favoriteLocations);
    console.log(bootLocation);
    
    

    return ( // adicionar informações do usuário aqui
        <S.Location_Page_Container>
            <S.Container_User_Details>
                <h1>Sua Conta</h1>

                <S.content_user_details>
                    <p>Aqui voce consegue ver algumas informações da sua conta e mudar sua senha</p>
                    <div>
                        <div>
                            <p><strong>Username:</strong> {user.username}</p>
                            <p><strong>Email:</strong> {user.email}</p>
                        </div>
                        <S.container_buttons>
                            <S.change_password>
                                <a href="/user/change-password">Mudar Senha</a>
                                <FontAwesomeIcon icon={"shield-halved"} />
                            </S.change_password>
                            <S.logout>
                                <a href="/user/logout">Logout</a>
                                <FontAwesomeIcon icon={"right-from-bracket"} />
                            </S.logout> 
                        </S.container_buttons>
                    </div>
                </S.content_user_details>
            </S.Container_User_Details>

            {mostrarChangeBootLocation ? <ChangeBootLocation ReturnClick={HandleBootLocationClick} /> : null}

            <S.Container_Locations>
                <S.Container_Boot_Location>
                    <h1>Boot Location</h1>
                    <div>
                        <LocationsLayout ID={1} 
                        onClick={(e, DATA) => CallCityWeather(e, DATA)} 

                        Icon_OnClick={HandleBootLocationClick} 
                        Country={bootLocation.country}  State={bootLocation.state} Icon={'pencil'} lat={bootLocation.lat} lon={bootLocation.long} Location_Name={bootLocation.location_name} />
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
                            Icon={'x'} ID={location.id} />
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

export default ProfilePage;