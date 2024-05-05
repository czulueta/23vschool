import "./meme.css"

export default function Meme(){
  return (
    <div className="form-container"> 
      <form className="form">
        <input type="text" placeholder="Shut Up" name="shutUp" />
        <input type="text" placeholder="and take my money" name="money" />
        <button>Get a New Meme Image</button>
      </form>
    </div>
  )
}