import React from "react";

import "./_button.scss";

const ButtonComponent = ({ buttonLabel, className, onClick, value }) => {
  return (
    <button className={className} onClick={onClick} value={value}>
      {buttonLabel}
    </button>
  );
};

export default ButtonComponent;
