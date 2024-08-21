

export default function Issue(props){

  const {title, description, imgUrl } = props
  return(
    <div>
      
      <h2>{title}</h2>
      <h3>{description} </h3>
      <img src={imgUrl} />
    </div>
  )
}