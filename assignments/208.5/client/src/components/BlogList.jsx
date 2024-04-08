import BlogPost from "./BlogPost"
import datas from "./data"

export default function BlogList(){
  const newInfo = datas.map(data => {
    return(
      <BlogPost 
        key={data.id}
        {...data}
        
      />
    )
  })
  

  return (
    <div>
      {newInfo}
    </div>
  )
}