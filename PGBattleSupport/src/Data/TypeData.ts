import { Type } from "../Interfaces/Types";

const Normal: Type = {
  id: 1,
  name: "Normal",
  weakTo: [],
  strongTo: [],
  img: "/src/assets/TypeLogos/normal.jpg",
};

const Bug: Type = {
  id: 2,
  name: "Bug",
  weakTo: [],
  strongTo: [],
  img: "/src/assets/TypeLogos/bug.jpg",
};

const Dark: Type = {
  id: 3,
  name: "Dark",
  weakTo: [],
  strongTo: [],
  img: "/src/assets/TypeLogos/dark.jpg",
};

const Dragon: Type = {
  id: 4,
  name: "Dragon",
  weakTo: [],
  strongTo: [],
  img: "/src/assets/TypeLogos/dragon.jpg",
};

const Electric: Type = {
  id: 5,
  name: "Electric",
  weakTo: [],
  strongTo: [],
  img: "/src/assets/TypeLogos/electric.jpg",
};

const Fairy: Type = {
  id: 6,
  name: "Fairy",
  weakTo: [],
  strongTo: [],
  img: "/src/assets/TypeLogos/fairy.jpg",
};

const Fighting: Type = {
  id: 7,
  name: "Fighting",
  weakTo: [],
  strongTo: [],
  img: "/src/assets/TypeLogos/fighting.jpg",
};

const Fire: Type = {
  id: 8,
  name: "Fire",
  weakTo: [],
  strongTo: [],
  img: "/src/assets/TypeLogos/fire.jpg",
};

const Flying: Type = {
  id: 9,
  name: "Flying",
  weakTo: [],
  strongTo: [],
  img: "/src/assets/TypeLogos/flying.jpg",
};

const Ghost: Type = {
  id: 10,
  name: "Ghost",
  weakTo: [],
  strongTo: [],
  img: "/src/assets/TypeLogos/ghost.jpg",
};

const Grass: Type = {
  id: 11,
  name: "Grass",
  weakTo: [],
  strongTo: [],
  img: "/src/assets/TypeLogos/grass.jpg",
};

const Ground: Type = {
  id: 12,
  name: "Ground",
  weakTo: [],
  strongTo: [],
  img: "/src/assets/TypeLogos/ground.jpg",
};

const Ice: Type = {
  id: 13,
  name: "Ice",
  weakTo: [],
  strongTo: [],
  img: "/src/assets/TypeLogos/ice.jpg",
};

const Poison: Type = {
  id: 14,
  name: "Poison",
  weakTo: [],
  strongTo: [],
  img: "/src/assets/TypeLogos/poison.jpg",
};

const Psychic: Type = {
  id: 15,
  name: "Psychic",
  weakTo: [],
  strongTo: [],
  img: "/src/assets/TypeLogos/psychic.jpg",
};

const Rock: Type = {
  id: 16,
  name: "Rock",
  weakTo: [],
  strongTo: [],
  img: "/src/assets/TypeLogos/rock.jpg",
};

const Steel: Type = {
  id: 17,
  name: "Steel",
  weakTo: [],
  strongTo: [],
  img: "/src/assets/TypeLogos/steel.jpg",
};

const Water: Type = {
  id: 18,
  name: "Water",
  weakTo: [],
  strongTo: [],
  img: "/src/assets/TypeLogos/water.jpg",
};

Bug.weakTo = [Flying, Rock, Fire];
Dark.weakTo = [Fighting, Bug, Fairy];
Dragon.weakTo = [Ice, Dragon, Fairy];
Electric.weakTo = [Ground];
Fairy.weakTo = [Poison, Steel];
Fighting.weakTo = [Flying, Psychic, Fairy];
Fire.weakTo = [Water, Ground, Rock];
Flying.weakTo = [Electric, Ground, Ice];
Ghost.weakTo = [Ghost, Dark];
Grass.weakTo = [Fire, Ice, Poison, Flying, Bug];
Ground.weakTo = [Water, Grass, Ice];
Ice.weakTo = [Fire, Fighting, Rock, Steel];
Normal.weakTo = [Fighting];
Poison.weakTo = [Ground, Psychic];
Psychic.weakTo = [Dark, Bug, Ghost];
Rock.weakTo = [Water, Grass, Fighting, Ground, Steel];
Steel.weakTo = [Fire, Fighting, Ground];
Water.weakTo = [Electric, Grass];

Bug.strongTo = [Grass, Psychic, Dark];
Dark.strongTo = [Ghost, Psychic];
Dragon.strongTo = [Dragon];
Electric.strongTo = [Flying, Water];
Fairy.strongTo = [Fighting, Dragon, Dark];
Fighting.strongTo = [Normal, Rock, Steel, Ice, Dark];
Fire.strongTo = [Bug, Steel, Grass, Ice];
Flying.strongTo = [Fighting, Bug, Grass];
Ghost.strongTo = [Ghost, Psychic];
Grass.strongTo = [Ground, Water, Rock];
Ground.strongTo = [Poison, Rock, Steel, Fire, Electric];
Ice.strongTo = [Flying, Ground, Grass, Dragon];
Normal.strongTo = [];
Poison.strongTo = [Grass, Fairy];
Psychic.strongTo = [Fighting, Poison];
Rock.strongTo = [Flying, Bug, Fire, Ice];
Steel.strongTo = [Rock, Ice, Fairy];
Water.strongTo = [Ground, Rock, Fire];

export const TypeData: Type[] = [
  Bug,
  Dark,
  Dragon,
  Electric,
  Fairy,
  Fighting,
  Fire,
  Flying,
  Ghost,
  Grass,
  Ground,
  Ice,
  Normal,
  Poison,
  Psychic,
  Rock,
  Steel,
  Water,
];
