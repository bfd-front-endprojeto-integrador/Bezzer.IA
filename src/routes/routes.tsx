import { Routes, Route } from 'react-router-dom'
// import TelaDesenvolvimento from '../components/TelaDesen';
import Home from '../components/Home';
import Splash from "../components/splash"
import Login from "../components/Login"
import Cadastro from '../components/Cadastro';
import Perfil from "../pages/Perfil/Perfil";
import Notification from '../components/Notification';
import Historico from "../components/Historico"

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/home" element={<Home />} />
      <Route path="/splash" element={<Splash/>} />
      <Route path="/cadastro" element={<Cadastro/>} />
      <Route path="/perfil" element={<Perfil/>} />
      <Route path="/notificacoes" element={<Notification />} />
      <Route path="/historico" element={<Historico/>} />
    </Routes>
  )
}

export default AppRoutes;
