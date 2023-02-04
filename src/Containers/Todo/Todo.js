import React ,{useContext,useState,useEffect} from 'react'
import './todo.css'
import Theme from '../../Contexts/MoodContext';
import {TodoControllers,TodoHeader,TodoInput,TodoList} from "../../Components"




function Todo() {
  const [todos,setTodos]=useState([])
  const [show,setShow]=useState("All");
 useEffect(()=>{
    if(localStorage.getItem("todos")!==null){
      setTodos(JSON.parse(localStorage.getItem("todos")))
    }
 },[])

  useEffect(() => {
      localStorage.clear("todos");
      localStorage.setItem("todos",JSON.stringify(todos));
     

  }, [todos]);

  const addTodo=(todo)=>{
    
    setTodos((prevTodos)=>{
      return [
        todo,
        ...todos
      ]
    })
  }
  const toggleCompleted=(id)=>{
    const elem =todos.findIndex((elem)=>elem.id===id);
      const allTodos=[...todos];
      allTodos[elem].isCompleted=!allTodos[elem].isCompleted;
      setTodos(allTodos);
 
  }
 const setshows =(value)=>{
   setShow(value);
 }
 const clearCompleted=()=>{
   const allTodos=[...todos];
   const todosNotCompleted=allTodos.filter(elem=>elem.isCompleted!==true);
   setTodos(todosNotCompleted);
 }
  const theme =useContext(Theme);
  
  const classes=["todo",theme.theme]
  return (
    <div className={classes.join(" ")}>
      <TodoHeader />
      <TodoInput addTodo={addTodo} />
      <div className="todoContainer">
        <TodoList
          todos={sortTable(todos, show)}
          toggleCompleted={toggleCompleted}
        />
        <TodoControllers
          lengthOfTodos={sortTable(todos, show).length}
          setShows={setshows}
          clearCompleted={clearCompleted}
          show={show}
        />
      </div>
    </div>
  );
}

export default Todo;


const sortTable=(data,shape)=>{
  switch(shape){
    case "All":
      return data;
  
    case "Completed":
      return data.filter(elem=>elem.isCompleted===true)
      
    case "Active":
      return data.filter(elem=>elem.isCompleted===false)
     
      default :
      return null;
    
  }
}