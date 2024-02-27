import { useState } from 'react';
import './App.css';
import { useRef } from 'react';

function App() {
const [x, setx] = useState([])
const inputref = useRef()
const add = () => {
const value = inputref.current.value
const newData = {completed :false , value}
setx([...x, newData])
inputref.current.value = ""
}

const itemDone = (index)=> {
const newx = [...x]
newx[index].completed = !newx[index].completed
setx(newx)
}
const toDelet = (index)=> {
  const newx = [...x]
  newx.splice(index, 1)
  setx(newx)
}
  return (
    <div className="App">
   <h2>
    To Do List
   </h2>
   <ul>
    {
      x.map(({value , completed} , index)=>{
        return <div className='divItem'> <li className={completed ? "diffstyle": ""}  onClick={() => itemDone(index)}>{value}</li>
        <span onClick={()=> toDelet(index)}>
        ❌ </span></div>
      })
    }
   </ul>
   <input ref={inputref} placeholder="Enter New Task ...."/>
   <button  onClick={add}>Add</button>
    </div>
  );
}

export default App;
