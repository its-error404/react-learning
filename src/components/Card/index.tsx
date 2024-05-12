import React from "react";

type Props = {
  name: string;
  designation: string;
  email: string;
};

const Card = (props: Props) => {
  const { name, designation, email } = props;

  return (
    <div>
      <p>{name}</p>
      <p>{designation}</p>
      <p>
        <a href={email}>Email {name} </a>
      </p>
    </div>
  );
};

export default Card;
