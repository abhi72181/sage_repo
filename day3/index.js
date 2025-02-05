
// function Counter(){
//     const [count,setCount]=React.useState(0)  
//     const [balance,setBalance]=React.useState(0)

  
    

//     function handleClick(){
//         setCount(count+1)
//     }

//     return <>
//     <button onClick={handleClick} >click </button>
//     <h1>{count}</h1>

//     <button onClick={()=>{setBalance(balance-1000)}} >withdraw 1000rs.</button>
//     <button onClick={function (){setBalance(balance+1000)}} >deposit 1000rs.</button>
//     <h1>{balance}</h1>
//     </>
// }

// function Input(){
//     const [inputValue,setInputValue]=React.useState("")

//     function handleInput(event){
//       setInputValue(event.target.value)
//     }

//     function clearInput(){
//         setInputValue("")
//     }

//     return <>
//     <input value={inputValue} onChange={handleInput} ></input>
//     <h1>{inputValue}</h1>
//     <button onClick={clearInput}>Clear inputValue</button>
//     </>
// }

function Button({count,setCount}){
    // console.log(count,setCount)
    

    function handleCount(){
       
        setCount(count+1)
    }
    return <>
    <button onClick={handleCount} > click : {count}</button>
    </>
}

const App=()=>{
    const [count,setCount]=React.useState(0)
    return <>
       <Button count={count} setCount={setCount} />
       <Button count={count} setCount={setCount} />
       <Button count={count} setCount={setCount}/>
    </>
}

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)