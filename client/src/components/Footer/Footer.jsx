import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

import { HashLink } from 'react-router-hash-link';

//react-router
import {Link} from "react-router-dom";
//image
import logo from "../../images/logo/Frame 5.png";

const MainContainer = styled(Box)`
    display:flex;
    flex-direction:column;
`;

const Container = styled(Box)`
    height:200px;
    display:flex;
    margin-top:100px;
    & > p{
        color:white;
    },
    & > img{
        align-items:left;
        margin:50px 100px;
        height:100px;
        width:300px;
        margin-right:250px;
    }
`;

const LinkBox = styled(Box)`
margin-left:50px;
    display:flex;
    flex-direction:column;
    color:white;
    text-align: left; 
    
    
    & > ul{
        list-style:none;
        margin-left:none;
        padding-left:0;
        
        
        & > a{
        text-decoration:none;
        color:inherit;
    }
    },
    
`;

const LinksHeading = styled(Typography)`
    font-size:20px;
`;
const QuickLinks = styled(Typography)`
    font-size:25px;
`;

const Text = styled(Typography)`
    color:white;
    margin-bottom:50px;
`;

const Footer = ()=>{
    return(
        <MainContainer>
            <Container>
        <img src={logo} alt="logo" data-aos="zoom-out" data-aos-duration="5000"></img>
            <QuickLinks>Quick Links</QuickLinks>
            <LinkBox>
                <LinksHeading>
                    Social
                </LinksHeading>
                <ul>
                    {/* <Link to="/contact"><li>All are one</li></Link> */}
                    <HashLink smooth to='/#allone' > All are one</HashLink>
                    <br />
                    <HashLink smooth to='/#recent' > Recent Developments</HashLink>
                    <br />
                    <HashLink smooth to='/#dobit' > Do Your Bit</HashLink>
                    
                </ul>
            </LinkBox>
            <LinkBox>
                <LinksHeading>
                    Study
                </LinksHeading>
                <ul>
                    <HashLink smooth to='/#stats' > Stats</HashLink>
                    <br />
                    <Link to="/reports" ><li>Reports</li></Link>
                    <Link to="/about"><li>About</li></Link>
                    <Link to="/whyequality"><li>Why Equality?</li></Link>
                    
                </ul>
            </LinkBox>
            <LinkBox>
                <LinksHeading>
                    Contact
                </LinksHeading>
                <ul>
                    <Link to="/contact" ><li>Contact Us</li></Link>
                    
                </ul>
            </LinkBox>
        </Container>
        <Text>© Copyright EqualityInDiversity</Text>
        </MainContainer>
    );
}

export default Footer;