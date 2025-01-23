import { Route, Routes } from "react-router-dom"
import SignUpPage from "./pages/SignUpPage"
import LoginPage from "./pages/LoginPage"
import HomePage from "./pages/Home/HomePage"
import { Toaster } from "react-hot-toast"


function App() {
  
  return (
    <>
    <Routes>
      
      <Route path="/" element = {<HomePage/>} />
      <Route path="/login" element = {<LoginPage/>} />
      <Route path="/signup" element = {<SignUpPage/>} />
    
    </Routes>
    <Toaster />
    </>
  )
    
  
}

export default App
