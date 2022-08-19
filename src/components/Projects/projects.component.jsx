import {motion} from "framer-motion";
import { NameContainer} from '../Home/home.style';

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
    <NameContainer>Internet thingies built with React,Next.js, Node.js, GraphQL, and TypeScript.</NameContainer>
    </motion.div>
)

export default Project;
