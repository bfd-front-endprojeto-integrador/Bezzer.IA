import logo from "../../assets/icons/logobezerrIA.svg"
import "./splashscreen.css"

const SplashScreen = () => {
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
