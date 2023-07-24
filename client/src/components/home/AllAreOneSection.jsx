import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

//image
import AllOneSecImage from "../../images/AllOneSection/Frame 3iii.png";
 
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
    return(
        <AllOneSection id="allone">
            <Text>#WE_ALL_ARE_ONE</Text>
            <ImageContainer>
            <img src={AllOneSecImage} alt="alloneimg" />
            </ImageContainer>
        </AllOneSection>
    );
}

export default AllAreOne;