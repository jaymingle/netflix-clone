
import './App.css'
import HomeScreen from "./screens/HomeScreen.jsx";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import LoginScreen from "./screens/LoginScreen.jsx";
// import TheRouter from "./components/TheRouter.jsx";

function App() {

    const user = null

  return (
    <div className="app">
        <BrowserRouter>

            {
                !user ? (
                    <LoginScreen/>
                    ) : (
                        <Routes>
                            <Route path="/" element={<HomeScreen/>}/>
                            {/*<Route path="test" element={<TheRouter/>}/>*/}
                        </Routes>
                    )

            }

        </BrowserRouter>

    </div>
  )
}

export default App
