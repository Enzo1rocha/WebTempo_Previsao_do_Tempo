import * as S from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../assets/icons/icons.js';
import { useEffect, useState } from 'react';
import '../../assets/icons/icons.js';
import { useAuth } from '../../context/authContext.jsx';

function NavBar() {

    const [isMobileDesign, setIsMobileDesign] = useState(false)
    const [isMenuClicked, setIsMenuClicked] = useState(false)
    const [isWideScreen, setIsWideScreen] = useState(true)
    const user = useAuth();
    if (user.user) {
        const isUserLogged = true;
        
    } else {
        const isUserLogged = false;
    }
    
    

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
                        <S.NavItemMobile href="/forecast">Forecast</S.NavItemMobile>
                        <S.NavItemMobile href="/login">Login</S.NavItemMobile>
                        <S.NavItemMobile href="/about">About</S.NavItemMobile>
                        <S.NavItemMobile href="/contact">Contact</S.NavItemMobile>
                     </>
                    }
                    {(user.user) && 
                     <>
                        <S.NavItemMobile href="/">Home</S.NavItemMobile>
                        <S.NavItemMobile href="/forecast">Forecast</S.NavItemMobile>
                        <S.NavItemMobile href="/about">About</S.NavItemMobile>
                        <S.NavItemMobile href="/logout">Logout</S.NavItemMobile>
                        <S.NavItemMobile href="/contact">Contact</S.NavItemMobile>
                        <S.NavItemMobile href="/profile">Profile</S.NavItemMobile>
                     </>
                    }
                </S.NavItems>}

            <S.Logo href='/'>WebForecast</S.Logo>

            <S.SearchBar>
                {isWideScreen && <S.InputSearchBar type="text" placeholder="Search Forecast" />}
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
            </S.SearchBar>


        </S.Container>
        )
    }

    function desktopDesign() {
        return (
            <S.Container>
            <S.Logo href='/'>WebForecast</S.Logo>
            <S.Nav>
                {(user.user == null) && 
                 <>
                    <S.NavItem href="/">Home</S.NavItem>
                    <S.NavItem href="/forecast">Forecast</S.NavItem>
                    <S.NavItem href="/login">Login</S.NavItem>
                    <S.NavItem href="/about">About</S.NavItem>
                    <S.NavItem href="/contact">Contact</S.NavItem>
                 </>
                }
                {(user.user) && 
                 <>
                    <S.NavItem href="/">Home</S.NavItem>
                    <S.NavItem href="/forecast">Forecast</S.NavItem>
                    <S.NavItem href="/about">About</S.NavItem>
                    <S.NavItem href="/logout">Logout</S.NavItem>
                    <S.NavItem href="/contact">Contact</S.NavItem>
                    <S.NavItem href="/profile">Profile</S.NavItem>
                 </>
                }
            </S.Nav> 

            <S.SearchBar>
                {isWideScreen && <S.InputSearchBar type="text" placeholder="Search Forecast" />}
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
            </S.SearchBar>


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