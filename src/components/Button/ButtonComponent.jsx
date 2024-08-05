import React from "react";

import "./_button.scss";

const ButtonComponent = ({ buttonLabel, className }) => {
  return <button className={className}>{buttonLabel}</button>;
};

export default ButtonComponent;
