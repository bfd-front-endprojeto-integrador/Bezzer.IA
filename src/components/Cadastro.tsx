import Input from "./Input/Input";
import Logo from "../../src/assets/icons/logobezerrIA.svg";
import Button from "./Button/Button";
import { useNavigate } from "react-router-dom";
import { useState, type ChangeEvent } from "react";

interface CadastroForm {
  nome: string;
  sobrenome: string;
  email: string;
  senha: string;
  confirmarSenha: string;
}

function Cadastro() {
  const navigate = useNavigate();

   const [form, setForm] = useState<CadastroForm>({
    nome: "",
    sobrenome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
  });

   function inputChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setForm((estadoAnterior) => ({
      ...estadoAnterior,
      [name]: value,
    }));
  }

  function createUser() {
    if (
      !form.nome ||
      !form.sobrenome ||
      !form.email ||
      !form.senha
    ) {
      alert("Preencha todos os campos");
      return;
    }

    if (form.senha !== form.confirmarSenha) {
      alert("As senhas não conferem");
      return;
    }

    localStorage.setItem(
      "usuarioMock",
      JSON.stringify({
        nome: form.nome,
        sobrenome: form.sobrenome,
        email: form.email,
        senha: form.senha,
      })
    );

    alert("Cadastro realizado com sucesso!");
    navigate("/");
  }

  return (
    <>
      <div className="tela-container">
        <div className="tela-box">
          <div style={{ marginBottom: "10px" }}>
            <img src={Logo} alt="Logo" style={{ width: "120px" }} />
          </div>
          <div className="formulario-bloco">
            <label className="label-texto">Nome</label>
           <Input
            name="nome"
            value={form.nome}
            onChange={inputChange}
          />
            <div style={{ height: "15px" }}></div>
            <label className="label-texto">Sobrenome</label>
             <Input
            name="sobrenome"
            value={form.sobrenome}
            onChange={inputChange}
          />
            <div style={{ height: "15px" }}></div>
            <label className="label-texto">E-mail</label>
            <Input
            name="email"
            value={form.email}
            onChange={inputChange}
          />
            <div style={{ height: "15px" }}></div>
            <label className="label-texto">Senha</label>
            <Input
            type="password"
            name="senha"
            value={form.senha}
            onChange={inputChange}
          />
            <div style={{ height: "15px" }}></div>
            <label className="label-texto">Confirmar Senha</label>
           <Input
            type="password"
            name="confirmarSenha"
            value={form.confirmarSenha}
            onChange={inputChange}
          />

            <div style={{ height: "15px" }}></div>
            <Button onClick={createUser}>Cadastrar</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cadastro;
