import { AppBar, Toolbar, Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";

import { HashLink } from 'react-router-hash-link';

//image
import logo from "../../images/logo/Frame 5.png";

const Component = styled(AppBar)`
    background: white;
    color: #000;
`;

const Container = styled(Toolbar)`
    justify-content: center;
    background:black;
        color:white;
    & > a{
        padding:20px;
        color: inherit;
        text-decoration:none;
    }, 
    
`;

const LogoImage = styled("img")({
    height:"50px",
});

const Navbar = ()=>{
    return (
        <div>
            <Component>
                <Container>
                
                <Link to="/"><LogoImage src={logo} alt="logo" /></Link>
                <Link to="/">Home</Link>
                <Link to="/whyequality">Why equality?</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    {/* <Link to="stats">Stats</Link> */}
                    <HashLink smooth to='/#stats' > Stats</HashLink>
                    {/* <a href="/#stats">Stats</a> */}
                    <Link to="/reports">Reports</Link>
                </Container>
            </Component>
        </div>
    )
}

export default Navbar;