//Material-UI
import { Typography, Box, styled } from "@mui/material";

//data
import data from "../../constants/statData";

//aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const CardContainer = styled(Box)`
    ${'' /* border:2px solid white; */}
    display:flex;
    ${'' /* flex:1; */}
    flex-direction:row;
    flex-wrap: wrap;
    margin:10px 100px 100px 100px;
    alignItems:center;
    justify-content:center;
`;

const SingleCard = styled(Box)`
display:flex;
    flex-direction:column;
    border:2px solid white;
    line-height:1;
    margin:50px;
    ${'' /* flex:1; */}
    background:white;
    color:black;
    width:300px;
    height:300px;
    padding:15px;
    align-items:center;
    justify-content:center;
`;

const Heading = styled(Typography)`
margin-top:200px;
    font-size:80px;
    font-family: 'Anton', sans-serif;
    color:white;
`;
const Text = styled(Typography)`
    font-size:20px;
    font-weight:600;
    ${'' /* color:white; */}
`;

const Figure = styled(Typography)`
    font-size:50px;
    font-weight:600;
    
`;


const Stats = ()=>{
    useEffect(()=>{
        AOS.init({duration:2000});
    },[])
    return (
        <Box id="stats">
            <Heading>Stats on equality</Heading>
            <CardContainer>
            {data.map(item =>{
                return(
                    <SingleCard data-aos="fade-up" data-aos-duration="2500">
                    <Text>{item.upperText}</Text>
                    <Figure>{item.figure}</Figure>
                    <Text>{item.lowerText}</Text>
                    </SingleCard>
                );
            })}
            </CardContainer>
            {/* <Heading>#NEED_TO_CHANGE</Heading> */}
        </Box>
    );
}

export default Stats;