import { useNavigate } from "react-router-dom";
import logo from "../../assets/icons/logobezerrIA.svg"
import "./splashscreen.css"
import { useEffect } from "react";

const SplashScreen = () => {
const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login"); 
    }, 3000);

    return () => clearTimeout(timer); 
  }, [navigate]);
    return(
        <>
        <div className ="splash-box">
            <div className="content">
                <img src={logo} alt="Bezerr.IA Logo" className="logo"></img>
                <h1>Bezerr.IA</h1>

                <h1>...</h1>
            </div>
        </div>
        </>
    )
}


export default SplashScreen
