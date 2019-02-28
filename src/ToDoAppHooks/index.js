import React, { useState } from "react";
import NewTodo from "../NewTodo";
import TodoItem from "../TodoItem";
import { Container, List } from "../Styled";
import './main.css'

export default function ToDoApp(){
  const [newTodo, updateNewTodo] = useState("")
  const [todos, updateTodos] = useState([])

  const handleNewChange = (e) => updateNewTodo(e.target.value);

  const handleNewSubmit = (e) => {
    e.preventDefault();
    updateTodos(prevTodos => [
        ...prevTodos,
        {id: Date.now(), text: newTodo, completed: false}
      ]
    });
  }
  
  handleDelete(id, e) {
    this.setState(prevState => {
      return {
        todos: prevState.todos.filter(todo => todo.id !== id)
      };
    });
  }
  handleCompletedToggle(id, e) {
    this.setState(prevState => {
      return {
        todos: prevState.todos.map(todo =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      };
    });
  }
  render() {
    const { newTodo, todos } = this.state;
    return (
      <Container todos={todos}>
        <NewTodo
          onSubmit={this.handleNewSubmit}
          value={newTodo}
          onChange={this.handleNewChange}
        />
        {!!todos.length && (
          <List>
            {todos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onChange={this.handleCompletedToggle}
                onDelete={this.handleDelete}
              />
            ))}
          </List>
        )}
      </Container>
    );
  }
}
