import Input from "./Input/Input";
import Logo from "../../src/assets/icons/logobezerrIA.svg";
import Button from "./Button/Button";
import { useNavigate } from "react-router-dom";

function Cadastro() {
  const navigate = useNavigate();
  return (
    <>
      <div className="tela-container">
        <div className="tela-box">
          <div style={{ marginBottom: "10px" }}>
            <img src={Logo} alt="Logo" style={{ width: "120px" }} />
          </div>
          <div className="formulario-bloco">
            <label className="label-texto">Nome</label>
            <Input />
            <div style={{ height: "15px" }}></div>
            <label className="label-texto">Sobrenome</label>
            <Input />
            <div style={{ height: "15px" }}></div>
            <label className="label-texto">E-mail</label>
            <Input />
            <div style={{ height: "15px" }}></div>
            <label className="label-texto">Senha</label>
            <Input />
            <div style={{ height: "15px" }}></div>
            <label className="label-texto">Confirmar Senha</label>
            <Input />
            <div style={{ height: "15px" }}></div>
            <Button onClick={() => navigate("/home")}>Cadastrar</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cadastro;
