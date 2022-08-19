import {motion} from "framer-motion";
import { NameContainer,TitleContainer} from '../Home/home.style';

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

const Project = () => (
    <motion.div 
    variant={containerVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
    >
    <NameContainer>Projects</NameContainer>
    <TitleContainer>Know how many projects I have released up until now? zero.This is going to change. i want to release Open Source Projects and personal projects i've been working on. We will see how it goes, until then.</TitleContainer>
</motion.div>
)

export default Project;
