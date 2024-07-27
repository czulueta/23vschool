import {BrowserRouter as Router} from "react-router-dom"
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {ShopContextProvider} from "./context.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <ShopContextProvider>
      <Router>
        <App />
      </Router>
    </ShopContextProvider>
  
)
