import * as S from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../assets/icons/icons.js';
import { useEffect, useState } from 'react';
import '../../assets/icons/icons.js';
import { useAuth } from '../../context/authContext.jsx';
import SearchBar from '../SearchBar/index.jsx';

const getScreenType = () => {
    if (typeof window === 'undefined') {
        return 'desktop';
    }

    return window.innerWidth <= 1024 ? 'mobile' : 'desktop';
};

function NavBar() {

    const [screenType, setScreenType] = useState(getScreenType());
    const [isMenuClicked, setIsMenuClicked] = useState(false)
    const [isSearchClicked, setIsSearchClicked] = useState(false)
    const user = useAuth();
    


    useEffect(() => {
        const handleResize = () => {
            setScreenType(getScreenType());
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []); 

    
    function mobileDesign() {

        function isSearchClicked_content() {
            return (
                <S.isSearchClicked>
                    <S.SearchBarContainer>
                        <SearchBar />
                    </S.SearchBarContainer>
                    <S.Container_Search_Icon clicked={isSearchClicked} onClick={() => {
                        if (isSearchClicked) {
                            setIsSearchClicked(false)
                        } else {
                            setIsSearchClicked(true)
                        }
                    }}>
                        <FontAwesomeIcon clicked={true  } icon='fa-solid fa-magnifying-glass-minus' />
                    </S.Container_Search_Icon>
                </S.isSearchClicked>
            )
        }

        function is_not_search_clicked_content() {
            return (
                <S.Container $menu_clicado={isMenuClicked}>

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

                <S.Container_Search_Icon clicked={isSearchClicked} onClick={() => {
                    if (!isSearchClicked) {
                        setIsSearchClicked(true)
                    } else {
                        setIsSearchClicked(true)
                    }
                }}>
                    <FontAwesomeIcon icon='fa-solid fa-magnifying-glass-plus' />
                </S.Container_Search_Icon>


            </S.Container>
            )
        }

        return (
            <>
                {isSearchClicked ? isSearchClicked_content() : is_not_search_clicked_content()}
            </>
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
                <S.SearchBarDesign />
            </S.SearchBarContainer>

        </S.Container>
        )
    }
    

    return (
        <>
            {
                screenType === 'mobile' ? mobileDesign() : desktopDesign()
            }
        </>
    )
}

export default NavBar;