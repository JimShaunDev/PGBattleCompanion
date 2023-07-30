import { useAppContext } from "../Context";
import { useState } from "react";
import { Type } from "../Interfaces/Types";
import "../App.css";
import TypeElement from "./TypeElement";

function Test() {
  const { selectedType, setSelectedType } = useAppContext();
  const ClearSelection = () => {
    setSelectedType(undefined);
  };

  const typeStyle = {
    padding: "5px",
    height: "10vh",
    backgroundColor: "black",
    borderRadius: "30px",
    margin: ".5rem",
  };

  const imgStyle = {
    height: "100%",
    borderRadius: "30px",
  };

  const fontStyle = {
    fontFamily: "Noto Sans JP",
    fontWeight: "600",
    color: "#B6EADA",
  };

  return (
    <div>
      <button type="button" className="btn" onClick={ClearSelection}>
        Clear
      </button>
      <h2 style={fontStyle}>{selectedType?.name}</h2>

      <button type="button" style={typeStyle}>
        <img
          style={imgStyle}
          src={String(selectedType?.img)}
          alt={String(selectedType?.name)}
        />
      </button>
      <div className="container">
        <div className="col">
          <h3 style={fontStyle}> Strong Against</h3>
          <div>
            {selectedType?.strongTo.map((strong) => {
              return (
                <div>
                  <p style={fontStyle}>{strong.name}</p>
                  <TypeElement key={String(strong.id)} type={strong} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="col">
          <h3 style={fontStyle}> Weak Against</h3>
          <div>
            {selectedType?.weakTo.map((strong) => {
              return (
                <div>
                  <p style={fontStyle}>{strong.name}</p>
                  <TypeElement key={String(strong.id)} type={strong} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test;
