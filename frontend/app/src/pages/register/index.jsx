import Welcome from "../../components/welcome";
import SignUp from '../../assets/authPageIMGS/SignUp.png'
import { useRef, useState, useEffect } from "react";
import geolocationService from '../../services/geolocationService';
import AuthService from "../../services/authService";



function Register() {

    const [Title, setTitle] = useState("Create Account")
    const [LabelText, setLabelText] = useState("Sign Up")
    const [Text, setText] = useState("Sign In")
    const [Location, setLocation] = useState({})
    const errorMessages = {
    "This password is too common.": "Senha muito fraca",
    "This field may not be blank.": "Campo obrigatório",
    "Unable to log in with provided credentials.": "Credenciais inválidas",
    "user with this email already exists.": "Este e-mail já está em uso",
    "A user with that username already exists.": 'Um usuário com este nome ja existe.',
    "The password is too similar to the username.": 'A senha é muito similar ao nome de usuário',
    "This password is too short. It must contain at least 8 characters.": 'Essa senha é muito curta. (deve conter no minimo 8 caracteres)',
    'The password is too similar to the email.': 'A senha é muito similar ao email.'
    };

    useEffect(() => {
            if ("geolocation" in navigator) {
                navigator.permissions.query({name: 'geolocation' }).then(async (result) => {
                    switch (result.state) {
                        case 'granted':
                        case 'prompt':
                            try {
                                const location = await geolocationService();
                                console.log(location);
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
            'lat_boot_location': String(Location.lat),
            'long_boot_location': String(Location.long)
        }
        console.log(fullData);

        try {
            const request = await AuthService.register(fullData)  
            console.log(request)
        } catch (error) {
            if (error.response && error.response.data) {
                const erros = error.response.data
                let mensagem = '';

                for (const key in erros) {
                    const msgIngles = erros[key][0];
                    mensagem += errorMessages[msgIngles] ? errorMessages[msgIngles] : msgIngles;
                    mensagem += '\n';
                 }
                console.log(mensagem);
                
                alert(mensagem)
            }
        }
        
    };
    

    return (
        <Welcome img={SignUp} FormTitle={Title} LabelText={LabelText} Text={Text} ShowNameInput={true} isLogin={false} navigateTo={'/login'} onSubmit={handleRegister} />
    )
}

export default Register