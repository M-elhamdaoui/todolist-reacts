import React, { useContext } from "react";
import Theme from '../../Contexts/MoodContext'
import './todoItem.css';
import checkIcon from '../../Assets/icons/icon-check.svg'



function TodoItem(props) {
  const theme =useContext(Theme);
  const classes=["todoItem",theme.theme]
  const isCompleted =props.isCompleted;
  const completedClasses = ["circle"];
  const completed="completed"

  if(isCompleted){
    completedClasses.push(completed)

  }

  return (
    <div className={classes.join(" ")}>
      <span>
        <span
          className={completedClasses.join(" ")}
          onClick={props.toggleCompleted}
        >
          {isCompleted ? <img src={checkIcon} alt="completed" /> : ""}
        </span>
      </span>
      <p className={isCompleted ? completed : ""}>{props.content}</p>
    </div>
  );
}

export default TodoItem