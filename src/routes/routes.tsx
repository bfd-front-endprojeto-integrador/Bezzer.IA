import { Routes, Route } from 'react-router-dom'
import TelaDesenvolvimento from '../components/TelaDesen';
import Home from '../components/Home';
import Splash from "../components/splash"
import Login from "../components/Login"
import Cadastro from '../components/Cadastro';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/home" element={<Home />} />
      <Route path="/splash" element={<Splash/>} />
      <Route path="/cadastro" element={<Cadastro/>} />
      <Route path="/perfil" element={<TelaDesenvolvimento/>} />
      <Route path="/notificacoes" element={<TelaDesenvolvimento/>} />
    </Routes>
  )
}

export default AppRoutes;
