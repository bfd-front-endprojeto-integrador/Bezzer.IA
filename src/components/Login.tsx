import "../global.css"
import Input from "./Input/Input"
import Logo from "../../src/assets/icons/logobezerrIA.svg"
import Button from "../components/Button/Button"

function TelaLogin() { 
    return (
    <div className="tela-container">
        <div className="tela-box">
            <div className="logo">
                <img src={Logo} alt="Logo" style={{ width: '120px' }} />
                <h1 style={{ color: '#458452', margin: '10px 0 30px 0' }}>Bezerr.IA</h1>
            </div>
            <div className="formulario-bloco">
                <label className="label-texto">Login</label>
                <Input />
                <div style={{ height: '15px' }}></div> 
                <label className="label-texto">Senha</label>
                <Input/>
                <a style={{ 
                    color: '#458452', 
                    textAlign: 'center', 
                    fontSize: '14px', 
                    margin: '20px 0',  
                }}>
                    Esqueceu sua senha?
                </a>

                <Button >Entrar</Button>
            </div>
        </div>
    </div>
    )
}

export default TelaLogin;