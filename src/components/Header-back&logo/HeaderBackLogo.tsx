import "./HeaderBackLogo.css";

import { useNavigate, Link } from "react-router";

import BackArrow from "../../assets/icons/arrowback.png";
import Logo from "../../assets/icons/logobezerrIA.svg";

type pageProps = {
  pageTitle : string;
}

const HeaderBackLogo = ({pageTitle} : pageProps) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="header">
        <div className="back">
          <img
            src={BackArrow}
            alt="voltar"
            onClick={() => navigate(-1)}
            className="back-arrow"
          />
          <p className="perfil-page-text">{pageTitle}</p>
        </div>
        <Link to="/home" className="logo">
          <img src={Logo} alt="Logo" />
        </Link>

        <div className="back-2">
          <img
            src={BackArrow}
            alt="voltar"
            className="back-arrow"
          />
          <p className="perfil-page-text">Perfil</p>
        </div>
      </div>
    </>
  );
};

export default HeaderBackLogo;
