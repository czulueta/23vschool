

export function handleChange(e){
  const { name, value } = e.target
  setInputs(prev => ({
    ...prev,
    [name]: value
  }))
}

export function handleSubmit(e){
  e.preventDefault();
  
}