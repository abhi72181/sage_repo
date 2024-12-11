
function Navbar(){
    return <>
    <div className="container">
        <h1 className="head1">The Right Plan For <span> Your Business </span></h1>
        <p className="para1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, dolorem. Illum in excepturi veritatis quam quidem numquam illo quo obcaecati.
        </p>
    </div>
    </>
}

function Card({pack,list,recharge}){
    console.log(pack,list,recharge)
    return <>
    <div id="parent">
      <h1 className="starter" >{pack}</h1>
      <ul>
        {list.map((el,i)=>(
             <li>{el}</li>
        ))}
      </ul>
      <h1 >{recharge}</h1>
      <button>Get Started</button>
    </div>
    </>
}

function App(){
    return <>
    <Navbar/>
    <Card pack="starter" list={["1 Lorem Ipsum","Lorem ipsum doloerw","Monthly updates"]} recharge="Free" />
    <Card pack="lorem plus" list={["1 Lorem Ipsum","Lorem ipsum doloerw","Monthly updates"]} recharge="Free" />
    <Card pack="lorem pro" list={["1 Lorem Ipsum","Lorem ipsum doloerw","Monthly updates"]} recharge="Free" />
    <Card pack="lorem pro" list={["1 Lorem Ipsum","Lorem ipsum doloerw","Monthly updates"]} recharge="Free" />
    </>
}

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)