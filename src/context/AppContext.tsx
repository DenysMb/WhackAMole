import {createContext, Dispatch, SetStateAction} from "react";

export interface AppContextProps {
  wasGameFinished: boolean;
  wasGameStarted: boolean;
  moleToShow?: number;
  setMoleToShow?: Dispatch<SetStateAction<number | undefined>>
  score: number;
  setScore?: Dispatch<SetStateAction<number>>
}

const AppContext = createContext<AppContextProps>({
  wasGameFinished: false,
  wasGameStarted: false,
  score: 0
});

export default AppContext;