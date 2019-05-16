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
ReactDOM.render(<Counter />, document.getElementById("app"));