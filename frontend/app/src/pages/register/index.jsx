import Welcome from "../../components/welcome";
import SignUp from '../../assets/authPageIMGS/SignUp.png'
import { useRef, useState, useEffect } from "react";
import geolocationService from '../../services/geolocationService';
import AuthService from "../../services/authService";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";


function Register() {
    const titulo = 'Create Account';
    const labelText = 'Sign Up';
    const texto = 'Sign In';
    const [Location, setLocation] = useState({})

    const { register } = useAuth();
    const navigate = useNavigate();

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
            const request = await register(fullData);
            
            if (request) {
                console.log('usuario registrado com sucesso');
                navigate('/user/favorite')
            } else {
                navigate('/login', {
                    state: { message: 'Conta criada com sucesso, faça login'}
                })
            }
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
            } else {
                console.error('Erro no registro: ', error);
                alert('Erro ao criar conta, tente novamente.')
                
            }
        }
        
    };
    

    return (
        <Welcome img={SignUp} FormTitle={titulo} LabelText={labelText} Text={texto} ShowNameInput={true} isLogin={false} navigateTo={'/login'} onSubmit={handleRegister} />
    )
}

export default Register