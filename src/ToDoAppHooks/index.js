import React, { useState, useEffect, useRef } from "react";
import NewTodo from "../NewTodo";
import TodoItem from "../TodoItem";
import About from "../About";
import { Container, List } from "../Styled";
import './main.css'

//a CUSTOM HOOK!
const useLocalStorage = (localStorageKey, defaultVal, cb) => {

  //NOTE: includes a wrapper fn to work with useState,
  // invoked ONCE  to get initial value. This changes localStorage performance for the better
  const initialValue = () => {

    //GET items from localStorage
    const storageVal = JSON.parse(window.localStorage.getItem(localStorageKey) || JSON.stringify(defaultVal));
    
    if(cb){
      cb(storageVal)
    }

    return storageVal
  }

  //get/set for EXISTING todos
  const [storageval, setStorageval] = useState(initialValue)

  /*
    WRITE todos to localstorage
    NOTE: arr @ end means ONLY run if 'todos' has changed
  */
  useEffect(() => {
    console.log('setting to local storage');
    window.localStorage.setItem(localStorageKey, JSON.stringify(storageval));
  }, [storageval])

  return [storageval, setStorageval]
}


//another custom hook!
//ONLY update title when passedTitle has changed
//  via the arr @ end
const useDocTitle = passedTitle => {
  useEffect(() => {
    document.title = passedTitle;
  }, [passedTitle])
}

export default function ToDoApp(){

  //get/set for NEW todos
  const [newTodo, updateNewTodo] = useState("")

  //refs, instantiate with 0
  const todoID = useRef(0)

  //get todo from localstorage 
  const [todos, updateTodos] = useLocalStorage("todos", [], resVals => {
    todoID.current = resVals.reduce((memo, todo) => Math.max(memo, todo.id), 0)
  })


  //Update doc title
  //NOTE: no arr @ end means updates EVERY time app updates
  const inCompleteTodos = todos.reduce(
    (memo, todo) => (!todo.completed ? memo + 1 : memo),
    0)
  const docTitle = inCompleteTodos ? `Todos (${inCompleteTodos})` : "Todos"
  useDocTitle(docTitle);


  //SHOULD about page show or not
  const [showAbout, setShowAbout] = useState(false)
  
  //event-lifecycle-maker of sorts
  useEffect(() => {
    
    //handleKeyPress listener method
    const handleKeyPress = ({key}) =>
      setShowAbout(show => {
        return (key == "?") ? true :
          key == "Escape" ? false : show
      });
      
      //componentDIDmount code
      document.addEventListener("keydown", handleKeyPress);
      
      //componentWillUnmount code
      return () => document.removeEventListener("keydown", handleKeyPress);

  }, [])


  //"Standard" todo add/update/subtract methods  
  const handleNewChange = (e) => updateNewTodo(e.target.value);

  const handleNewSubmit = (e) => {

    e.preventDefault();
    
    //increase the current todoID
    todoID.current += 1;

    //add the todo 
    updateTodos(prevTodos => [
        ...prevTodos,
        {
          id: todoID.current, 
          text: newTodo, 
          completed: false
        }
      ]);
    
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
