import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

//image
import AllOneSecImage from "../../images/AllOneSection/Frame 3iii.png";
 
//aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const AllOneSection = styled(Box)`
    margin-top:200px;
    color:white;
`;

const Text = styled(Typography)`
    font-weight:800;
    font-size:80px;
    font-family: 'Anton', sans-serif;
`;

const ImageContainer = styled(Box)`
    margin: 0 100px;
    & > img{
        object-fit: cover;
        width:100%;
        margin-top:20px;
    }
`;

const AllAreOne = ()=>{
    useEffect(()=>{
        AOS.init({duration:2000});
    })
    return(
        <AllOneSection id="allone">
            <Text>#WE_ALL_ARE_ONE</Text>
            <ImageContainer>
            <img src={AllOneSecImage} alt="alloneimg" data-aos="zoom-in"/>
            </ImageContainer>
        </AllOneSection>
    );
}

export default AllAreOne;