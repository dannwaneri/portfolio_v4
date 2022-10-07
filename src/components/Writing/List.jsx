import { 
    BlogList,
    BlogHeader,
    BlogTitle,
    BlogDes,
      } from "./writing.style";
  
  const List = ({ Blogs }) => {
      return (
        <>
        {Blogs.map(Blog => (
        <BlogList key={Blog._id}>
        <BlogHeader>
          <BlogTitle>{Blog.title}</BlogTitle>
        <BlogDes>{Blog.description}</BlogDes>
          </BlogHeader>
        </BlogList>
        ))}
        </>
      );
    }
     
    export default List;