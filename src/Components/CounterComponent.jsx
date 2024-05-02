import React from "react";

const CounterComponent = ({ value, name }) => {
  return (
    <div>
      <h1 id="count">{value}</h1>
      <p>{name}</p>
    </div>
  );
};

export default CounterComponent;
