import { MIN_MOLE_INDEX, MAX_MOLE_INDEX } from "./constants";

export const getRandomMoleIndex = () =>
  Math.floor(Math.random() * (MAX_MOLE_INDEX - MIN_MOLE_INDEX + 1)) +
  MIN_MOLE_INDEX;
