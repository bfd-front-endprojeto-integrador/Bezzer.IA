import "./perfil.css";

import HeaderBackLogo from "../../components/Header-back&logo/HeaderBackLogo";
import PerfilButton from "../../components/PerfilButton/PerfilButton";

import Help from "../../assets/icons/Help.png";
import Language from "../../assets/icons/Language.png";
import Notification from "../../assets/icons/Notification.png";
import Shield from "../../assets/icons/Shield.png";
import Shutdown from "../../assets/icons/Shutdown.png";
import User from "../../assets/icons/User.png";
import WebAccessibility from "../../assets/icons/WebAccessibility.png";
import AvatarExample from "../../assets/imgs/UserPic.png";

const Perfil = () => {
  return (
    <>
      <HeaderBackLogo pageTitle="Perfil" />
      <div className="perfil-card">
        <div className="perfil-top">
          <div className="perfil-avatar">
            <img src={AvatarExample} alt="Avatar" className="perfil-avatar-img" />
          </div>
        </div>

        <div className="perfil-options">
          <PerfilButton OptionImg={User} OptionText="Editar Perfil" OptionLink="/telaDesen" />
          <PerfilButton OptionImg={Notification} OptionText="Notificações" OptionLink="/notificacoes" />
          <PerfilButton OptionImg={Shield} OptionText="Segurança" OptionLink="/telaDesen" />
          <PerfilButton OptionImg={Language} OptionText="Idiomas" OptionLink="/telaDesen" OptionRightText="English (US)" />
          <PerfilButton OptionImg={Help} OptionText="Termos e Condições" OptionLink="/telaDesen" />
          <PerfilButton OptionImg={Help} OptionText="Ajuda" OptionLink="/telaDesen" />
          <PerfilButton OptionImg={WebAccessibility} OptionText="Acessibilidade" OptionLink="/telaDesen" />
        </div>

        <div className="perfil-options">
          <PerfilButton OptionImg={Shutdown} OptionText="Sair" OptionLink="/" />
        </div>
      </div>
    </>
  );
};

export default Perfil;
