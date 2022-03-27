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
    <TitleContainer>Daniel Nwaneri is a Software Engineer open to Backend developer role</TitleContainer>
    <LineContainer/>
    <TitleContainer>He loves backend engineering, especially building apis and dev tools. He writes mostly JavaScript and Nodejs and believes every complicated problem can be solved with ease by breaking it down to fundamental subsets.</TitleContainer>
    </motion.div>
)};
export default Home;
