import Welcome from "../../components/welcome";
import SignUp from '../../assets/authPageIMGS/SignUp.png'
import { useRef, useState, useEffect } from "react";
import geolocationService from '../../services/geolocationService';



function Register() {

    const [Title, setTitle] = useState("Create Account")
    const [LabelText, setLabelText] = useState("Sign Up")
    const [Text, setText] = useState("Sign In")
    const [Location, setLocation] = useState({lat:null, long:null})

    useEffect(() => {
            if ("geolocation" in navigator) {
                navigator.permissions.query({name: 'geolocation' }).then(async (result) => {
                    switch (result.state) {
                        case 'granted':
                        case 'prompt':
                            try {
                                const location = await geolocationService();
                                setLocation(location)
                            } catch (error) {
                                console.log('Erro ao obter localização', error);
                            } break;
                        default:
                            alert("Você bloqueou o acesso à localização. Ative nas configurações do navegador.")
                            break;
                    }
                }) 
            } else {
                console.log('GEOLOCATION IS NOT AVAILABLE');
                
            } 
        }, [])

    const handleRegister = async (formData) => {
        const fullData = {
            ...formData,
            lat: location.lat,
            long: location.long
        }
        console.log(fullData);
        return fullData
    };
    

    return (
        <Welcome img={SignUp} FormTitle={Title} LabelText={LabelText} Text={Text} ShowNameInput={true} isLogin={false} navigateTo={'/login'} onSubmit={handleRegister} />
    )
}

export default Register