
import { BrowserRouter, Routes } from "react-router-dom";
import {renderRoutes,  routes } from "./routes";
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {renderRoutes(routes)}
      </Routes>
    </BrowserRouter>
  )
}

export default App
