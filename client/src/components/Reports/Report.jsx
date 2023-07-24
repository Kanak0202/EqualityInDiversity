import { Box, styled, Typography, Button } from "@mui/material";
import { useEffect } from "react";

//report data
import reportdata from "../../constants/reportData";
import { Link } from "react-router-dom";

//aos
import AOS from 'aos';
import 'aos/dist/aos.css';

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
`;

const ReportContainer = styled(Box)`
    display:flex;
    margin-top:20px;
`;

const ButtonLearn = styled(Button)`
  color:black;
  background:#C4C5CB;
  margin:0 20px;
  & > button{
    margin-right:0;
  }
`; 

const TitleContainer = styled(Box)`
    display:flex;
    width:50%;
    flex:1;
`;

const ButtonBox= styled(Box)`
    display:flex;
    align-items: center;
    justify-content:center;
`;

const ReportsBox = styled(Box)`
    margin-top:50px;
`;

const Report = ()=>{
    useEffect(() => {
        AOS.init({duration:1500});
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
        <Container>
            <Heading>Reports</Heading>
            <Text>Here are some of the latest reports to keep you updated with the latest trends of social equality.</Text>
            <ReportsBox>
                {reportdata.map((item, index)=>{
                    return(
                        <ReportContainer key={index} data-aos="fade-in">
                            <TitleContainer>
                                <Text>{index + 1}</Text>
                                <Text>{item.title}</Text>
                            </TitleContainer>
                            <ButtonBox>
                                <a href={item.link} ><button className="readBtn">Read</button></a>
                            </ButtonBox>
                        </ReportContainer>
                    );
                })}
            </ReportsBox>
        </Container>
    );
}

export default Report;