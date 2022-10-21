import React from "react";
import {motion} from "framer-motion";

import { 
    NameContainer,
    TitleContainer,
    Title
} from "./home.style";

const containerVariants = {
    hidden:{
        opacity: 0,
    },
    visible:{
        opacity: 1,
        transition:{
            delay:1.5, duration:1.5
        }
    },
    exit:{
        x:'-100vw',
        transition:{
            ease:'easeInOut'
        }
    }
}

const Home = () => { 
    
    return(
    <motion.div 
    variant={containerVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
    >
    <NameContainer>Daniel Nwaneri</NameContainer>
    <Title>Backend Developer</Title>
    <TitleContainer>I am a Backend Developer with ~4 years of primarily backend web development experience. I am an expert in JavaScript and Nodejs, and knowledgeable in much more. I care a lot. In general. I care about the products I work on, the impact of my work, the growth of my teammates, the community and more.</TitleContainer>
    </motion.div>
)};
export default Home;
