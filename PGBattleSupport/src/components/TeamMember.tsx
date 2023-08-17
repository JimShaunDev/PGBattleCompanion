import { useEffect, useState } from "react";
import { Pokemon } from "../Interfaces/Pokemon";
import { Type } from "../Interfaces/Types";
import { TypeData } from "../Data/TypeData";

function TeamMember({ member }: { member: Pokemon }) {
  const [updatedMember, setUpdatedMember] = useState<Pokemon>(member);
  const [loading, setLoading] = useState(true);
  const heading = {
    marginBottom: "1rem",
  };

  const imgStyle = {
    height: "3em",
    padding: "0.2rem",
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
      const foundTypes = [] as Type[];

      types.forEach((t: any) => {
        const appType = TypeData.find((item) => {
          return item.name.toLowerCase() == t.type.name;
        });

        if (appType) {
          foundTypes.push(appType);
          updatedMember.types?.push(appType);
        }
      });

      //update component state
      const replace = updatedMember;
      replace.types = foundTypes;

      setUpdatedMember(replace);
      setLoading(false);
    };

    fetchData();
  });

  return (
    <div>
      <h3 style={heading}>Configure Team Member</h3>
      <h1>{updatedMember.name}</h1>
      {!loading &&
        updatedMember.types?.map((type) => {
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
