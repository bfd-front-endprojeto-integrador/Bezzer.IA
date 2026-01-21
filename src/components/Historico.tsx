import "../global.css";
import Logo from "../../src/assets/icons/logobezerrIA.svg";
import { useNavigate } from "react-router-dom";


export default function History() {
  const navigate = useNavigate(); // Inicializa o navegador
  return (
  <div className="history">
      <div className="wrapper">

        {/* HEADER */}
        <header className="top">
          <img
            src={Logo}
            alt="Bezerr IA"
            className="logo"
          />
         <button className="back" onClick={() => navigate("/home")}>
            Voltar
          </button>
        </header>

        {/* CARD COM GRÁFICOS */}
        <main className="card">

          <button className="btn">📅 Diariamente ▾</button>

            <div className="chart daily">

              <div className="bars">
                <span style={{ height: '40%' }} />
                <span style={{ height: '70%' }} />
                <span style={{ height: '55%' }} />
                <span style={{ height: '90%' }} />
                <span style={{ height: '65%' }} />
                <span style={{ height: '80%' }} />
                <span style={{ height: '50%' }} />
              </div>
            </div>


          <button className="btn">📅 Mensalmente ▾</button>
          <div className="chart monthly">
  <svg viewBox="0 0 100 40" preserveAspectRatio="none">
    <path
      d="
        M0 30
        L10 26
        L20 28
        L30 20
        L40 22
        L50 18
        L60 20
        L70 14
        L80 16
        L90 12
        L100 14
        L100 40
        L0 40
        Z
      "
      className="area"
    />

    
    <polyline
      points="0,30 10,26 20,28 30,20 40,22 50,18 60,20 70,14 80,16 90,12 100,14"
      className="line"
    />
  </svg>
          </div>

          <button className="btn">📅 Anualmente ▾</button>
          <div className="chart wave">
            <div className="chart yearly">
              <svg viewBox="0 0 100 40" preserveAspectRatio="none">
                <path
                  d="
                    M0 28
                    L12 26
                    L24 22
                    L36 24
                    L48 20
                    L60 18
                    L72 14
                    L84 16
                    L100 12
                    L100 40
                    L0 40
                    Z
                  "
                  className="area"
                />

    
    <polyline
      points="0,28 12,26 24,22 36,24 48,20 60,18 72,14 84,16 100,12"
      className="line"
    />
  </svg>

  <div className="info">
    <span className="value">4.93%</span>
    <span className="change">▼ -2.3%</span>
  </div>
</div>
          </div>

        </main>

      </div>
    </div>

  );
}