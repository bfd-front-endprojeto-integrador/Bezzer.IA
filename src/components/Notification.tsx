import "../global.css";

import notification from "../assets/imgs/telasemnotifisemfundo.png";

import HeaderBackLogo from "../components/Header-back&logo/HeaderBackLogo";

const Notification = () => {
  return (
    <>
      <HeaderBackLogo pageTitle="Notificações" />

      <div className="notification-background screen center">
  <div className="card center">
    <img src={notification} alt="Sem notificações" />
    <h3>Sem notificações</h3>
    <p>Você será avisado quando houver novidades.</p>
  </div>
</div>
    </>
  );
};

export default Notification;