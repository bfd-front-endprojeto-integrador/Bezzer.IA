import { useParams, useNavigate } from "react-router-dom";

import "../global.css";

import tanque1Img from "../assets/imgs/tanque.png";
import tanque2Img from "../assets/imgs/tanque2.png";
import tanque3Img from "../assets/imgs/tanque3.png";

import HeaderBackLogo from "../components/Header-back&logo/HeaderBackLogo";

export default function Tanque() {
  const { id } = useParams();
  const navigate = useNavigate();

  const tanques = [
    { id: 1, nome: "Tanque Barriguinha Mole", vol: "10.000 L", ph: 6.7, temp: 4, img: tanque1Img, status: "critico" },
    { id: 2, nome: "Tanque Barriguinha Dura", vol: "15.000 L", ph: 6.3, temp: 3.8, img: tanque1Img, status: "normal" },
    { id: 3, nome: "Tanque Piracanjuba", vol: "12.000 L", ph: 6.5, temp: 3.9, img: tanque2Img, status: "normal" },
    { id: 4, nome: "Tanque Mimosa", vol: "11.000 L", ph: 6.0, temp: 3.2, img: tanque3Img, status: "alerta" },
  ];

  const tanque = tanques.find(t => t.id === Number(id));

  if (!tanque) return <p>Tanque não encontrado</p>;

  return (
    <>
    <HeaderBackLogo pageTitle={tanque.nome} />
      <div className="tela-tanque">
        <section className={`painel-tanque ${tanque.status}`}>
        <div className="hero-tanque">
            <img src={tanque.img} alt="Tanque" />
            <div className="overlay-info">
                <span className="label">Ocupação:</span>
                <strong>100%</strong>
            </div> 
            </div>

            <div className="dados-tanque">
            <div className="dado">
                <span>pH</span>
                <strong>{tanque.ph}</strong>
            </div>

            <div className="dado">
                <span>Volume</span>
                <strong>{tanque.vol}</strong>
            </div>

            <div className="dado">
                <span>Temperatura</span>
                <strong>{tanque.temp}°C</strong>
            </div>
            </div>

            <div className="status-faixa">
            {tanque.status === "critico" && "Situação crítica"}
            {tanque.status === "alerta" && "Em alerta"}
            {tanque.status === "normal" && "Operando normalmente"}
            </div>

            <button className="btn-historico" onClick={() => navigate("/Historico")}>Ver histórico</button>
            
        </section>
    </div>
    </>
  );
}
