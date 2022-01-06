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
    <NameContainer>Penuel Nwaneri</NameContainer>
    <TitleContainer>Software Developer  open to both Front-end and Back-end developer roles</TitleContainer>
    <LineContainer/>
    <TitleContainer>Penuel Cares deeply about users, performance, accessibility, and having things be functional;Check out his social links in the footer</TitleContainer>
    </motion.div>
)};
export default Home;