import React from "react";
import { Pokemon } from "../Interfaces/Pokemon";

function TeamMember({ member }: { member: Pokemon }) {
  return <h1>{member.name}</h1>;
}

export default TeamMember;
