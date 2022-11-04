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
    <TitleContainer>I'm a Backend web developer with around four years of experience. I'm knowledgeable in JavaScript and Nodejs, and have plenty of other skills under my belt. If you're looking for someone to help you with your web development needs, then I'm your man! Feel free to get in touch and I'll be happy to help out. 🙂</TitleContainer>
    </motion.div>
)};
export default Home;
