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
import AvatarExample from "../../assets/imgs/User.png";

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
          <PerfilButton OptionImg={User} OptionText="Editar Perfil" OptionLink="/perfil/editar" />
          <PerfilButton OptionImg={Notification} OptionText="Notificações" OptionLink="/notificacoes" />
          <PerfilButton OptionImg={Shield} OptionText="Segurança" OptionLink="/perfil/seguranca" />
          <PerfilButton OptionImg={Language} OptionText="Idiomas" OptionLink="/perfil/idiomas" OptionRightText="English (US)" />
          <PerfilButton OptionImg={Help} OptionText="Termos e Condições" OptionLink="/perfil/termos" />
          <PerfilButton OptionImg={Help} OptionText="Ajuda" OptionLink="/perfil/ajuda" />
          <PerfilButton OptionImg={WebAccessibility} OptionText="Acessibilidade" OptionLink="/perfil/acessibilidade" />
        </div>

        <div className="perfil-exit">
          <PerfilButton OptionImg={Shutdown} OptionText="Sair" OptionLink="/logout" />
        </div>
      </div>
    </>
  );
};

export default Perfil;
