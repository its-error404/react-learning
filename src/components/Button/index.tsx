import React from "react";
import "./button.scss";

type Props = {
  children: React.ReactNode;
};

const ButtonComponent = (props: Props) => {
  const { children } = props;

  return (
    <div>
      <button className="button">{children}</button>
    </div>
  );
};

export default ButtonComponent;
