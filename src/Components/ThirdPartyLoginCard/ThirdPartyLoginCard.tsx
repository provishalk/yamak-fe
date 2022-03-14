import React from "react";
import "./ThirdPartyLoginCard.scss";

type CardProps = {
  label: string;
  Icon: Function;
  iconStyle?: string;
};

const ThirdPartyLoginCard = ({ label, Icon, iconStyle }: CardProps) => {
  return (
    <div className="third-party-login-card">
      <span className={`third-party-login-card__icon ${iconStyle}`}>
        <Icon />
      </span>
      <span className="third-party-login-card__text">{label}</span>
    </div>
  );
};

export default ThirdPartyLoginCard;
