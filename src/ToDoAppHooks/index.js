import React, { useState } from "react";
import NewTodo from "../NewTodo";
import TodoItem from "../TodoItem";
import { Container, List } from "../Styled";
import './main.css'

export default function ToDoApp(){
  const [newTodo, updateNewTodo] = useState("")
  const [todos, updateTodos] = useState([])


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
