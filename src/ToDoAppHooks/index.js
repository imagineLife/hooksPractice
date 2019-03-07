import React, { useState, useEffect, useRef, useReducer } from "react";
import NewTodo from "../NewTodo";
import TodoItem from "../TodoItem";
import About from "../About";
import { Container, List } from "../Styled";
import {useLocalStorage, useDocTitle, useKeyDown} from '../customHooks';
import './main.css'


//another custom hook!
//ONLY update title when passedTitle has changed
//  via the arr @ end

export default function ToDoApp(){

  //get/set for NEW todos
  const [newTodo, updateNewTodo] = useState("")

  //refs, instantiate with 0
  const todoID = useRef(0)

  //get todo from localstorage 
  // const [todos, updateTodos] = useLocalStorage("todos", [], resVals => {
  //   todoID.current = resVals.reduce((memo, todo) => Math.max(memo, todo.id), 0)
  // })

  //converted localStorage to useReducer
  const [todos, dispatch] = useReducer((state, action) => {
    switch (action.type){
      case "ADD_TODO":

        //increase the current todoID
        todoID.current += 1;

        //add the todo 
        return [
          ...state,
          {
            id: todoID,
            text: action.text,
            completed: false
          }];
      case "ADD_TODO":
        return state;
      case "ADD_TODO":
        return state;
      default:
        return state;
    }
  }, [])


  //Update doc title
  //NOTE: no arr @ end means updates EVERY time app updates
  const incompleteTodoCount = todos.reduce((memo, todo) => (!todo.completed ? memo + 1 : memo), 0);
  
  const docTitle = incompleteTodoCount ? `Todos (${incompleteTodoCount})` : "Todos"
  useDocTitle(docTitle);


  //SHOULD about page show or not
  const [showAbout, setShowAbout] = useState(false)

  //"Standard" todo add/update/subtract methods  
  const handleNewChange = (e) => updateNewTodo(e.target.value);

  const handleNewSubmit = (e) => {

    e.preventDefault();
    dispatch({type: "ADD_TODO", text: newTodo})    
    updateNewTodo("");
  }

  const handleDelete = (id, e) => {
    updateTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  }
  
  const handleCompletedToggle = (id, e) => {
    updateTodos(prevTodos => prevTodos.map(todo =>
      (todo.id == id) ? {...todo, completed: !todo.completed} : todo
    ));
  }
  
  return (
    <Container todos={todos}>
      
      <NewTodo
        onSubmit={handleNewSubmit}
        value={newTodo}
        onChange={handleNewChange}
      />
      
      {!!todos.length && (
        <List>
          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onChange={handleCompletedToggle}
              onDelete={handleDelete}
            />
          ))}
        </List>
      )}

      <About
          isOpen={showAbout}
          onClose={() => setShowAbout(false)}
        />
    </Container>
  );
}
