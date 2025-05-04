import Login from "./pages/Login.tsx";
import SignUp from "./pages/SignUp.tsx";
import Onboarding from "./pages/Onboarding.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/register" element={<SignUp/>}/>
        <Route path="/onboarding" element={<Onboarding/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
