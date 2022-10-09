import React from "react";
import {motion} from "framer-motion";
import {
    WritingHeading,
    WritingTitle,
    Load,
    WritingPosition,
    WritingContainer,
} from './writing.style'

import List from './List'

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


const Writing = ({posts}) => {
  return (
    <motion.div 
    variant={containerVariants} 
    initial="hidden"
    animate="visible"
    exit="exit"
    >
      <WritingPosition>
      <WritingContainer></WritingContainer>
    <WritingHeading>Writing</WritingHeading>
    <WritingTitle>A collection of my somewhat (un)organized musings.</WritingTitle>
    {posts.map(post => {
    <List key={post.id} {...post}/>
    })}
  </WritingPosition>
    </motion.div>
)

}
export default Writing;

