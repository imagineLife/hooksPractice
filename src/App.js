import React from "react";
import ReactDOM from "react-dom";

//hooks apps
import FirstApp from './FirstApp';
import FirstAppHooks from './FirstAppHooks';

import ToDoApp from './ToDoApp';
import ToDoAppHooks from './ToDoAppHooks';

ReactDOM.render(<ToDoAppHooks />, document.getElementById("app"));