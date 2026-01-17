import "../global.css";
import notification from "../assets/imgs/telasemnotifisemfundo.png";
import backIcon from "../assets/icons/arrowback.png";
import { Link } from "react-router-dom";

const Notification = () => {
  return (
    <>
      <div className="screen center notification-background">
        <Link to="/home" className="back-btn">
          <img src={backIcon} alt="Voltar" />
        </Link>
        <div className="card center">
          <div className="font-size:40px;">
            <img src={notification} alt="aviso sem notificações" />
          </div>
          <h3>Sem notificações</h3>
          <p>Você será avisado quando houver novidades.</p>
        </div>
      </div>
    </>
  );
};

export default Notification;
