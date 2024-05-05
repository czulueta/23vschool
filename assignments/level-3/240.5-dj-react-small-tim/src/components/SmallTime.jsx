

export default function SmallTime({handleClick}){
  // const {handleClick} = props
  console.log(handleClick + " handleClick props")
  // console.log(props.blkWht)
  return(
    <div className="smallTime">
      <button onClick={handleClick}>Black or White</button>
    </div>
  )
}