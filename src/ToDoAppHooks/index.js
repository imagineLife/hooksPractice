import React, { useState, useEffect } from "react";
import NewTodo from "../NewTodo";
import TodoItem from "../TodoItem";
import { Container, List } from "../Styled";
import './main.css'

export default function ToDoApp(){

  //get/set for NEW todos
  const [newTodo, updateNewTodo] = useState("")

  //GET localStorage todos
  //NOTE: added a wrapper fn to work with useState,
  // invoked ONCE  to get initial value. This changes localStorage performance for the better
  const initialToDos = () =>
    JSON.parse(window.localStorage.getItem("todos") || "[]");

  //get/set for EXISTING todos
  const [todos, updateTodos] = useState(initialToDos)


  /*
    WRITE todos to localstorage
    NOTE: arr @ end means ONLY run if 'todos' has changed
  */
  useEffect(() => {
    window.localStorage.setItem(
      "todos",
      JSON.stringify(todos)
    );
  }, [todos])

  /*
    
    componentDidMount() {
      const todos = JSON.parse(window.localStorage.getItem("todos") || "[]");
      document.addEventListener("keydown", this.handleKey);
      this.update(todos);
      this.setState({ todos });
    }
    componentDidUpdate(prevProps, prevState) {
      if (prevState.todos !== this.state.todos) {
        this.update(this.state.todos);
      }
    }
    componentWillUnmount() {
      document.removeEventListener("keydown", this.handleKey);
    }

  */
  
  const handleNewChange = (e) => updateNewTodo(e.target.value);

  const handleNewSubmit = (e) => {
    e.preventDefault();
    updateTodos(prevTodos => [
        ...prevTodos,
        {id: Date.now(), text: newTodo, completed: false}
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
    </Container>
  );
}
