import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import homeIcon from "../assets/imgs/Home.png";
import notificationsImg from "../assets/imgs/notifications.png";
import userImg from "../assets/imgs/User.png";
import logoSvg from "../assets/icons/logobezerrIA.svg";

export default function AppLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const itemsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const indicatorRef = useRef<HTMLSpanElement | null>(null);

  const usuarioLogado = localStorage.getItem("usuarioLogado");
  const usuario = usuarioLogado ? JSON.parse(usuarioLogado) : null;

  const [sidebarAberta, setSidebarAberta] = useState(true);

  const navItems = [
    { icon: notificationsImg, label: "Notificações", to: "/notificacoes" },
    { icon: homeIcon, label: "Início", to: "/home" },
    { icon: userImg, label: "Perfil", to: "/perfil" },
  ];

  useEffect(() => {
    const activeIndex = navItems.findIndex(
      item => item.to === location.pathname
    );
    const indexToUse = activeIndex !== -1 ? activeIndex : 1;
    const activeItem = itemsRef.current[indexToUse];

    if (activeItem && indicatorRef.current) {
      indicatorRef.current.style.left = `${activeItem.offsetLeft}px`;
    }
  }, [location.pathname]);

  return (
    <div className={`app-layout ${sidebarAberta ? "sidebar-open" : ""}`}>

      <aside className="sidebar-desktop">
        <div className="sidebar-header">
          <img src={logoSvg} className="sidebar-logo" />
          <button
            className="close-btn"
            onClick={() => setSidebarAberta(false)}
          >
            ✕
          </button>
        </div>

        <span className="sidebar-user">
          Logado como<br /><strong>{usuario ? usuario.nome : "Usuário"}</strong>
        </span>

        <nav className="sidebar-nav">
          {navItems.map(item => (
            <button
              key={item.to}
              className={`sidebar-item ${
                location.pathname === item.to ? "active" : ""
              }`}
              onClick={() => navigate(item.to)}
            >
              <img src={item.icon} />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      <main className="main">
        {!sidebarAberta && (
          <button
            className="open-sidebar-btn"
            onClick={() => setSidebarAberta(true)}>
            ☰
          </button>
        )}

        <Outlet />
      </main>

      <section className="navbar-wrapper">
        <nav className="navbar">
          {navItems.map((item, index) => (
            <button
              key={index}
              ref={el => (itemsRef.current[index] = el)}
              className={`nav-item ${
                location.pathname === item.to ? "active" : ""
              }`}
              onClick={() => navigate(item.to)}
            >
              <img src={item.icon} />
            </button>
          ))}
          <span ref={indicatorRef} className="nav-indicator" />
        </nav>
      </section>
    </div>
  );
}
