
import './App.css'
import HomeScreen from "./components/HomeScreen.jsx";

import {createBrowserRouter, RouterProvider, BrowserRouter, Route, Link, Routes,} from "react-router-dom";

const router = createBrowserRouter([
    {

    }
])

function App() {

  return (
    <div className="app">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeScreen/>}/>
            </Routes>
        </BrowserRouter>

    </div>
  )
}

export default App
