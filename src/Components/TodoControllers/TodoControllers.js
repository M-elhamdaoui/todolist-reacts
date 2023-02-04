import React,{useContext} from 'react'
import Theme from '../../Contexts/MoodContext'
import './todoController.css';



function TodoControllers(props) {
  const theme =useContext(Theme)
  const classes=["todoController",theme.theme]

  const all = props.show === "All" ? "Active" : "";
  const active = props.show === "Active" ? "Active" : "";
  const completed=props.show==="Completed"?"Active":"";
  return (
    <div className={classes.join(" ")}>
      <div className="length">{props.lengthOfTodos} items left</div>
      <div className="controllers">
        <p
          onClick={() => {
            props.setShows("All");
          }}
          className={all}
        >
          All
        </p>
        <p
          onClick={() => {
            props.setShows("Active");
          }}
          className={active}
        >
          Active
        </p>
        <p
          onClick={() => {
            props.setShows("Completed");
          }}
          className={completed}
        >
          Completed
        </p>
      </div>
      <div className="clearing">
        <p onClick={props.clearCompleted}>Clear Completed</p>
      </div>
    </div>
  );
}

export default TodoControllers