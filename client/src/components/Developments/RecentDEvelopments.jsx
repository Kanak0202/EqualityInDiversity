import { Box, Typography, styled } from "@mui/material";

//data
import developmentData from "../../constants/developmentData";

//aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Text = styled(Typography)`
    font-size:25px;
    color:white;
`;

const ItemContainer = styled(Box)`
    ${'' /* border: 2px solid white; */}
    display:flex;
    flex-direction:row;
    margin:15px 100px;
    align-items:center;
    justify-content: center;
    padding:100px;
`;

const TextBox = styled(Typography)`
    width:50%;
    margin:0 50px;
`;

const Heading = styled(Typography)`
margin-top:200px;
    font-size:80px;
    font-family: 'Anton', sans-serif;
    color:white;
`;

const Organisation = styled(Typography)`
  font-size:40px;
  color:white;
`;

const RecentDevelopments = () => {
  useEffect(()=>{
    AOS.init({duration:1500});
  })
  return (
    <Box id="recent">
      <Heading>Recent Developments</Heading>
      <Box>
        {developmentData.map((item, index) => {
          return (
            <ItemContainer key={index}>
              {index % 2 === 0 ? (
                <>
                  <img src={item.imgUrl} alt={item.organisation} data-aos="fade-right" />
                  <TextBox data-aos="fade-left" >
                  <Organisation>{item.organisation}</Organisation>
                    <Text>{item.text}</Text>
                  </TextBox>
                </>
              ) : (
                <>
                  <TextBox data-aos="fade-right">
                  <Organisation>{item.organisation}</Organisation>
                    <Text>{item.text}</Text>
                  </TextBox>
                  <img src={item.imgUrl} alt={item.organisation} data-aos="fade-left" />
                </>
              )}
            </ItemContainer>
          );
        })}
      </Box>
    </Box>
  );
};

export default RecentDevelopments;
