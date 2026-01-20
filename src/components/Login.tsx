import "../global.css";
import Input from "./Input/Input";
import Logo from "../../src/assets/icons/logobezerrIA.svg";
import Button from "../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState, type ChangeEvent } from "react";

function TelaLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");

  function loginUser() {
  const usuarioSalvo = localStorage.getItem("usuarioMock");

  if (!usuarioSalvo) {
    alert("Nenhum usuário cadastrado");
    return;
  }

  const usuario = JSON.parse(usuarioSalvo);

  if (email === usuario.email && senha === usuario.senha) {
    localStorage.setItem("logado", "true");

    localStorage.setItem(
      "usuarioLogado",
      JSON.stringify({
        nome: usuario.nome,
        sobrenome: usuario.sobrenome,
        email: usuario.email,
      })
    );

    navigate("/home");
  } else {
    alert("E-mail ou senha inválidos");
  }
}

  

  return (
    <div className="tela-container">
      <div className="tela-box">
        <div className="logo-img">
          <img src={Logo} alt="Logo" style={{ width: "120px" }} />
          <h1 style={{ color: "#458452", margin: "10px 0 10px 0" }}>
            Bezerr.IA
          </h1>
        </div>
        <div className="formulario-bloco">
          <label className="label-texto">Login</label>
           <Input
            name="email"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            } />
          <div style={{ height: "15px" }}></div>
          <label className="label-texto">Senha</label>
          <Input
            type="password"
            name="senha"
            value={senha}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSenha(e.target.value)
            }
          />
          <a
            style={{
              color: "#458452",
              textAlign: "center",
              fontSize: "14px",
              margin: "20px 0",
            }}
          >
            Esqueceu sua senha?
          </a>
          <p style={{ textAlign: "center", fontSize: "14px", marginBottom: "10px" }}>
            Não tem uma conta?{" "}
            <Link
              to="/cadastro"
              style={{
                color: "#458452",
                textDecoration: "none",
              }}
            >
              Cadastre-se
            </Link>
          </p>
          <Button onClick={loginUser}>Entrar</Button>
        </div>
      </div>
    </div>
  );
}

export default TelaLogin;