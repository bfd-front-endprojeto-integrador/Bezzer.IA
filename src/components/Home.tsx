import { useEffect, useRef, useState } from "react";
import "../global.css"
import gaugeImg from '../assets/imgs/gauge.jpg';
import homeIcon from '../assets/imgs/Home.png';
import logoSvg from '../assets/imgs/logo.svg';
import notificationsImg from '../assets/imgs/notifications.png';
import tanque1Img from '../assets/imgs/tanque.jpg';
import tanque2Img from '../assets/imgs/tanque2.png';
import tanque3Img from '../assets/imgs/tanque3.png';
import userImg from '../assets/imgs/User.png';

type NavItem = {
  icon: string;
  alt: string;
};

export default function App() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const itemsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const indicatorRef = useRef<HTMLSpanElement | null>(null);

  const navItems: NavItem[] = [
    { icon: "assets/notifications.png", alt: "Adicionar" },
    { icon: "assets/Home.png", alt: "Home" },
    { icon: "assets/User.png", alt: "Perfil" },
  ];

  useEffect(() => {
    const activeItem = itemsRef.current[activeIndex];

    if (activeItem && indicatorRef.current) {
      indicatorRef.current.style.left = `${activeItem.offsetLeft}px`;
    }
  }, [activeIndex]);

  return (
    <>
      <header className="header">
        <div className="header-content">
          <img src={logoSvg} alt="Logo" className="logo" />
          <div className="titulo1">
            <span>Olá,</span>
            <strong>pecuarista!</strong>
          </div>
        </div>
      </header>

      <main className="main">
        <section className="filtros">
          <button className="filtro ativo">Críticos</button>
          <button className="filtro">Mais recentes</button>
          <button className="filtro">Mais antigos</button>
          <button className="filtro">A – Z</button>
        </section>

        <section className="area-tanques">
          <h2 className="titulo">Selecione seus tanques</h2>

          <section className="container-tanque">
            <h3 className="nome-tanque">Tanque Barriguinha Mole</h3>
            <div className="conteudo-tanque">
              <div className="box-tanque">
                <img src={tanque1Img}alt="Tanque" className="icone-tanque" />
              </div>
              <img src={gaugeImg} alt="Indicador" className="icone-gauge" />
            </div>
            <div className="legendas">
              <div className="info"><span>Volume</span><strong>10.000 L</strong></div>
              <div className="info"><span>pH</span><strong>6,7</strong></div>
              <div className="info"><span>Temperatura</span><strong>4°C</strong></div>
            </div>
          </section>

          <section className="container-tanque">
            <h3 className="nome-tanque">Tanque Barriguinha Dura</h3>
            <div className="conteudo-tanque">
              <div className="box-tanque">
                <img src={tanque1Img} alt="Tanque" className="icone-tanque" />
              </div>
              <img src={gaugeImg} alt="Indicador" className="icone-gauge" />
            </div>
            <div className="legendas">
              <div className="info"><span>Volume</span><strong>15.000 L</strong></div>
              <div className="info"><span>pH</span><strong>6,3</strong></div>
              <div className="info"><span>Temperatura</span><strong>3.8°C</strong></div>
            </div>
          </section>

          <section className="container-tanque">
            <h3 className="nome-tanque">Tanque Piracanjuba</h3>
            <div className="conteudo-tanque">
              <div className="box-tanque">
                <img src={tanque2Img} alt="Tanque" className="icone-tanque" />
              </div>
              <img src={gaugeImg} alt="Indicador" className="icone-gauge" />
            </div>
            <div className="legendas">
              <div className="info"><span>Volume</span><strong>12.000 L</strong></div>
              <div className="info"><span>pH</span><strong>6,5</strong></div>
              <div className="info"><span>Temperatura</span><strong>3.9°C</strong></div>
            </div>
          </section>

          <section className="container-tanque">
            <h3 className="nome-tanque">Tanque Mimosa</h3>
            <div className="conteudo-tanque">
              <div className="box-tanque">
                <img src={tanque1Img} alt="Tanque" className="icone-tanque" />
              </div>
              <img src={gaugeImg} alt="Indicador" className="icone-gauge" />
            </div>
            <div className="legendas">
              <div className="info"><span>Volume</span><strong>16.000 L</strong></div>
              <div className="info"><span>pH</span><strong>6,7</strong></div>
              <div className="info"><span>Temperatura</span><strong>4°C</strong></div>
            </div>
          </section>
        </section>

        <section className="navbar-wrapper">
          <nav className="navbar">
            {navItems.map((item, index) => (
              <button
                key={index}
                ref={(el: HTMLButtonElement | null) => {
                  itemsRef.current[index] = el;
                }}
                className={`nav-item ${activeIndex === index ? "active" : ""}`}
                onClick={() => setActiveIndex(index)}
              >
                <img src={item.icon} alt={item.alt} />
              </button>
            ))}
            <span ref={indicatorRef} className="nav-indicator"></span>
          </nav>
        </section>
      </main>

      <footer>
        <p className="footer"></p>
      </footer>
    </>
  );
}
