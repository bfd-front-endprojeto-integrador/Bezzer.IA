import "../global.css";
import Logo from "../../src/assets/icons/logobezerrIA.svg";


export default function History() {
  return (
  <div className="history">
      <div className="wrapper">

        {/* HEADER */}
        <header className="top">
          <span className="back">← Histórico</span>
          <img
            src={Logo}
            alt="Bezerr IA"
            className="logo"
          />
          <button className="settings">⚙️</button>
        </header>

        {/* CARD COM GRÁFICOS */}
        <main className="card">

          <button className="btn">📅 Diariamente ▾</button>
          <div className="chart area" />

          <button className="btn">📅 Mensalmente ▾</button>
          <div className="chart line" />

          <button className="btn">📅 Anualmente ▾</button>
          <div className="chart wave">
            <div className="info">
              <span className="value">4.93%</span>
              <span className="change">▼ -2.3%</span>
            </div>
          </div>

        </main>

      </div>
    </div>

  );
}