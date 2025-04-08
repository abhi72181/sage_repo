
// import './App.css'

import { Routes,Route,Link } from "react-router-dom"
import Navbar from "./components/Navbar"
import AllRoutes from "./components/AllRoutes"
import Footer from "./components/Footer"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar/>
        <AllRoutes/>
        <Footer/>
      </div>
      
    </>
  )
}

export default App
