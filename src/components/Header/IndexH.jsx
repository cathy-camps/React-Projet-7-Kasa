import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeaderNavAccueil = styled.span`
position: absolute;
left: 75.08%; 
right: 13.95%
top: 25%;
bottom: 25%;
color: #FF6060;
 `
const HeaderNavAbout = styled.span`
position: absolute;
left: 90.65%; 
right: 0%
top: 25%;
bottom: 25%;
color: #FF6060;
 `
function Header() {
    return (
        <nav>
            <HeaderNavAccueil>Accueil</HeaderNavAccueil>
            <HeaderNavAbout>A Propos</HeaderNavAbout>
            <Link to="/">Accueil</Link>
            <Link to="/houses">A propos</Link>
        </nav>
    )
};



export default Header