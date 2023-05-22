// Functional Components--
// function User(){
//     return(
//         <div>
//         <h1>Hello, I'm Function Component </h1>
//         <h2>Another Function Component</h2>
//         </div>
//     )
// }

// export function User1(){
//     return(
//         <div>Hello User1</div>
//     )
// }
// export default User;

// Class Components-- 
// import React from "react";
// export default class ClassUser extends React.Component{
//     render(){
//         return(
//             <h1>Hello, I'm Class Component</h1>
//         )
//     }
// }

// React Events--
// function ClickEvent(){
//     return(
//         alert("Hello, I'm Click Event")
//     )
// }
// export default ClickEvent;

// React State with Functional Component-- 
// import { useState } from "react";
// function FavColor(){
//     const [color, setColor]= useState("White");
//     function UpdateData(){
//         setColor("Black")
//     }
//     return(
//         <div>
//         <h1>My Favourite color is {color}!!</h1>
//         <button type="button" onClick={() => setColor ("Black")}>Update Data</button>
//         <button onClick={UpdateData}>Update Data</button>
//         </div>
//     )
// }
// export default FavColor;

// React State with Class Component--
// import React from "react";
// class ClassState extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             data:"Divya"
//         };
//     }
//     changeData = () => {
//         this.setState({data:"Waghmode"});
//     }
//     render(){
//         return(
//             <div>
//             <h1>{this.state.data}</h1>
//             {/* <button onClick={() => this.setState({data:"Waghmode"})}>Update Data</button> */}
//             <button onClick={this.changeData}>Update Data</button>
//             </div>
//         )
//     }
// }
// export default ClassState; 

// React Props with functional component--
// function Student(props){
//     return(
//         <div style={{backgroundColor:"skyblue", width:"500px"}}>
//             <h1>Helloo {props.name}</h1>
//             {/* <h4>live in {props.live}</h4>
//             <h5>Address is {props.other.address}</h5> */}
//         </div>
//     )
// }
// export default Student;

// React props with class component-- 
// import React from "react";
// export default class PropsClass extends React.Component{
//     render(){
//         return(
//             <div style={{backgroundColor:"skyblue", margin:50, padding:50}}>
//                 <h1>Hello {this.props.name}.</h1>
//                 <h4>Email: {this.props.email}</h4>
//             </div>
//         )
//     }
// }

// Get Input box value--
// import React, { useState } from "react";
// function InputBox(){
//     const [data,setData]=useState(null)
//     const [print,setPrint]=useState(false)
//     function getdata(val){
//         console.log(val.target.value)
//         setData(val.target.value)
//         setPrint(false)
//     }
//     return(
//         <div>
//             <h1>Getting Input Box Value-</h1>
//             {
//                 print ? <h3>{data}</h3> : null
//             }
//             <input type="text" onChange={getdata} /> <br/>
//             <button onClick={()=>setPrint(true)}>Print Data</button>
//         </div>
//     )
// }
// export default InputBox;

// Hide and Show Elements--
// import React, {useState} from "react";
// function HideAndShow(){
//     const [status,setStatus]=useState(true);
//     return(
//         <div>
//             {
//             status ? <h1>Hello World..!!</h1> : null
//             }
//             {/* <button onClick={()=>setStatus(false)}>Hide Data</button>
//             <button onClick={()=>setStatus(true)}>Show Data</button> */}
//             <button onClick={()=>setStatus(!status)}>Toggle</button>
//         </div>
//     )
// }
// export default HideAndShow;

// Form Handling--
// import { useState } from "react";
// function HandleForms(){
//     const[name,setName]=useState("");
//     const[fruits,setFruits]=useState(false);
//     const[tnc,setTnc]=useState("");
//     function getFormData(e){
//         console.log(name,fruits,tnc)
//         e.preventDefault();
//     }
//     function clear(){
//         setName("");
//         setFruits(false);
//         setTnc("");
//     }
//     return(
//         <div>
//             <h1>Handle Forms in React</h1>
//             <form onSubmit={getFormData}>
//                 <label htmlFor="name">Name: </label>
//                 <input type="text" placeholder="Enter Your Name" onChange={(name)=>setName(name.target.value)}/> <br /> <br />
//                 <select onChange={(fruits)=>setFruits(fruits.target.value)}>
//                     <option value="">Select Fruits</option>
//                     <option>Banana</option>
//                     <option>Mango</option>
//                     <option>Apple</option>
//                     <option>WaterMelon</option>
//                     <option>Pomegranate</option>
//                 </select> <br /> <br />
//                 <input type="checkbox" onChange={(tnc)=>setTnc(tnc.target.checked)}/> <span>Accept Terms and Conditions</span>
//                 <br /><br />
//                 <button type="submit">Submit</button>
//                 <button type="reset" onClick={clear}>Clear</button>
//             </form>
//         </div>
//     )
// }
// export default HandleForms;

// Conditional Rendering--
// import { useState } from "react";
// function Conditions(){
//     // const[condition,setCondition]=useState(false);
//     const [condition,setCondition]=useState(6);
//     return(
//         <>
//         <h1>Conditional Rendering in React</h1>
//         {/* {condition ? <p>Condition is true</p> : <p>Condition is false</p>} */}
//         {condition==1 ? <p>Condition 1</p>
//         : condition==2 ? <p>Condition 2</p>
//         :<h1>Welcome here</h1>}
//         </>
//     )
// }
// export default Conditions;

// Form Validation--
// import { useState } from "react";
// function FormValidation(){
//     const [user,setUser]=useState("");
//     const [password,setPassword]=useState("");
//     const [userErr,setUserErr]=useState(false);
//     const [passErr,setPassErr]=useState(false);

//     function loginHandler(e){
//         if(user.length<3 || password.length<3){
//             alert("Invalid Credentials");
//         }else{
//             alert("Login Successfull.!!")
//         }
//         e.preventDefault();
//         console.log(e.target.value)
//     }

//     function userHandler(e){
//         let item=e.target.value;
//         if(item.length<3){
//             setUserErr(true);
//         }else{
//             setUserErr(false); 
//         }
//         setUser(item);
//     }

//     function passwordHandler(e){
//         let item=e.target.value;
//         if(item.length<3){
//             setPassErr(true);
//         }else{
//             setPassErr(false);
//         }
//         setPassword(item);
//     }
//     return(
//         <>
//         <h1>Basic Form Validation</h1> 
//         <form onSubmit={loginHandler}> <br />
//             <input type="text" placeholder="Enter User Id" onChange={userHandler}/> <br />{userErr?<span>User Invalid</span>:""}<br /> <br />
//             <input type="password" placeholder="Enter User Password" onChange={passwordHandler}/> <br />{passErr?<span>Password Invalid</span>:""} <br /> <br />
//             <button type="submit">Login</button>
//         </form>
//         </>
//     )
// }
// export default FormValidation;
 
// Pass Function as Props--
// function PassingFunction(props){
//     return(
//         <>
//         <h1>Passing Function as Props</h1>
//         <button onClick={props.data}>Call Data Function</button>
//         </>
//     )
// }
// export default PassingFunction;

//Counter with State--
// import { useState } from "react";
// function MyApp(){
//     const [count,setCount]=useState(0);
//     function getData(){
//         setCount(count + 1);
//     }
//     return(
//         <>
//         <button onClick={getData}>Clicked {count} times.!</button>
//         </>
//     )
// }
// export default MyApp;

// Life Cycle Methods--

// 1.Mounting-
// a.constructor() method:-
// import React from "react";
// export default class Construct extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             data:"John Doe"
//         }
//     }
//     render(){
//         return(
//             <p>Helloo, {this.state.data}</p>
//         )
//     }
// }

// b.render() method:-
// import React from "react";
// class RenderMethod extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             email:"John@test.com"
//         }
//     }
//     render(){
//         // console.log("Render Method", this.props);
//         return(
//             <>
//             <p>Render Method heree {this.state.email}</p>
//             <button onClick={()=>this.setState({email:"Doe@gmail.com"})}>Update Email</button>
//             </>
//         )
//     }
// }
// export default RenderMethod;

// c.componentDidMount() method:-
// import React from "react";
// class MountMethod extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             name:"Divyaa"
//         }
//     }
//     componentDidMount(){
//         console.log("Component Did Mount Method");
//     }
//     render(){
//         console.log("Render Method");
//         return(
//             <>
//             <h1>Component Did Mount Method-</h1>
//             <p>{this.state.name}</p>
//             <button onClick={()=>this.setState({name:"Waghmode"})}>Update Name</button>
//             </>
//         )
//     }
// }
// export default MountMethod;

// Ex.-2 
// import React from "react";
// export default class MountMethod extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             favoritecolor:"Olive Green"
//         }
//     }
//     componentDidMount(){
//         setTimeout( () => {
//             this.setState({favoritecolor:"Black"})
//         }, 4000)
//  s   }
//     render(){
//         return(
//             <h1>My Favorite Color is {this.state.favoritecolor}.!! </h1>
//         )
//     }
// }

// 2.Updating-
// a.componentDidUpdate() method:-
// import React from "react";
// export default class UpdateMethod extends React.Component{
//     constructor(){
//         super();
//         console.log("Constructor Method")
//         // this.state={
//         //     name:"Divya"
//         // }
//         this.state={
//             count:0
//         }
//     }
//     componentDidUpdate(preProps,preState,snapshot){
//         console.log("Component Did Update", preState)
//     }
//     render(){
//         console.log("Render Method")
//         return(
//             <>
//             <h1>Component Did Update Method-</h1>
//             {/* <p>{this.state.name}</p> */}
//             {/* <button onClick={()=>{this.setState({name:"Waghmode"})}}>Update Name</button> */}
//             <p>{this.state.count}</p>
//             <button onClick={()=>{this.setState({count:this.state.count+1})}}>Update Data</button>
//             </>
//         )
//     }
// }

// b.shouldComponentUpdate() method:- 
// import React from "react";
// export default class ShouldCompUpdateMethod extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             count:0
//         }
//     }
//     shouldComponentUpdate(){
//         console.log("Should Component Update", this.state.count)
//         return true;
//     }
//     render(){
//         return(
//             <>
//             <h1>Should Component Update Method--</h1>
//             <h2>Counter-{this.state.count}</h2>
//             <button onClick={()=>{this.setState({count:this.state.count+1})}}>Update Counter</button>
//             </>
//         )
//     }
// }

// 3.Unmounting-
// c.componentWillUnmount() method:-
// import React from "react";
// export default class UnmountMethod extends React.Component{
//     componentWillUnmount(){
//         console.log("Component is removed from DOM")
//     }
//     render(){
//         return(
//             <>
//             <h1>User Component-</h1>
//             </>
//         )
//     }
// }

// React Hooks--
// 1.useState Hook-
// import React, { useState } from "react";
// export default function UseStateHook(){
//     const [data,setData]=useState("Divyaa");
//     return(
//         <>
//         <h1>React UseState Hook-</h1>
//         <h4>Hello {data}!!</h4>
//         <button onClick={()=>setData("Divii")}>Update data</button>
//         </>
//     )
// }

// 2.useEffect Hook-
// import React, { useEffect, useState } from "react";
// export default function UseEffectHook(){
//     const [count, setCount]=useState(0);
//     useEffect( () => {
//         console.log("Use Effect Hook")
//     })
//     return(
//         <>
//         <h1>React UseEffect Hook</h1>
//         <p>{count}</p>
//         <button onClick={()=>setCount(count+1)}>Update Count</button>
//         </>
//     )
// }

// -Stop calling useEffect on states-
// import React, {useEffect, useState} from "react";
// export default function StopUseEffectWithStates(){
// const [count, setCount]=useState(0);
//     useEffect ( () => {
//         console.log("UseEffect is called")
//     },[])  //Stopped calling useEffect with states just put empty array braces
//     return(
//         <>
//         <h1>Stop Calling UseEffect with states-</h1>
//         <p>{count}</p>
//         <button onClick={()=>setCount(count+1)}>Update Count</button>
//         </>
//     )
// }

// -Stop calling useEffect on props-
// import React, {useEffect} from "react";
// export default function StopUseEffectWithProps(props){
//     useEffect ( () => {
//         console.log("UseEffect is called")
//     },[]) //Stopped calling useEffect with states just put empty array braces
//     return(
//         <>
//         <h1>Stop Calling UseEffect With Props-</h1>
//         <p>{props.PropsCount}</p>
//         </>
//     )
// }

// -useEffect with specific state-
// import React, { useEffect, useState } from "react"
// export default function UseEffectWithSpecificStates(){
//     const [data, setData] = useState(10);
//     const [count, setCount] = useState(100);
//     useEffect( () => {
//         console.log("Data is:"+ data)
//     },[data])
//     useEffect( () => {
//         console.log("Count is:"+ count)
//     },[count])
//     return(
//         <>
//         <h1>UseEffect Hook With Specific Condition on States--</h1>
//         <h3>Data : {data}</h3>
//         <h3>Count : {count}</h3>
//         <button onClick={()=>setData(data+1)}>Update Data</button>
//         <button onClick={()=>setCount(count+1)}>Update Count</button>
//         </>
//     )
// }

// -useEffect with specific props-
// import React, { useEffect } from "react";
// export default function UseEffectWithSpecificProps(props){
//     useEffect( () => {
//         console.log("Count is: "+ props.count+" Data is: "+props.data)
//     },[props.count, props.data])
//     return(
//         <>
//         <h1>UseEffect Hook With Specific Condition on Props--</h1>
//         <h3>Props Data: {props.data}</h3>
//         <h3>Props Count: {props.count}</h3>
//         </>
//     )
// }

// Styling React using CSS--
// 1.Inline Styling-
// export default function InlineStyle(){
//     return(
//         <>
//         <h1 style={{backgroundColor:"Black", color:"Green"}}>Hello React Inline Style.!!</h1>
//         <p style={{textAlign: "center"}}>Hello thereee</p>
//         </>
//     )
// }

// 2.CSS Stylesheets-
// import './style.css'
// export default function CssStylesheet(){
//     return(
//         <>
//         <h1 className='primary'>Hello React CSS Stylesheet</h1>
//         </>
//     )
// }

// 3.CSS Modules-
// import styles from './style.module.css'
// export default function CssModules(){
//     return(
//         <>
//         <h1 className={styles.secondary}>Hello React CSS Modules.!!</h1>
//         </>
//     )
// }

// Array Listing with Map Function--
export default function ArrayWithMap(){
    const names=["Divya", "Laddu", "Peter", "Divii", "Chinkii"];
    //map looping-
    // names.map( (item) => {
    //     console.log("My Name is: ", item)
    // })
    return(
        <>
        <h1>Array Listing with Map function-</h1>
        {
            names.map( (data) => 
                <h1>Name is: {data}</h1>
            )
        }
        </>
    )
}








    