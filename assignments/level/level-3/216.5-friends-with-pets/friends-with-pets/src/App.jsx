import Friendslist from "./components/FriendsList"
import data from "./components/data"

function App() {
  
console.log(data)
  return (    
      <div>
        <Friendslist data={data}/>
      </div>
  )
}

export default App
