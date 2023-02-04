import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import "./todoList.css";
import {DragDropContext} from 'react-beautiful-dnd'

function TodoList(props) {
  let todos = props.todos.map((todo) => {
    return (
      <TodoItem
        key={todo.id}
        toggleCompleted={()=>{props.toggleCompleted(todo.id)}}
        content={todo.content}
        isCompleted={todo.isCompleted}
      />
    );
  });

  return <div className="todoList">
    {todos}
  </div>;
}

export default TodoList;
