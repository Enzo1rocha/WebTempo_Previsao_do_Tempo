import * as S from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function LocationsLayout ({City, Country_Code, State, Icon, Onclick}) {
    return (
        <S.Container>
            <h1>{City}</h1>
            <p>{Country_Code}, {State}</p>
            <div onClick={Onclick}>
                <FontAwesomeIcon icon={Icon} />
            </div>
        </S.Container>
    )   
};

export default LocationsLayout;