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
    <NameContainer>Our site is getting a little tune up and some love</NameContainer>
    <TitleContainer>We apologize for the inconvenience, but we're still building this route. You can still contact us at <a href="mailto:penuelnwaneri@gmail.com">penuelnwaneri@gmail.com</a>.We'll be back up soon!</TitleContainer>
    </motion.div>
)

export default Project;
