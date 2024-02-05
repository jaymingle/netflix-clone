
import './App.css'
import HomeScreen from "./components/HomeScreen.jsx";

import {createBrowserRouter, RouterProvider, Route, Link,} from "react-router-dom";

function App() {

  return (
    <div className="app">
        <HomeScreen/>
    </div>
  )
}

export default App
