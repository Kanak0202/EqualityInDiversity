import { Box, Typography, styled } from "@mui/material";
import { useEffect } from "react";

const Container = styled(Box)`
    margin:100px 100px;
`;


const Heading = styled(Typography)`
    font-size:100px;
    font-family: 'Anton', sans-serif;
    color:white;
`;
const Text = styled(Typography)`
    font-size:25px;
    color:white;
    margin:20px 100px;
    text-align:justify;
`;

const Mission = ()=>{
    useEffect(() => {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        const href = window.location.href.substring(
          window.location.href.lastIndexOf('#') + 1,
        );
        if (window.location.href.lastIndexOf('#') > 0) {
          document.getElementById(href)?.scrollIntoView();
        }
       });
    return(
        <Container data-aos="fade-in">
            <Heading>Mission</Heading>
            <Text data-aos="zoom-in">
            At EqualityInDiversity, our mission is to create a world where social equality and justice are fundamental pillars of society. We are committed to fostering an inclusive and diverse community, where every individual is treated with respect, dignity, and fairness, regardless of their race, ethnicity, gender, religion, age, sexual orientation, or socioeconomic background.
            </Text>
            <Text data-aos="zoom-in">
            Through our platform, we strive to raise awareness about social issues and promote understanding and empathy among people from all walks of life. We believe in the power of education and dialogue to break down barriers, challenge stereotypes, and inspire positive change.
            </Text>
            <Text data-aos="zoom-in">
            Our goal is to provide a safe and supportive space for meaningful conversations, constructive discussions, and the sharing of diverse perspectives. We aim to empower individuals to become advocates for social equality and to take action towards creating a more just and equitable world.
            </Text>
            <Text data-aos="zoom-in">
            Together, let's stand united in the pursuit of a society where every person's rights, opportunities, and contributions are valued and celebrated. Join us in the journey towards embracing diversity, empowering unity, and building a brighter future for all
            </Text>
        </Container>
    );
}


export default Mission;