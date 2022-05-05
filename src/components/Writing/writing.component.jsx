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
    <TitleContainer>A collection of new things he has learned,weird bugs he has solved, new tools he trys and everything in between.</TitleContainer>
    </motion.div>
)

export default Writing;
