import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, clearAll, updateTodo } from "./store/slice";
import './style.css'


const App = () => {
  const [val, setVal] = useState("");
  const [btn, setBtn] = useState("Add");
  const[indexNumber, setIndexNumber] = useState();

  const dispatch = useDispatch();
  const showData = useSelector((state) => state.todo.data);

  const formSubmit = (event) => {
    event.preventDefault();
    val.trim() !== "" ? (btn === "Add") ? dispatch(addTodo(val)) :  (dispatch(updateTodo({ind:indexNumber,val:val})) && setBtn("Add"))    : alert("Please Enter Text");
    setVal("");
  }

  return (
    <div className="container">
      <h1>Todo List</h1>
      <form onSubmit={formSubmit} className='center-div'>
        <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
        <button type="submit">{btn}</button>
        <button type="button" onClick={() => { dispatch(clearAll()); setVal(""); setBtn("Add") }}>Clear All</button>
      </form>
      <div>
        <ul>
          {showData.map((element, index) => (
            <div className='ul-div'>
              <li>{element}</li>
              <span onClick={() => { setVal(showData[index]); setBtn("Update");setIndexNumber(index)}}>Edit</span>
              <span onClick={() => {dispatch(deleteTodo(index));setVal("");setBtn("Add")}}>Del</span>
            </div>
          ))}
        </ul>
      </div>

    </div>
  )
}

export default App;