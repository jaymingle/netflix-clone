
import './App.css'
import HomeScreen from "./components/HomeScreen.jsx";

import {createBrowserRouter, RouterProvider, BrowserRouter, Route, Link, Routes,} from "react-router-dom";
import TheRouter from "./components/TheRouter.jsx";

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
                <Route path="test" element={<TheRouter/>}/>
            </Routes>
        </BrowserRouter>

    </div>
  )
}

export default App
