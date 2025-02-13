import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormUsingState from './components/FormUsingState'
import FormUsingRef from './components/FormUsingRef'
import EmailPasswordForm from './components/EmailPasswordForm'
import Test from './components/Test'
import Test2 from './components/Test2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <FormUsingState/> */}
        {/* <FormUsingRef/> */}
        {/* <EmailPasswordForm/> */}
        {/* <Test/> */}
        <Test2/>
        </div>
    </>
  )
}

export default App
