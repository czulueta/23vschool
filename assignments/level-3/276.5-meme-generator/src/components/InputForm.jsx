import "./input.css"

export default function InputForm(props){
  return(
    <div className="form-container">
      <form onSubmit={props.handleSubmit}>
        <input
          type="text"
          name="topText"
          value={props.input.topText}
          onChange={props.handleChange} 
          placeholder="Top Text"
          className="input-top"

        />
        <input
          type="text"
          name="bottomText"
          value={props.input.bottomText}
          onChange={props.handleChange} 
          placeholder="Bottom Text"
          className="input-bottom"

        />
        <button>Save Meme</button>
      </form>
    </div>
    
  )
}