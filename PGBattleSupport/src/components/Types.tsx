import { Type } from "../Interfaces/Types";
import { TypeData } from "../Data/TypeData";
import TypeElement from "./TypeElement";

function Types() {
  const types: Type[] = TypeData;

  return (
    <>
      {types.map((type) => {
        return <TypeElement key={String(type.id)} type={type} />;
      })}
    </>
  );
}

export default Types;
