import "../global.css";
import backIcon from "../assets/icons/arrowback.png";
import { Link } from "react-router";

function TelaDesenvolvimento() {
  return (
    <>
      <div className="container-dev">
        <Link to="/home" className="back-btn">
          <img src={backIcon} alt="Voltar" />
        </Link>
        <div className="content-dev">
          <h1>🚧 Tela em Desenvolvimento</h1>
          <p>Esta tela ainda está sendo construída. Volte mais tarde!</p>
          <Link to="/home" className="btn btn-dev">
            Voltar para Home
          </Link>
        </div>
      </div>
    </>
  );
}

export default TelaDesenvolvimento;
