import * as S from './styles';
import LocationsLayout from '../../components/LocationsLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function LocationsPage() {
    return (
        <S.Location_Page_Container>
            <S.Container_Locations>
                <S.Container_Boot_Location>
                    <h1>Boot Location</h1>
                    <div>
                        <LocationsLayout City={'Paris'} Country_Code={'FR'} State={'Lie de france'} Icon={'bars'} />
                    </div>
                </S.Container_Boot_Location>
                <S.Container_Favorite_Locations>
                    <h1>Favorite Locations</h1>
                    <S.container_favorite_locations>
                        <LocationsLayout City={'Paris'} Country_Code={'FR'} State={'Lie de france'} Icon={'delete-left'} />
                        <LocationsLayout City={'Paris'} Country_Code={'FR'} State={'Lie de france'} Icon={'delete-left'} />
                        <LocationsLayout City={'Paris'} Country_Code={'FR'} State={'Lie de france'} Icon={'delete-left'} />
                        <LocationsLayout City={'Paris'} Country_Code={'FR'} State={'Lie de france'} Icon={'delete-left'} />
                        <S.Container_add_favorite_locations>
                            <FontAwesomeIcon icon={'plus'} />
                        </S.Container_add_favorite_locations>
                        
                    </S.container_favorite_locations>
                </S.Container_Favorite_Locations>
            </S.Container_Locations>
        </S.Location_Page_Container>
    )
}

export default LocationsPage;