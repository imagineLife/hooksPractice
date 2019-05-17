import React from "react";
import ReactDOM from "react-dom";

//hooks apps
import FirstApp from './FirstApp';
import FirstAppHooks from './FirstAppHooks';

//non-hooks-app
import ToDoApp from './ToDoApp';
import ToDoAppHooks from './ToDoAppHooks';

//simple increment
import Counter from './Counter'
import CounterCustomHook from './CounterCustomHook'
ReactDOM.render(<CounterCustomHook />, document.getElementById("app"));