import React from 'react'
import { useState } from 'react';

export default function App() {
  const [arr,setArr]=useState([]);
  const [task,setTask]=useState("");
  const addarr=()=>{
    if(task!==""){
      setArr([...arr,task]);
      setTask=("");
    }
  };
  return (
    <div>
      <input type="text" placeholder='Enter the tasks to add' value={task} onChange={(e)=>setTask(e.target.value)} />
      <button onClick={addarr}>addTask</button>
      <h3>Tasks:</h3>
      <ol>
           {arr.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      
    </div>
  )
}
// import React, { useState } from 'react';

// export default function App() {
//   const [arr, setArr] = useState([]);
//   const [task, setTask] = useState("");

//   const addarr = () => {
//     if (task !== "") {
//       setArr([...arr, task]);
//       setTask(""); // Clear the input after adding
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Enter the tasks to add"
//         value={task}
//         onChange={(e) => setTask(e.target.value)} // Update the task input
//       />
//       <button onClick={addarr}>Add Task</button>
//       <div>
//         <h3>Tasks:</h3>
//         <ol>
//           {arr.map((item, index) => (
//             <li key={index}>{item}</li>
//           ))}
//         </ol>
//       </div>
//     </div>
//   );
// }

