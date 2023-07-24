import { Box, styled, Typography, Button } from "@mui/material";
import Tree from "../../images/landingSection/diffrace.png";
import DiverseBackground from "../../images/landingSection/muti.png";
import AllAreOne from "./AllAreOneSection";
import Stats from "../stats/Stats";
import RecentDevelopments from "../Developments/RecentDEvelopments";
import DoYourBit from "../doyourbit/DoYourBit";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useEffect } from "react";

const S1Container = styled(Box)`
  display: flex;
  background: black;
  width: 100%;
  height: 750px;
`;

const TreeImage = styled("img")({
  width: "35%",
  marginLeft: "auto", // Align TreeImage to the right
  marginRight: 0,
  aspectRatio: 1 / 1,
  objectFit: "cover",
});

const ColorImage = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${DiverseBackground})`, // Set the background image using the url() function
  width: "100%",
  flex: 1, // Make ColorImage occupy the remaining space
  aspectRatio: "revert",
  objectFit: "cover",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  "& > *": {
    // Apply styles to all children (in this case, Typography components)
    color: theme.palette.common.white,
    // Add any other styles you want to apply to the Typography components
  },
}));

const Heading = styled(Typography)`
    font-size:100px;
    font-family: 'Anton', sans-serif;
`;

const SubHeading = styled(Typography)`
    font-size:38.5px;
    letter-spacing:2px;
    word-spacing:0px;
`;

const ButtonLearn = styled(Button)`
  color:black;
  background:#C4C5CB;
  margin:0 20px;
`; 

const ButtonStats = styled(Button)`
  color:#C4C5CB;
  outline: 1px solid white;
`;

const ButtonBox = styled(Box)`
  display:flex;
  flex-direction:row;
  justify-content: flex-start; /* Align the content to the left */
  margin-top:100px;
  margin-left:100px;
`;

const Home = () => {
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
    <Box>
      <S1Container>
      <ColorImage className="backGroundImg" data-aos="fade-right">
        <Heading>EqualityInDiversity</Heading>
        <SubHeading>Embracing Diversity, Empowering Unity.</SubHeading>
        <ButtonBox>
        <Link to="/whyequality"><ButtonLearn variant="contained">Learn More</ButtonLearn></Link>
        <HashLink smooth to='/#stats' ><ButtonStats variant="outlined">View Stats</ButtonStats></HashLink>
        
        </ButtonBox>

      </ColorImage>
      <TreeImage src={Tree} alt="diverse tree" data-aos="fade-left"/>
    </S1Container>
    <AllAreOne />
    <Stats />
    <RecentDevelopments />
    <DoYourBit />
    </Box>
  );
};

export default Home;
