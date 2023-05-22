// 1. Fetching Data using inbuilt fetch API--
// Ex.-1 
// import React, {useEffect, useState} from "react";
// export default function UsingFetch(){
//     const [users, setUsers] = useState();
//     function fetchData(){
//         // fetch("https://jsonplaceholder.typicode.com/users")
//         fetch("https://api.publicapis.org/entries")
//         .then(res => res.json())
//         .then(data => setUsers(data))
//     }
//     useEffect( () => {
//         fetchData()
//     }, [])
//     console.log('users', users)
//     // console.log(users?.entries?.map(i=>i.API))
//     // console.log(users?.entries?.filter( (i,index) => index < 10))
//     // const filterItem = users?.entries?.filter( (i,index) => index < 10)
    
//     return(
//         <>
//         <h1>Hellooo</h1>
//         {/* <h2>{users?.entries[0]?.API}</h2> */}
//         {
//      users?.entries?.filter( (i,index) => index < 10)
//         ?.map( (item) =>{
//             // console.log('index', index)
//              return (
//              <>
//              <h1>{item.API}</h1>
//              <p style={{backgroundColor:"red"}}>{item.Auth}</p>
//              </>)
//             } 
//          )
//         }
//         </>
//     )
// }


// Ex.-2
import React, { useState, useEffect } from "react";
function UsingFetchApi(){
    const [users, setUsers] = useState();
    function fetchData(){
        fetch("https://api.publicapis.org/entries")
        .then( (res) => res.json())
        // .then( (data) => console.log(data))
        .then( (data) => setUsers(data))
    }

    useEffect( () => {
        fetchData();
    },[])

    return(
        <>
        <h1>Using Fetch API--</h1>
        {
            users?.entries?.filter( (i,index) => index < 15)
            ?.map( (item) => {
            return (
            <>
            <ul>
                <li style={{backgroundColor:"black", color:"green"}}>API is: {item.API} </li>
                <li style={{backgroundColor:"black", color:"red"}}>Description is: {item.Description}</li> 
                <li style={{backgroundColor:"black", color:"goldenrod"}}>Auth is: {item.Auth}</li>
            </ul>
            </>)
        })
    }
        </>
    )
}
export default UsingFetchApi; 