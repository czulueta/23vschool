import { useState, useEffect } from "react"
import Bounty from "./components/Bounty.jsx"
import BountyHunterForm from "./components/BountyHunterForm.jsx"
import './App.css'
import axios from "axios"


function App() {
  const [bounties, setBounties]= useState([])

  function getBounties(){
    axios.get("/bounties")
     .then(res => setBounties(res.data))
     .catch( err => console.log(err))
  }

  function addBounty(newBounty){
    axios.post("/bounties", newBounty)
     .then(res => {
      setBounties(prev => [...prev, res.data])
     })
     .catch(err => console.log(err))
  }

  function deleteBounty(bountyId){
    axios.delete(`/bounties/${bountyId}`)
     .then(res => setBounties(prev => prev.filter(bounty => bounty._id !== bountyId)))
     .catch(err => console.log(err))
  }

  function editBounty(updates, bountyId){
    axios.put(`/bounties/${bountyId}`, updates)
     .then(res => {
      setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyId ? bounty : res.data) )})
     .catch(err => console.log(err))
  }

  useEffect(() => {
    getBounties()
  },[])
      
  
  

  return (
    <>
      <div className="bounty-container">
        <BountyHunterForm 
          submit={addBounty}
          btnText="Add Bounty"
        />
        {
          bounties.map(bounty => 
            <Bounty 
              {...bounty} 
              key={bounty._id}
              deleteBounty={deleteBounty} 
              editBounty={editBounty} 
              />)}
      </div>
    </>
  )
}

export default App
