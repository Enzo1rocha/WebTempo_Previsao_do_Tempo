import Welcome from "../../components/welcome";
import SignIn from '../../assets/authPageIMGS/SignIn.png'
import { use, useRef, useState } from "react";
import { Form } from "react-router-dom";
import AuthService from "../../services/authService";
import { useAuth } from "../../context/authContext";

function Login() {
    const { login } = useAuth();
    const [FormTitle, setFormTitle] = useState("Welcome Back")

    const [LabelText, setLabelText] = useState('Sign In')

    const [Text, setText] = useState('Sign Up')

    const handleLogin = async (data) => {
        try {
            console.log(data);
            
            login(data);
            
        } catch (error) {
            console.log('Erro ao fazer login', error)
        }
    }

    return (
        <Welcome img={SignIn} FormTitle={FormTitle} LabelText={LabelText} Text={Text} ShowNameInput={false} isLogin={true} navigateTo={'/register'} onSubmit={handleLogin} />
    )
}

export default Login
