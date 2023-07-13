import React,{useState} from "react";
import { myTodo } from "./context";
import TodoRef from "./TodoRef";

const TodoList = () => {
  const[todo, setTodo]=useState([]);
  return (
    <>
      <div class="container" style={{ textAlign: "center" }}>
        <div class="row">
          <div class="col-md-12 text-center">
            <h3 class="animate-charcter">TodoList</h3>
          </div>
        </div>
      </div>
      <myTodo.Provider value={{ todo, setTodo }}>
        <TodoRef />
      </myTodo.Provider>
    </>
  );
};

export default TodoList;
