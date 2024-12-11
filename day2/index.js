

function Navbar(props){
    // console.log(props)
    return <>
    {/* <h1 id="navbar">I am Navbar</h1> */}
    <List/>
    <Cart/>
    </>
}

function Ads(){
    return <>
    <h1 id="ads">I am Ads</h1>
    </>
}

function Sidebar(){
    return <>
    <h1>I am Sidebar</h1>
    </>
}

function Products(){
    return <>
    <h1>I am Products</h1>
    </>
}

function Footer(){
    return <>
    <h1>I am Footer</h1>
    </>
}

function List(){
    return <>
    <p>i am list</p>
    </>
}

function Cart(){
    return <>
    <p>i am cart</p>
    </>
}

let App= ()=>{

 return <>
{/* <Navbar name="tanishka" age="19" /> */}
  {/* {Navbar({name:"jatin",age:"20"})}
  {birthdayWish({name:"piyush",age:"22"})} */}
  <Navbar age={19} address={{city:"bhopal", college:"sage"}} random={["fruits","vegetables"]} />
  <Ads  />
  <div id="mid-section">
    <Sidebar />
    <Products />
  </div>
  <Footer  />
  
</>
}








const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)
