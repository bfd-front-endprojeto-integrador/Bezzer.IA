import { Routes, Route } from "react-router-dom";

import AppLayout from "./components/AppLayout";

import Home from "./components/Home";
import Splash from "./components/SplashScreen/splashscreen";
import Login from "./components/Login";
import Cadastro from "./components/Cadastro";
import Perfil from "./pages/Perfil/Perfil";
import Notification from "./components/Notification";
import Historico from "./components/Historico";
import Tanque from "./components/Tanque"
import { useEffect, useState } from "react";
import TelaDesenvolvimento from "./components/TelaDesen";

export default function App() {
  const [showSplash, setShowSplash] = useState(
  !sessionStorage.getItem("splashShown")
);

useEffect(() => {
  if (showSplash) {
    const timer = setTimeout(() => {
      sessionStorage.setItem("splashShown", "true");
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }
}, [showSplash]);

if (showSplash) return <Splash />;

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/telaDesen" element={<TelaDesenvolvimento/>} />

      <Route element={<AppLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/notificacoes" element={<Notification />} />
        <Route path="/historico" element={<Historico />} />
        <Route path="/tanque/:id" element={<Tanque />} />

      </Route>

    </Routes>
  );
}
