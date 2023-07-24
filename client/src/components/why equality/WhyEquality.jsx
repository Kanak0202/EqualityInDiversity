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
            <Text data-aos="zoom-in">Equality is not just a noble aspiration; it is a fundamental human right and the cornerstone of a just and inclusive society. It stands as an ethical principle that upholds the inherent worth and dignity of every individual, regardless of their background, beliefs, or identity. The pursuit of equality is not merely an abstract idea; it is a powerful catalyst for positive change, societal progress, and the betterment of humanity as a whole.
            </Text>
            <Text data-aos="zoom-in"></Text>
<Text data-aos="zoom-in">One of the most compelling reasons why equality matters is its role in dismantling the barriers that perpetuate discrimination, oppression, and social disparities. Inequalities based on race, gender, ethnicity, socio-economic status, or any other characteristic have long plagued societies worldwide. These inequalities deny individuals the opportunity to reach their full potential and lead fulfilling lives. Embracing equality, on the other hand, allows us to recognize and address these disparities, giving rise to a fairer and more balanced society.
</Text>
<Text data-aos="zoom-in">Moreover, equality fosters a sense of solidarity and community. When people feel valued and included, they are more likely to contribute positively to their communities, workplaces, and the world at large. Equality nurtures a sense of belonging and empowers individuals to participate actively in civic life, making collective progress possible.
</Text>
<Text data-aos="zoom-in">An equitable society also benefits from a diverse range of perspectives and ideas. Embracing diversity allows for a rich exchange of knowledge and experiences, leading to innovative solutions and enhanced creativity. In contrast, societies that stifle diversity may miss out on valuable contributions and deprive themselves of the potential for growth and progress.
</Text>
<Text data-aos="zoom-in">Equality is essential for building sustainable peace and harmony. Societies plagued by inequality often experience social unrest and conflicts. By promoting equality, we can create an environment of mutual respect and understanding, fostering peaceful coexistence and collaboration among diverse communities.
</Text>
<Text data-aos="zoom-in">Additionally, equality is not just a matter of justice; it is a matter of human rights. Every individual, regardless of their background, deserves to be treated with dignity, fairness, and respect. Upholding equality means safeguarding the rights and freedoms of all people, ensuring they have equal access to opportunities, resources, and justice.
</Text>
<Text data-aos="zoom-in">Despite its undeniable importance, achieving true equality remains an ongoing challenge. It requires a collective effort from governments, institutions, communities, and individuals. It demands a commitment to address systemic barriers, prejudices, and biases that perpetuate inequality. Furthermore, it necessitates policies and practices that promote inclusivity and celebrate diversity.
</Text>
<Text data-aos="zoom-in">In conclusion, equality is not an abstract ideal, but a fundamental principle that underpins a just and inclusive society. By embracing equality, we create a world where every individual is valued, respected, and empowered to fulfill their potential. It is not only a moral imperative but also a key driver of progress and harmony. As we work together to dismantle barriers and promote equality, we move closer to a world where every person can thrive and contribute to a brighter future for all.
 </Text>
           
            
        </Container>

    );
}

export default WhyEquality;