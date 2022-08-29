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
    <TitleContainer>Know how many blog posts Daniel has released up until now? none.This is going to change. He want to write more, about new things he has learned, weird bugs he has solved, new tools he trys and everything inbetween. We will see how it goes, until then.</TitleContainer>
    </motion.div>
)

export default Writing;
