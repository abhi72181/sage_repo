import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GetData from './components/GetData'
import AddData from './components/AddData'
import PutData from './components/putData'
import PatchData from './components/PatchData'
import DeleteData from './components/DeleteData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <GetData/> */}
        {/* <AddData/> */}
        {/* <PutData/> */}
        {/* <PatchData/> */}
        <DeleteData/>
        </div>
    </>
  )
}

export default App
