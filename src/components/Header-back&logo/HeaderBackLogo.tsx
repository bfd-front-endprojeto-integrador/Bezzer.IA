import "./HeaderBackLogo.css";
import { useNavigate, Link } from "react-router-dom";

import BackArrow from "../../assets/icons/arrowback.png";
import Logo from "../../assets/icons/logobezerrIA.svg";

type PageProps = {
  pageTitle: string;
};

const HeaderBackLogo = ({ pageTitle }: PageProps) => {
  const navigate = useNavigate();

  return (
    <div className="header-back-logo">
      <button className="header-back" onClick={() => navigate(-1)}>
        <img src={BackArrow} alt="Voltar" />
      </button>

      <p className="perfil-page-text">{pageTitle}</p>
      
    </div>
  );
};

export default HeaderBackLogo;
