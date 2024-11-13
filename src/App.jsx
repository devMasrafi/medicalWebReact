import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from "./pages/layout/MainLayout"
import Home from "./pages/mainPages/homePage/Home"
import About from "./pages/mainPages/aboutPage/About"
import ServicePage from "./pages/mainPages/servicePage/ServicePage"
import Doctors from "./pages/mainPages/doctorPage/Doctors"
import Contact from "./pages/mainPages/contactPage/Contact"
import NewsPage from "./pages/mainPages/newsPage/NewsPage"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/service" element={<ServicePage/>}/>
          <Route path="/doctors" element={<Doctors/>}/>
          <Route path="/news" element={<NewsPage/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
