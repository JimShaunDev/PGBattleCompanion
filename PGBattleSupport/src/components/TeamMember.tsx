import { useEffect, useState } from "react";
import { Pokemon } from "../Interfaces/Pokemon";
import { Type } from "../Interfaces/Types";
import { TypeData } from "../Data/TypeData";

function TeamMember({ member }: { member: Pokemon }) {
  const [updatedMember, setUpdatedMember] = useState<Pokemon>(member);
  const foundTypes = [] as Type[];
  const heading = {
    marginBottom: "1rem",
  };

  const imgStyle = {
    height: "5%",
    borderRadius: "30px",
  };

  useEffect(() => {
    const fetchData = async () => {
      //Get pokemon data from API
      const data = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${member.id}`
      ).then((response) => response.json());

      //extract results
      const { types, moves } = data;

      //Resolve generic json data as app specific element types

      types.forEach((t: any) => {
        const appType = TypeData.find((item) => {
          return item.name.toLowerCase() == t.type.name;
        });

        if (appType) {
          foundTypes.push(appType);
        }
      });

      //update component state
      const replace = updatedMember;
      replace.types = foundTypes;

      setUpdatedMember(replace);
    };

    fetchData();
  });

  return (
    <div>
      <h3 style={heading}>Configure Team Member</h3>
      <h1>{updatedMember.name}</h1>
      {foundTypes.length > 0 &&
        foundTypes.map((type) => {
          return (
            <img
              style={imgStyle}
              src={String(type.img)}
              alt={String(type.name)}
            />
          );
        })}
    </div>
  );
}

export default TeamMember;
