import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore } from "redux";
//Create store from redux

import { Provider } from "react-redux";
//Provider is a component. It Makes the Redux store available to the connect() calls in the component hierarchy below.

import rootReducer from "./reducers/rootReducer";
//importing the file

const store = createStore(rootReducer);
//Create store which accepts a reducer as an argument. Only a reducer can update the state.
//We pass in a rootReducer

ReactDOM.render(
    //App is surrounded and wrapped by Provider. We pass in store to Provider and this will provide our application with the store, so the store can interact with it at a later point in time.  We can now access the store inside of the application. 
  <Provider store={store}>
    <App />   
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();

//React Redux is the library which helps us to connect our Redux Store to our React Application. It's what allows us to connect our components to the central store of data and interact with it.   npm install redux react-redux
