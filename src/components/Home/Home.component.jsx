import {motion} from "framer-motion";

import { NameContainer,TitleContainer,LineContainer} from "./home.style";

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
    <TitleContainer>Daniel Nwaneri is a Software Developer open to Backend developer role.</TitleContainer>
    <LineContainer/>
    <TitleContainer>Daniel specializes in JavaScript back-end development. He is comfortable working with many languages and platforms and has recently dedicated himself to developing back-end applications using Node.js, Express.js, MongoDB and Typescript.He also has some experience with blockchain technology and a bachelor's degree in Geophysics.</TitleContainer>
    </motion.div>
)};
export default Home;
