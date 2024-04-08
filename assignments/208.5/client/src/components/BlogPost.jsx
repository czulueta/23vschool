

// eslint-disable-next-line react/prop-types
export default function BlogPost({title, subTitle, author, date}){
  
  return(
    <div>
      <h1 >{title}</h1>
      <h2>{subTitle}</h2>
      <h4>Posted by {author} on {date}</h4>
    </div>
  )
}