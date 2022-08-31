import {motion} from "framer-motion";
import {
    WritingHeading,
    WritingTitle,
} from './writing.style'


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
    <WritingHeading>Writing</WritingHeading>
    <WritingTitle>A collection of my somewhat (un)organized musings.</WritingTitle> 
    </motion.div>
)

export default Writing;
