import { Box,styled,Typography } from "@mui/material";
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

const WhyEquality = ()=>{
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
    return (
        <Container data-aos="fade-in">
            <Heading>Why want Equality?</Heading>
            <Text data-aos="zoom-in">
            Equality is the bedrock of a just and inclusive society. It upholds the intrinsic value of each individual, regardless of their background or identity. By fostering equality, we break down barriers, address disparities, and empower people to reach their full potential.</Text>
            <Text data-aos="zoom-in">
            Promoting equality is essential for dismantling discrimination and social injustices. Embracing diversity allows us to tap into a wealth of perspectives and ideas, leading to innovation and growth. Moreover, it cultivates a sense of belonging and fosters peaceful coexistence.</Text>
            <Text data-aos="zoom-in">
            Equality is not just a moral imperative; it is a fundamental human right. By valuing and respecting every person, we create a world where everyone has equal access to opportunities and resources.</Text>
            <Text data-aos="zoom-in">
            Together, let's champion equality and build a brighter future for all.</Text>
        </Container>

    );
}

export default WhyEquality;