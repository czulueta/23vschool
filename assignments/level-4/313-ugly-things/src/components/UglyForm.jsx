import {UglyContext} from "../uglyContext.jsx"
import {useContext} from "react"


export default function UglyForm(){

  const {inputs, handleChange, handleSubmit} = useContext(UglyContext)

  return(
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Ugly Form</h1>
        <input
          name="title"
          value={inputs.title}
          onChange={handleChange}
          placeholder="Ugly Title"
         />
        <input
          name="imgUrl"
          value={inputs.imgUrl}
          onChange={handleChange}
          placeholder="Ugly Image"
         />
        <input
          name="description"
          value={inputs.description}
          onChange={handleChange}
          placeholder="Ugly Description"
          className="description"
         />
        <button 
          className="formBtn"
          type="submit"
          value="submit"
        >Submit</button>
        
      </form>
    </div>
  )
}