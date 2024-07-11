import { useState } from "react"


export default function BountyHunterForm(props){
  const {submit, editToggle, setEditToggle} = props
  const initInputs = { 
    firstName: props.firstName || "", 
    lastName: props.lastName || "", 
    living: props.living || true, 
    bounty: props.bounty || 0, 
    type: props.type || ""
  }
  const [inputs, setInputs] = useState(initInputs)

  function handleChange(e){
    const { name, value, type, checked } = e.target
    setInputs( prevInputs => ({...prevInputs, [name]: type === "checkbox" ? !checked : value}))
    console.log(checked)
  }

  function handleSubmit(e){
    e.preventDefault()
    if ( editToggle ) {
      submit(inputs, props._id)
      setInputs(initInputs)
      setEditToggle( prevState => !prevState )
    } else {
      submit( inputs )
      setInputs( initInputs )
    }
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="firstName" 
          value={inputs.firstName}
          onChange={handleChange} 
          placeholder="First Name"   
        />
        <input 
          type="text" 
          name="lastName" 
          value={inputs.lastName}
          onChange={handleChange} 
          placeholder="Last Name" 
        />
        <label htmlFor="living">Is this Bounty Dead?</label>
        <input 
          type="boolean" 
          id="living" 
          name="living"
          value={inputs.living}
          onChange={handleChange}           
        />
        <input 
          type="text" 
          name="type" 
          value={inputs.type}
          onChange={handleChange} 
          placeholder="Jedi or Sith" 
        />
        <label htmlFor="bounty">Bounty Amount</label>
        <input 
          type="number" 
          name="bounty" 
          value={inputs.bounty}
          onChange={handleChange} 
          placeholder="Bounty Rate" 
        />
        
        <button>{props.btnText}</button>
      </form>
    </div>
  )
}