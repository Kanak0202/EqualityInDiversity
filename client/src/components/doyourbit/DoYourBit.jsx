import { Box, Typography, styled } from "@mui/material";

//image
import handImg from "../../images/doYourBit/rise.jpg"

//data
import doYourBitData from "../../constants/doBit";

const Container = styled(Box)`
    margin:100px 100px;
`;


const Heading = styled(Typography)`
    font-size:80px;
    font-family: 'Anton', sans-serif;
    color:white;
`;
const Text = styled(Typography)`
    font-size:25px;
    color:white;
    margin:20px 100px;
`;

const DoContainer = styled(Box)`
    margin-top:50px;
    display:flex;
    justify-content:center;
    align-items:center;
`;

const HandImage = styled("img")({
    // width: "35%",
    marginLeft: "auto", // Align TreeImage to the right
    marginRight: "100px",
    aspectRatio: 1 / 1,
    objectFit: "cover",
    // height:"500px",
    width:"500px",
  });

  const Organisation = styled(Typography)`
  font-size:30px;
  color:white;
`;

const BitBox = styled(Box)`
    margin:50px;
    background:white;
    & > p{
        color:black;
        margin:20px;
        padding: 10px 0;
        font-weight:600;
    }
`;

const DoYourBit = ()=>{
    return(
        <Container id="dobit">
            <Heading>#DO_YOUR_BIT</Heading>
            <DoContainer>
                <HandImage src={handImg} alt="handimage" />
                <Box>
                    {doYourBitData.map((item, index)=>{
                        return(
                            <BitBox>
                                <Organisation>{item.title}</Organisation>
                                {/* <Text>{item.description}</Text> */}
                                {/* <a href={item.link}>Read More</a> */}
                            </BitBox>
                        );
                    })}
                </Box>
            </DoContainer>
        </Container>
    );
}

export default DoYourBit;