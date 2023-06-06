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
// export default function ArrayWithMap(){
//     const names=["Divya", "Laddu", "Peter", "Divii", "Chinkii"];
//     //map looping-
//     // names.map( (item) => {
//     //     console.log("My Name is: ", item)
//     // })
//     return(
//         <>
//         <h1>Array Listing with Map function-</h1>
//         {
//             names.map( (data) => 
//                 <h1>Name is: {data}</h1>
//             )
//         }
//         </>
//     )
// }

// Conditional Rendering--
// 1. if else statement-
// function Item({ name, isPacked }) {
//Normal Rendering--
// return <li className="item">{name}</li>

//Rendering with if else--
// if(isPacked){
//     // return <li className="item">{name} is packed.✔</li>
//     return null
// }else{
//     return <li className="item">{name} is not packed.✖</li>
// }

//Rendering with ternary operator--
// return(
//     <li>
//         {isPacked ? name+'✔':name+'✖'}
//     </li>
// )

// return (
//     <li className="item">
//         {isPacked ? (
//             name + ' is ✔ packed'
//         ) : (
//             <del>
//                 {name+' is ✖ packed'}
//             </del>
//         )}
//     </li>
// )

//Rendering with && operator--
// return(
//     <li>
//         {name} {isPacked && '✔' }
//     </li>
// )
// }
// export default function PackingList() {
//     return (
//         <>
//             <h1>My Packing List--</h1>
//             <ul>
//                 <Item
//                     isPacked={true}
//                     name="Vegetables"
//                 />
//                 <Item
//                     isPacked={false}
//                     name="DryFruits"
//                 />
//                 <Item
//                     isPacked={true}
//                     name="Sweets"
//                 />
//                 <Item
//                     isPacked={false}
//                     name="Food"
//                 />
//                 <Item
//                     isPacked={true}
//                     name="Fruits"
//                 />
//             </ul>
//         </>
//     )
// }

// Performing addition, deletion, and updating operations on data --
// import React, { useState } from "react";
// function MyComponent(){
//     const [data, setData] = useState([]);

//     //Addition-
//     const handleAddData = (newData) => {
//         const id = Date.now().toString();
//         const item = {id, ...newData};
//         setData(prevData => [...prevData, item]);
//     };

//     //Deletion-
//     const handleDeleteData = (id) => {
//         setData(prevData => prevData.filter(item => item.id !== id));
//     };

//     //Updation-
//     const handleUpdateData = (id, updatedData) => {
//         setData(prevData => prevData.map(item => {
//             if(item.id === id){
//                 return{...item, ...updatedData};
//             }
//             return item;
//         }));
//     };

//     return(
//         <>
//         <h1>Performing Addition, Deletion and Updation Operations on Data-</h1>
//         <AddDataForm handleAddData={handleAddData}/>
//         <DataList data={data} handleDeleteData={handleDeleteData} handleUpdateData={handleUpdateData} />
//         </>
//     );
// }

// function AddDataForm({handleAddData}){
//     const [id, setId] = useState('');
//     const[name, setName] = useState('');
//     // const [newData, setNewData] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if(id.trim() === '' || name.trim() === ''){
//             return;
//         }
//         handleAddData({id, name});
//         setId('');
//         setName('');
//     };

//     return(
//         <form onSubmit={handleSubmit}>
//             <input
//              type="text"
//              placeholder="ID"
//              value={id} 
//              onChange={e => setId(e.target.value)}
//              />  <br /> <br />
//              <input
//              type="text"
//              placeholder="Name"
//              value={name}
//              onChange={e => setName(e.target.value)}
//              /> <br /> <br />
//              <button type="submit">Add Data</button>
//         </form>
//     );
// }

// function DataList({data, handleDeleteData, handleUpdateData}){
//     const [editingId, setEditingId] = useState('');
//     const [editingName, setEditingName] = useState('');

//     const handleEdit = (id,name) => {
//         setEditingId(id);
//         setEditingName(name);
//     };

//     const handleUpdate = (id) => {
//             handleUpdateData(id, {name:editingName});
//             setEditingId('');
//             setEditingName('');
//     }
//     return(
//         <ul>
//             {data.map(item => (
//             <li key={item.id}>
//                 ID: {item.id}, Name: {editingId === item.id ? (
//                     <input
//                     type="text"
//                     value={editingName}
//                     onChange={e => setEditingName(e.target.value)}
//                     />
//                 ) : (
//                     item.name
//                 )}
//                 {editingId === item.id ? (
//                     <button onClick={() => handleUpdate(item.id)}>Save</button>
//                 ) : ( 
//                 <>
//                 <button onClick={()=>handleDeleteData(item.id)}>Delete</button>
//                 <button onClick={()=>handleEdit(item.id, item.name)}>Update</button>
//                 </>
//                 )}
//                 </li>
//                 ))
//             }
//         </ul>
//     );
// }
// export default MyComponent;

// export default function CrudOperation(){
//GET Post-
// fetch("https://jsonplaceholder.typicode.com/posts")
// .then( (res) => res.json())
// .then( (data) => {
//     console.log(data);
// })
// .catch( (error) => {
//     console.log(error);
// })

//CREATE a Post-
// fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 0
//     }),
//     headers: {
//         "Content-type": "application/json; charset=UTF-8"
//     },
// })
// .then( (res) => res.json())
// .then( (data) => {
//     console.log(data);
// })

//UPDATE a Post-
// fetch("https://jsonplaceholder.typicode.com/posts/10", {
//     method: 'PUT',
//     body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 0
//     }),
//     headers: {
//         "Content-type": "application/json; charset=UTF-8"
//     },
// })
// .then( (res) => res.json())
// .then( (data) => {
//     console.log(data)
// })

// DELETE a Post-
//     fetch("https://jsonplaceholder.typicode.com/posts/5", {
//         method: 'DELETE'
//     })
//     return(
//         <>
//         <h1>CRUD Operation-</h1>
//         </>
//     )
// }

// Rendering Lists--
// 1.Rendering data from array with map-
// Ex.-1
// const people = [
//     'John Doe: Software Developer',
//     'Micheal: Chemist',
//     'Jack John: Mathematician',
//     'Andrew Tay: Physicist',
//     'Rose Marry: Chemist',
// ];
// function ListWithMap(){
//    const ListItems= people.map(item =>
//      <li>{item}</li>
//      );
//      console.log(ListItems);
//     return(
//     <>
//     <h1>Rendering Data from Array wit Map() Method-</h1>
//     <ol>{ListItems}</ol>
//     </>
//     )
// }
// export default ListWithMap;

// Ex.-2
// const people = [
//     {
//         id:1,
//         name:'John Doe',
//         profession:'Software Developer'
//     },
//     {
//         id:2,
//         name:'Micheal',
//         profession:'Chemist'
//     },
//     {
//         id:3,
//         name:'Jack John',
//         profession:'Software Developer'
//     },
//     {
//         id:4,
//         name:'Andrew Tay',
//         profession:'Mathematician'
//     },
//     {
//         id:5,
//         name:'Rose Marry',
//         profession:'Software Developer'
//     }
// ];
// console.log(people);
// function TableWithMap(){
//     const TableItems = people.map(
//         (item) => {
//             return (
//                 <tr>
//                     <td>{item.id}</td>
//                     <td>{item.name}</td>
//                     <td>{item.profession}</td>
//                 </tr>
//                 )
//             }
//     )
//     return(
//         <>
//         <h1>Rendering Data from Array wit Map() Method-</h1>
//         <table>
//             <thead>
//                 <tr>
//                     <th>ID</th>
//                     <th>Name</th>
//                     <th>Profession</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {TableItems}
//             </tbody>
//         </table>
//         </>
//     )
// }
// export default TableWithMap;

// 2.Rendering data from array with filter-
// const people = [
//     {
//         id: 1,
//         name: 'John Doe',
//         profession:'Software Developer'
//     },
//     {
//         id: 2,
//         name: 'Micheal',
//         profession: 'Chemist'
//     },
//     {
//         id:3,
//         name:'Jack John',
//         profession:'Software Developer'
//     },
//     {
//         id:4,
//         name:'Andrew Tay',
//         profession:'Mathematician'
//     },
//     {
//         id:5,
//         name:'Rose Marry',
//         profession:'Software Developer'
//     }
// ];
// console.log(people);
// function ListWithFilter(){
//     const ListItems = people.filter((item) =>
//         item.profession === 'Software Developer' 
//     ).map((item) =>{
//       return (
//         <>
//         <div key={item.id}>
//         {item.id} {' '}
//         {item.name} {''}
//         </div> 
//         </>
//       )
// })
//     // ListItems.map()
//     console.log(ListItems)
//     return(
//         <>
//         <h1>Rendering Data from Array with Filter() Method-</h1>
//         <div>{ListItems}</div>
//         </>
//     )
// }
// export default ListWithFilter;

// Passing Props to a component--
// Ex.-1 
// export default function PassingProps(){
//     return(
//         <>
//         <h1>Passing Props to a Component-</h1>
//         <img style={{borderRadius: '50%'}} 
//         src="https://cdn.pixabay.com/photo/2017/10/29/18/00/chihuahua-2900362_1280.jpg"
//         alt="Dog's img" 
//         width={300}
//         height={300}
//         />
//         </>
//     )
// }

// Ex.-2
// export default function PassingProps(){
// function Avatar({person,size}){
//     return(
//       <>
//       <img 
//       src='https://cdn.pixabay.com/photo/2017/10/29/18/00/chihuahua-2900362_1280.jpg'
//       alt={person.name}
//       height={size}
//       width={size} />
//       <h1>{person.name}</h1>
//       </>
//     );
//   }
//     return(
//         <>
//         <Avatar
//         person={{name:'Cute Dog'}}
//         size={200}
//         />
//         </>
//     )
// }

// import PropsComponent from "./Props";
// import PropsComponent from './Props';
// export default function PC(){
//     return(
//         <PropsComponent fruit="Mango"/>
//     )
// }

// Events and event handlers--
// -Adding event handlers-
// export default function EventHandlers(){
//     function handleClick(){
//         alert("Clicked function in event handlers.")
//     }
//     return(
//         // <button onClick={handleClick}>
//         //     Click Mee.!
//         // </button>
//         <button onClick={() => {
//         alert("Clicked Function")
//         }}>
//             Click Mee.
//         </button>
//     )
// }

// -Reading props in event handlers-
// function AlertButton({message, children}){
//     return(
//         <button onClick={() => alert(message)}>
//             {children}
//         </button>
//     );
// }
// export default function ReadingPropsInEvents(){
//     return(
//         <>
//         <AlertButton message="Let's play a game.!">
//             Play
//         </AlertButton>
//         <AlertButton message="Let's watch a movie.!!">
//             Watch
//         </AlertButton>
//         </>
//     );
// }

// -Naming event handlers props-
// function Button({onSmash, children}){
//     return(
//         <button onClick={onSmash}>
//             {children}
//         </button>
//     );
// }
// export default function NamingEventHandlers(){
//     return(
//         <>
//         <Button onSmash={() => alert("Lets play cricket..!!")}>
//         Play Game
//         </Button>
//         <Button onSmash={() => alert("Lets watch a web series..!!")}>
//         Watch Something
//         </Button>
//         </>
//     );
// }

// -Event Propagation-
// function Button({onClick, children}){
//     return(
//         <button onClick={(e) => {
//             e.stopPropagation();
//             onClick()
//         }}>{children}</button>
//     )
// }
// export default function Toolbar(){
//     return(
//         <div style={{backgroundColor:"grey", width:"30%", height:"40px"}}onClick={() => {
//             alert("You clicked on div element.")
//         }}>
//             <Button onClick={() => {
//                 alert("Playing")
//             }}>Play Movie</Button>
//             <Button onClick={() => {
//                 alert("Uploading")
//             }}>Upload Image</Button>
//         </div>
//     );
// }

// FormDropdown--
import React, { useState } from "react";
import Box from '@mui/material/Box';
import {Button, buttonClasses, TextField, FormControl, InputLabel, MenuItem, Select, IconButton, Collapse, List, ListItem, ListItemText, ListItemSecondaryAction} from '@mui/material';
import { styled } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const FormDropdown = () => {
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [dropdownData, setDropdownData] = useState([]);
  const [expandedUser, setExpandedUser] = useState(null);
  const [nameError, setNameError] = useState('');
  const [mobileNumberError, setMobileNumberError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [countryError, setCountryError] = useState('');
  const [cityError, setCityError] = useState('');

  const [nameHelperText, setNameHelperText] = useState('');
  const [mobileNumberHelperText, setMobileNumberHelperText] = useState('');
  const [emailHelperText, setEmailHelperText] = useState('');
  const [countrylHelperText, setCountrylHelperText] = useState('');
  const [cityHelperText, setCityHelperText] = useState('');


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'mobileNumber':
        setMobileNumber(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'country':
        setCountry(value);
        break;
      case 'city':
        setCity(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (!name || !mobileNumber || !email || !country || !city) {
    //   // alert("Input fields must be filled out before submitting");
    //   return;
    // }

    if(name.trim() === '') {
      setNameHelperText('Please fill out your name');
    } else{
      setNameHelperText('');
    } 

    if(mobileNumber.trim() === '') {
      setMobileNumberHelperText('Please fill out your mobile number');
    } else{
      setMobileNumberHelperText('');
    }

    if(email.trim() === '') {
      setEmailHelperText('Please fill out your email address');
    } else{
      setEmailHelperText('');
    }

    if(country.trim() === '') {
      setCountrylHelperText('Please fill out your country');
    } else{
      setCountrylHelperText('');
    }

    if(city.trim() === '') {
      setCityHelperText('Please fill out your city');
    } else{
      setCityHelperText('');
    }

    if(name.trim() === '' || mobileNumber.trim() === '' || email.trim() === '' || country.trim() === ' ' || city.trim() === ''){
      return;
    }

    if (name.length < 2 || name.length > 20) {
      setNameError("Name should be between 2 and 20 characters");
      return;
    }

    if (country.length < 2 || country.length > 20) {
      setCountryError("Country should be between 2 and 20 characters");
      return;
    }

    if (city.length < 2 || city.length > 20) {
      setCityError("City should be between 2 and 20 characters");
    }

    const mobileNumberRegex = /^\d{10}$/;
    if (!mobileNumberRegex.test(mobileNumber)) {
      setMobileNumberError("Invalid Mobile Number");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Invalid Email Address.");
      return;
    }

    const formData = {
      name,
      mobileNumber,
      email,
      country,
      city
    };

    setDropdownData((prevData) => [...prevData, formData]);

    setName('');
    setMobileNumber('');
    setEmail('');
    setCountry('');
    setCity('');
    setNameError('');
    setMobileNumberError('');
    setEmailError('');
    setCountryError('');
    setCityError('');
    setNameHelperText('');
    setMobileNumberHelperText('');
    setEmailHelperText('');
    setCountrylHelperText('');
    setCityHelperText('');
  };

  // const handleExpandUser = (index) => {
  //   setExpandedUser(index === expandedUser ? null : index);
  // };
  
  const handleExpandUser = (index) => {
    if (index === expandedUser) {
      setExpandedUser(null);
    } else {
      setExpandedUser(index);
    }
  };
  
  return (
    <>
      <Box component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField name="name" label="Enter Your Name:-" type="text" value={name} onChange={handleInputChange} variant="outlined" required /> <br />
        {nameHelperText && <span style={{color:"red", fontSize:"small"}}>{nameHelperText}</span>}
        {nameError && (
          <span style={{ color: 'Red' }}>{nameError}</span>
        )} <br />

        <TextField name="mobileNumber" label="Enter Your Mobile Number:-" type="number" value={mobileNumber} onChange={handleInputChange} variant="outlined" required /> <br />
        {mobileNumberHelperText && <span style={{color:"red", fontSize:"small"}}>{mobileNumberHelperText}</span>}
        {mobileNumberError && (
          <span style={{ color: 'Red' }}>{mobileNumberError}</span>
        )} <br />

        <TextField name="email" label="Enter Your Email:-" type="email" value={email} onChange={handleInputChange} variant="outlined" required /> <br />
        {emailHelperText && <span style={{color:"red", fontSize:"small"}}>{emailHelperText}</span>}
        {emailError && (
          <span style={{ color: 'Red' }}>{emailError}</span>
        )} <br />

        <TextField name="country" label="Enter Your Country:-" type="text" value={country} onChange={handleInputChange} variant="outlined" required /> <br />
        {countrylHelperText && <span style={{color:"red", fontSize:"small"}}>{countrylHelperText}</span>}
        {countryError && (
          <span style={{color: 'Red' }}>{countryError}</span>
        )} <br />

        <TextField name="city" label="Enter Your City:-" type="text" value={city} onChange={handleInputChange} variant="outlined" required /> <br />
        {cityHelperText && <span style={{color:"red", fontSize:"small"}}>{cityHelperText}</span>}
        {cityError && (
          <span style={{color: 'Red'}}>{cityError}</span>
        )
        } <br />
        <CustomButton type="submit">Submit</CustomButton>
      </Box>

      <Box 
       sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}>
      {dropdownData.length > 0 && (
        <div>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Data</InputLabel>
        <Select
  labelId="demo-simple-select-label"
  id="demo-simple-select"
  value={expandedUser !== null ? dropdownData[expandedUser].name : ''}
  label="Data"
  onChange={handleInputChange}
>
  {dropdownData.map((data, index) => (
    <MenuItem key={index}>
      <div>
        <ListItemText primary={`${data.name}, ${data.email}`} />
        {index === dropdownData.length - 1 && (
          <ListItemSecondaryAction>
            <IconButton onClick={() => handleExpandUser(index)}>
              {expandedUser === index ? <RemoveIcon /> : <AddIcon />}
            </IconButton>
          </ListItemSecondaryAction>
        )}
      </div>
      {expandedUser === index && (
        <Collapse in={expandedUser === index}>
          <List component="div" disablePadding>
            <ListItem>
              <ListItemText primary={`City: ${data.city}`} />
            </ListItem>
            <ListItem>
              <ListItemText primary={`Country: ${data.country}`} />
            </ListItem>
            <ListItem>
              <ListItemText primary={`Mobile Number: ${data.mobileNumber}`} />
            </ListItem>
          </List>
        </Collapse>
      )}
    </MenuItem>
  ))}
</Select>

      </FormControl>
        </div>
        )}
        </Box>
    </>
  );
};
const blue = {
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
};

const CustomButton = styled(Button)`
    font-family: IBM Plex Sans, sans-serif;
    font-weight: bold;
    font-size: 0.875rem;
    background-color: ${blue[500]};
    padding: 12px 24px;
    border-radius: 12px;
    color: white;
    transition: all 150ms ease;
    cursor: pointer;
    border: none;
  
    &:hover {
      background-color: ${blue[600]};
    }
  
    &.${buttonClasses.active} {
      background-color: ${blue[700]};
    }
  
    &.${buttonClasses.focusVisible} {
      box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
      outline: none;
    }
  `;
export default FormDropdown;