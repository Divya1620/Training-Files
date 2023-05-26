import logo from './logo.svg';
import './App.css';
import React from 'react';
import Myapp from './Myapp';
import FirstComponent from './FirstComponent';
import User, { User1 } from "./Users";
import ClassUser from "./Users";
import ClickEvent from './Users';
import FavColor from './Users';
import ClassState from './Users';
import Student from './Users';
import { useState } from 'react';
import PropsClass from './Users';
import InputBox from './Users';
import HideAndShow from './Users';
import HandleForms from './Users';
import FormHandle from './Users';
import Conditions from './Users';
import FormValidation from './Users';
import PassingFunction from './Users';
import MyApp from './Users';
import Construct from './Users';
import RenderMethod from './Users';
import MountMethod from './Users';
import UpdateMethod from './Users';
import ShouldCompUpdateMethod from './Users';
import UnmountMethod from './Users';
import StateWithHooks from './Users';
import UseStateHook from './Users';
import UseEffectHook from './Users';
import StopUseEffectWithStates from './Users'
import StopUseEffectWithProps from './Users';
import UseEffectWithSpecificStates from './Users';
import UseEffectWithSpecificProps from './Users';
import InlineStyle from './Users';
import CssStylesheet from './Users';
import CssModules from './Users';
import ArrayWithMap from './Users';
import PackingList from './Users';
import MyComponent from './Users';
import CrudOperation from './Users';
import CrudWithJson from './Users';
import ListWithMap from './Users';
import ListWithFilter from './Users';
import TableWithMap from './Users';
import Avatar from './Users';

function App() {
  //For props with functional component--
  // const [name, setName] = useState("Divya");

  //For props with class component--
  // class App extends React.Component{
  //   constructor(){
  //     super();
  //     this.state={
  //       name:"John Doe", 
  //       email:"John@gmail.com"
  //     }
  //   }
  //   render(){

    // Pass Function as Props-- 
    // function getData(){
    //   alert("Hello from App Function");
    // }

    //  For render() method:- 
    //  const[name,setName]=useState("John");
    
    // For componentWillUnmount() method:-
    // class App extends React.Component{
    //   constructor(){
    //     super();
    //     this.state={
    //       show:true
    //     }
    //   }
    //   render(){

    // For useEffect Hook-
    // const [count, setCount]=useState(0);

    // For useEffect Hook-
    const [data,setData] = useState(10);
    const [count,setCount] = useState(100);


  return (
    <div className="App">
      {/* <Myapp/> */}
      {/* <FirstComponent/> */}
    {/* <h1>Helloo</h1> */}
    <h1>Helloo There...!!!</h1>

    {/* Functional Component-- */}
    {/* <User/> */}
    {/* <User1/> */}
    
    {/* Class Component-- */}
    {/* <ClassUser/> */}

    {/* JSX-- */}
    {/* <h1>Hello</h1>
    <p>{10+20}</p> */}

    {/* Click Event-- */}
    {/* <button onClick={ClickEvent}>Click Me..!!</button> */}
    {/* <button onClick={() => ClickEvent()}>Click Mee!</button> */}

    {/* React State--  */}
    {/* <FavColor/> */}
    {/* <ClassState/> */}

    {/* React Props with Functional Component--  */}
    {/* <Student name="Divya" live="India" other={{address:"Indore", contact:"111"}}/>
    <Student name="John Doe" live="USA" other={{address:"London", contact:"222"}}/> */}
    {/* <Student name= {name} />
    <button onClick={() => {setName("Waghmode")}}>Update Name</button> */}
    
    {/* React Props with Class Component--  */}
    {/* <PropsClass name={this.state.name} email={this.state.email}/>
    <button onClick={ () => this.setState({name:"Jack John", email:"Jack@gmail.com"})}>Update Name</button> */}
    
    {/*  Get Input box value-- */}
    {/* <InputBox/> */}

    {/* Hide and Show Elements-- */}
    {/* <HideAndShow/> */}
    
    {/* Form Handling-- */}
    {/* <HandleForms/> */}
    
    {/* Conditional Rendering-- */}
    {/* <Conditions/> */}
    
    {/* Form Validation-- */}
    {/* <FormValidation/> */}
    
    {/* Pass Function as Props-- */}
    {/* <PassingFunction data={getData} /> */}

    {/* Counter with State-- */}
    {/* <MyApp/> */}
    
    {/* Life Cycle Methods-- */}
    {/* 1.Mounting- */}
    {/* a.constructor() method:- */}
    {/* <Construct/> */}
    
    {/* b.render() method:- */}
    {/* <RenderMethod name={name}/>
    <button onClick={()=>setName("Doe")}>Update Name</button> */}
    {/* <RenderMethod/> */}

    {/* c.componentDidMount() method:- */}
    {/* <MountMethod/> */}

    {/* 2.Updating- */}
    {/* a.componentDidUpdate() method:- */}
    {/* <UpdateMethod/> */}

    {/* b.shouldComponentUpdate() method:-  */}
    {/* <ShouldCompUpdateMethod/> */}

    {/* 3.Unmounting- */}
    {/* c.componentWillUnmount() method:- */}
    {/* <h1>Component Will Unmount Method--</h1>
    {
      this.state.show ? <UnmountMethod/> : <h1>Child Component Removed</h1>
    }
    <button onClick={()=>{this.setState({show:!this.state.show})}}>Toggle Child Component</button> */}
    
    {/* React Hooks-- */}
    {/* 1.useState Hook- */}
    {/* <UseStateHook/> */}
    
    {/* 2.useEffect Hook- */}
    {/* <UseEffectHook/> */}
    {/* <StopUseEffectWithStates/> */}
    {/* <StopUseEffectWithProps PropsCount={count}/>
    <button onClick={()=>setCount(count+1)}>Update Count</button> */}
    {/* <UseEffectWithSpecificStates/> */}
    {/* <UseEffectWithSpecificProps data={data} count={count} />
    <button onClick={()=>setData(data+1)}>Update Data</button>
    <button onClick={()=>setCount(count+1)}>Update Count</button> */}
    
    {/* Styling React using CSS-- */}
    {/* 1.Inline Styling- */}
    {/* <InlineStyle/> */}
    
    {/* 2.CSS Stylesheets- */}
    {/* <CssStylesheet/> */}
    
    {/* 3.CSS Modules- */}
    {/* <CssModules/> */}

    {/* Array Listing with Map Function-- */}
    {/* <ArrayWithMap/> */}

    {/* Conditional Rendering-- */}
    {/* <PackingList/> */}

    {/* Performing addition, deletion, and updating operations on data -- */}
    {/* <MyComponent/> */}
    {/* <CrudOperation/>  */}
    
    {/* Rendering Lists-- */}
    {/* 1.Rendering data from array with map- */}
    {/* <ListWithMap/> */}
    {/* <TableWithMap/> */}
    
    {/* 2.Filtering array of items- */}
    {/* <ListWithFilter/> */}

    <Avatar/>

    

    </div>
  );
}
// }

export default App;