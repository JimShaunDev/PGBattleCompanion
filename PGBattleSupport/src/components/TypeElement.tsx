import { useAppContext } from "../Context";
import { Type } from "../Interfaces/Types";
import { useState } from "react";
type type = { type: Type };

function TypeElement({ type }: type) {
  const { setSelectedType } = useAppContext();

  const typeStyle = {
    padding: "5px",
    height: "10vh",
    backgroundColor: "black",
    borderRadius: "15px",
    margin: ".5rem",
  };

  const imgStyle = {
    height: "100%",
    borderRadius: "15px",
  };

  const SelectType = () => {
    console.log("Selected!");
    console.log(type.name);
    setSelectedType(type);
  };

  return (
    <>
      <button type="button" style={typeStyle} onClick={SelectType}>
        <img style={imgStyle} src={String(type.img)} alt={String(type.name)} />
      </button>
    </>
  );
}

export default TypeElement;
