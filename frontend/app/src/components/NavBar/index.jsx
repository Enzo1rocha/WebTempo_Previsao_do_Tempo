import * as S from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../assets/icons/icons.js';
import { useEffect, useState } from 'react';
import '../../assets/icons/icons.js';
import { useAuth } from '../../context/authContext.jsx';
import SearchBar from '../SearchBar/index.jsx';

function NavBar() {

    const [isMobileDesign, setIsMobileDesign] = useState(false)
    const [isMenuClicked, setIsMenuClicked] = useState(false)
    const [isWideScreen, setIsWideScreen] = useState(true)
    const user = useAuth();
    

    if (isWideScreen === true && window.innerWidth <= 1024) {
        setIsWideScreen(false);
    } else if (!isMobileDesign && window.innerWidth <= 820) {
        setIsMobileDesign(true);
    }

    useEffect(() => {
        const handleResize = () => {
            setIsWideScreen(window.innerWidth >= 1024);
            setIsMobileDesign(window.innerWidth <= 820);
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    function mobileDesign() {
        return (
            <S.Container>

            <S.NavMobile onClick={() => {
                if (isMenuClicked) {
                    setIsMenuClicked(false);
                }
                else {
                    setIsMenuClicked(true);
                }
            }}>
                <FontAwesomeIcon icon="fa-solid fa-bars" />
            </S.NavMobile>
            {isMenuClicked && 
                <S.NavItems>
                    {(user.user == null) && 
                     <>
                        <S.NavItemMobile href="/">Home</S.NavItemMobile>
                        <S.NavItemMobile href="/forecast">Previsão</S.NavItemMobile>
                        <S.NavItemMobile href="/login">Entrar</S.NavItemMobile>
                        <S.NavItemMobile href="/about">Sobre</S.NavItemMobile>
                        <S.NavItemMobile href="/contact">Contato</S.NavItemMobile>
                     </>
                    }
                    {(user.user) && 
                     <>
                        <S.NavItemMobile href="/">Home</S.NavItemMobile>
                        <S.NavItemMobile href="/forecast">Previsão</S.NavItemMobile>
                        <S.NavItemMobile href="/about">Sobre</S.NavItemMobile>
                        <S.NavItemMobile href="/user/logout">Sair</S.NavItemMobile>
                        <S.NavItemMobile href="/contact">Contato</S.NavItemMobile>
                        <S.NavItemMobile href="/user/profile">Perfil</S.NavItemMobile>
                     </>
                    }
                </S.NavItems>}

            <S.Logo href='/'>WebTempo</S.Logo>

            <S.SearchBarContainer>
                <SearchBar />
            </S.SearchBarContainer>


        </S.Container>
        )
    }

    function desktopDesign() {
        return (
            <S.Container>
            <S.Logo href='/'>WebTempo</S.Logo>
            <S.Nav>
                {(user.user == null) && 
                 <>
                    <S.NavItem href="/">Home</S.NavItem>
                    <S.NavItem href="/login">Entrar</S.NavItem>
                    <S.NavItem href="/about">Sobre</S.NavItem>
                    <S.NavItem href="/contact">Contato</S.NavItem>
                 </>
                }
                {(user.user) && 
                 <>
                    <S.NavItem href="/">Home</S.NavItem>
                    <S.NavItem href="/about">Sobre</S.NavItem>
                    <S.NavItem href="/user/logout">Sair</S.NavItem>
                    <S.NavItem href="/contact">Contato</S.NavItem>
                    <S.NavItem href="/user/profile">Perfil</S.NavItem>
                 </>
                }
            </S.Nav> 

            <S.SearchBarContainer>
                <SearchBar />
            </S.SearchBarContainer>

        </S.Container>
        )
    }
    

    return (
        <>
            {isMobileDesign ? mobileDesign() : desktopDesign()}
        </>
    )
}

export default NavBar;