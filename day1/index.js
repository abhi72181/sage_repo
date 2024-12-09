// let heading= document.createElement("h1")
// heading.innerText="Hello world"
 let day=false
let heading1="heading1"
let heading2="heading2"
const greet=()=>{
    alert("hello")
}
let props={id:"head1",className:"xyz"}

 let element= <><div>hello</div>
   <div  id="parent">
    <h1 {...props} >{heading1}</h1>
    <h1 id="head2">{heading2}</h1>
    <button onClick={greet}>Click me</button>
    {day ? <p>day</p>:<p>night</p>}
</div> </>

// function greet(){
//     alert("hello")
// }

let root=ReactDOM.createRoot(document.getElementById("root"))
root.render(element)