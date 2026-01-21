import "./perfilbutton.css";

import { Link } from "react-router-dom";

import Foward from "../../assets/icons/Forward.png";

type PerfilOptionsProps = {
  OptionImg: string;
  OptionText: string;
  OptionLink: string;
  OptionRightText?: string;
};

const PerfilButton = ({
  OptionImg,
  OptionText,
  OptionLink,
  OptionRightText,
}: PerfilOptionsProps) => {
  return (
    <div>
      <Link to={OptionLink} className="perfil-button-container">
        <div className="perfil-button-option">
          <img src={OptionImg} alt={OptionText} />
          <p>{OptionText}</p>
        </div>
        <div className="perfil-button-right-area">
          {OptionRightText && (
            <span className="perfil-button-right-text">{OptionRightText}</span>
          )}
          <i className="perfil-button-forward">
            <img src={Foward} alt="forward" />
          </i>
        </div>
      </Link>
    </div>
  );
};

export default PerfilButton;
