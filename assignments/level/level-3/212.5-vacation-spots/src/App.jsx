import spots from "./components/spots.jsx"
import Card from "./components/Card.jsx"
import "./App.css"

function App() {
  const vacationSpots = spots.map(spot => {
    return (
    
        <Card 
          key={spot.id}
          {...spot}
        />
      
    )
  })

  return (
    <>
      <div className="app-container">
        <h1>Where Do You Wanna Go?</h1>
        {vacationSpots}
      </div>
      
    </>
  )
}

export default App
