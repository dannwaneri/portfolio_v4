import React, { useState, useEffect } from "react";
import {motion} from "framer-motion";
import {
    WritingHeading,
    WritingTitle,
    Load,
    WritingPosition,
    WritingContainer
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


const Writing = () => {
    const [Blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
  
    useEffect(() => {
      setTimeout(() => {
        fetch('/v1/blogs')
        .then(res => {
          return res.json();
        })
        .then(data => {
          setIsPending(false);
          setBlogs(data);
        })
      }, 1000);
    }, [])

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
    { isPending && <Load>...</Load> }
  {Blogs && <List Blogs={Blogs}/>}
  </WritingPosition>
    </motion.div>
)

}
export default Writing;
