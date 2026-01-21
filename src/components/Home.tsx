import { useState } from "react";
import "../global.css";

import logoSvg from "../assets/icons/logobezerrIA.svg";

import gaugeImg from "../assets/imgs/gauge.jpg";

import gaugeAlerta from "../assets/imgs/gauge-amarelo.png";
import gaugeCritico from "../assets/imgs/gauge-vermelho.png";

import tanque1Img from "../assets/imgs/tanque.png";
import tanque2Img from "../assets/imgs/tanque2.png";
import tanque3Img from "../assets/imgs/tanque3.png";

import { useNavigate } from "react-router-dom";

export default function Home() {
  const [todosOsTanques] = useState([
    { id: 1, nome: "Tanque Barriguinha Mole", vol: "10.000 L", ph: 6.7, temp: 4, img: tanque1Img, status: "critico", data: "2025-01-15" },
    { id: 2, nome: "Tanque Barriguinha Dura", vol: "15.000 L", ph: 6.3, temp: 3.8, img: tanque1Img, status: "normal", data: "2025-01-10" },
    { id: 3, nome: "Tanque Piracanjuba", vol: "12.000 L", ph: 6.5, temp: 3.9, img: tanque2Img, status: "normal", data: "2025-01-20" },
    { id: 4, nome: "Tanque Mimosa", vol: "11.000 L", ph: 6.0, temp: 3.2, img: tanque3Img, status: "alerta", data: "2025-01-20" },
  ]);

  const [filtroAtivo, setFiltroAtivo] = useState("Críticos");

  const tanquesFiltrados = [...todosOsTanques]
    .sort((a, b) => {
      if (filtroAtivo === "A – Z") return a.nome.localeCompare(b.nome);
      if (filtroAtivo === "Mais recentes") return +new Date(b.data) - +new Date(a.data);
      if (filtroAtivo === "Mais antigos") return +new Date(a.data) - +new Date(b.data);
      return 0;
    })
    .filter(tanque =>
      filtroAtivo === "Críticos"
        ? tanque.status === "critico" || tanque.status === "alerta"
        : true
    );

    const navigate = useNavigate();


  return (
    <>
      <header className="header">
        <div className="header-content">
          <img src={logoSvg} alt="Logo" className="logo" />
          <div className="titulo1">
            <span>Olá,</span> <strong>pecuarista!</strong>
          </div>
        </div>
      </header>

      <section className="filtros">
        {["Críticos", "Mais recentes", "Mais antigos", "A – Z"].map(label => (
          <button
            key={label}
            className={`filtro ${filtroAtivo === label ? "ativo" : ""}`}
            onClick={() => setFiltroAtivo(label)}
          >
            {label}
          </button>
        ))}
      </section>

      <section className="area-tanques">
        <h2 className="titulo">Selecione seus tanques</h2>


        {tanquesFiltrados.map(tanque => {
          let imagemGauge = gaugeImg;
          if (tanque.status === "critico") imagemGauge = gaugeCritico;
          if (tanque.status === "alerta") imagemGauge = gaugeAlerta;

          return (
            <section
              key={tanque.id}
              className={`container-tanque ${tanque.status}`}
              onClick={() => navigate(`/tanque/${tanque.id}`)}
            >
              <h3 className="nome-tanque">{tanque.nome}</h3>

              <div className="conteudo-tanque">
                <div className="box-tanque">
                  <img src={tanque.img} alt="Tanque" className="icone-tanque" />
                </div>
                <img src={imagemGauge} alt="Indicador" className="icone-gauge" />
              </div>

              <div className="legendas">
                <div className="info"><span>Volume</span><strong>{tanque.vol}</strong></div>
                <div className="info"><span>pH</span><strong>{tanque.ph}</strong></div>
                <div className="info"><span>Temperatura</span><strong>{tanque.temp}°C</strong></div>
              </div>
            </section>
          );
        })}

      </section>
    </>
  );
}
