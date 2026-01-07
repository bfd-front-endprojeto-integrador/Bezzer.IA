import { Routes, Route } from 'react-router-dom'
import TelaDesenvolvimento from '../components/TelaDesen';
import Home from '../components/Home';
import Splash from "../components/splash"
import Login from "../components/Login"

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<TelaDesenvolvimento />} />
      <Route path="/splash" element={<Splash/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
  )
}

export default AppRoutes;
