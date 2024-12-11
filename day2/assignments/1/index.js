let arr=[]

function ItemList({arr}){
    // console.log(props.arr)
    return <>
     
    <ul>
        {arr.length>0 ? arr.map((elem,index)=>{
            return <li>{elem}</li>
        }):<p>No items found in the paragraph</p>}
    </ul>
    </>
}

const App=()=>{
    return <>
    <ItemList arr={arr} />
    </>
}

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)

