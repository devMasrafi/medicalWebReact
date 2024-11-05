import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from "./pages/layout/MainLayout"
import Home from "./pages/mainPages/homePage/Home"
import About from "./pages/mainPages/aboutPage/About"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
