import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./NavBar"

function App() {

  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/login" element={<div>Login Page</div>} />
          <Route path="/test" element={<div>Test Page</div>} />
        </Routes>


      </BrowserRouter>
      <NavBar />
    </>
  )
}

export default App
