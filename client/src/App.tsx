import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Contacts from "./pages/Contacts"



function App() {
  

  return (
     <main className="h-screen bg-customBlue">
      <Navbar />
     <Routes>
      <Route path="/" element={<About/>} /> 
      <Route path="/contact" element={<Contacts/>} /> 
     </Routes>
   
    
      </main>
    
   
  )
}

export default App
