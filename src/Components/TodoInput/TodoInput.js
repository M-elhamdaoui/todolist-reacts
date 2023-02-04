import React, { useContext, useState } from "react";
import "./todoInput.css";
import Theme from "../../Contexts/MoodContext";

function TodoInput(props) {
  const [value,setValue]=useState("");
  const theme = useContext(Theme);
  const classes = ["todoInput", theme.theme];
  
  const changeHandle=(e)=>{
    setValue(e.target.value);
  }

  const submiteHandler =(event)=>{
    event.preventDefault();
    props.addTodo({
      id: Math.floor(Date.now() / 1000).toString(36),
      content: value,
      isCompleted: false,
    });
    setValue("");
  }
  return (
    <form className={classes.join(" ")} onSubmit={submiteHandler} >
      <span>
        
        <span className="circle"></span>
      </span>
     
        <input type="text" placeholder="Create new Todo " onChange={changeHandle} value={value} />
     
    </form>
  );
}

export default TodoInput;
