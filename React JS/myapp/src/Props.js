// export default function PropsComponent(props){
//     return(
//         <>
//         <h1>{props.fruit}</h1>
//         </>
//     )
// }

{/* <select> */}
          {/* <option value="data">Data</option> */}
          {/* {dropdownData.map((data, index) => (
            <option key={index}>
              {data.name}, {data.email}
            </option>
          ))}
        </select> */}
        
// const [expanded, setExpanded] = useState('');
        
//   const handleExpand = () => {
//     setExpanded(!expanded);
//   };
    //     <button onClick={handleExpand}>
    //     {expanded ? "collapse" : "Expand"}
    //   </button>
    //   {expanded && 
    //   dropdownData.map((data,index) => (
    //     <div key={index}>
    //       <p>Name: {data.name}</p>
    //       <p>Mobile Number: {data.mobileNumber}</p>
    //       <p>Email: {data.email}</p>
    //       <p>Country: {data.country}</p>
    //       <p>City: {data.city}</p>
    //     </div>
    //   ))}


    // <Select
    //       labelId="demo-simple-select-label"
    //       id="demo-simple-select"
    //       // value={name}
    //       // label="Data"
    //       // onChange={handleInputChange}
    //       value={expandedUser !== null ? dropdownData[expandedUser].name : ''}
    //       label="Data"
    //       onChange={handleInputChange}
    //     >
    //       {dropdownData.map((data,index) => (
    //       <MenuItem key={index}>
    //           {/* {data.name}, {data.mobileNumber}, {data.email}, {data.country}, {data.city} */}
    //               {/* <div>
    //                 {index === dropdownData.length - 1 && (
    //                   <>
    //                     {data.name}, {data.email}
    //                     <IconButton onClick={() => handleExpanduser(index)}>
    //                       <AddIcon />
    //                     </IconButton>
    //                   </>
    //                 )}
    //                 {index !== dropdownData.length - 1 && (
    //                   <>
    //                     {data.name}, {data.email}
    //                   </>
    //                 )}
    //               </div> */}
    //               <div>
    //                 {data.name}, {data.email}
    //                 {expandedUser === index ? (
    //                   <IconButton onClick={() => handleExpandUser(index)}>
    //                     <RemoveIcon/>
    //                   </IconButton>
    //                 ) : (
    //                   <IconButton onClick={() => handleExpandUser(index)}>
    //                     <AddIcon/>
    //                   </IconButton>
    //                 )}
    //               </div>
    //               {expandedUser === index && (
    //                 <div>
    //                     <ListItemText primary={`City: ${data.city}`} />
    //                     <ListItemText primary={`Country: ${data.country}`} />
    //                     <ListItemText primary={`Mobile Number: ${data.mobileNumber}`} />
    //                     </div>
    //               )}
    //          </MenuItem>
    //       ))}
    //     </Select>