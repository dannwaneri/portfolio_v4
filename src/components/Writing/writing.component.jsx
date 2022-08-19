import {motion} from "framer-motion";
import { NameContainer,TitleContainer} from '../Home/home.style';


const containerVariants = {
    hidden:{
        opacity: 0,
    },
    visible:{
        opacity: 1,
        transition:{
            delay:1.4, duration:1.5
        }
    },
    exit:{
        x:'-100vw',
        transition:{
            ease:'easeInOut'
        }
    }
}


const Writing = () => (
    <motion.div 
    variant={containerVariants} 
    initial="hidden"
    animate="visible"
    exit="exit"
    >
    <NameContainer>Writing</NameContainer>
    <TitleContainer>Welcome to my new blog! This is its fourth or fifth redesign. Know how many blog posts I have released up until now? One.This is going to change. I want to write more, about new things I have learned, weird bugs I have solved, new tools I try and everything inbetween. We will see how it goes, until then.</TitleContainer>
    </motion.div>
)

export default Writing;
