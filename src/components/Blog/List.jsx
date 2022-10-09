import React from "react";
import { Link } from "gatsby"
import { 
    BlogList,
    BlogHeader,
    BlogTitle,
    BlogDes,
      } from "./writing.style";
  
  const List = ({frontmatter,slug}) => {
    const { title,description} = frontmatter
    console.log(title,description)
      return (
        <>
        <BlogList>
        <Link Link to={slug}>
        <BlogHeader>
          <BlogTitle>{title}</BlogTitle>
        <BlogDes>{description}</BlogDes>
          </BlogHeader>
          </Link>
        </BlogList>
        </>
      );
    }
     
    export default List;

