import {useContext, useState} from "react";
import Styles from "./Home.module.scss";
import HammerCursor, {
  CursorPosition,
} from "../../components/HammerCursor/HammerCursor";
import MoleInAHole from "../../components/MoleInAHole";
import ScoreViewer from "../../components/ScoreViewer";
import AppContext from "../../context/AppContext.tsx";

const Home = () => {
  const {wasGameStarted} = useContext(AppContext)

  const [hammerPosition, setHammerPosition] = useState<CursorPosition>({
    x: window.innerWidth / 2.25,
    y: window.innerHeight / 2.5,
  });

  const [hammerRotation, setHammerRotation] = useState<number>(45);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>): void => {
    setHammerPosition({x: event.clientX - 50, y: event.clientY - 90});
  };

  const handleMouseDown = (): void => {
    setHammerRotation(0);
  };

  const handleMouseUp = (): void => {
    setHammerRotation(45);
  };

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      className={Styles.HomeContainer}
    >
      <ScoreViewer/>

      {wasGameStarted && <HammerCursor
        hammerPosition={hammerPosition}
        hammerRotation={hammerRotation}
      />}

      <div className={Styles.HomeRow}>
        {[0, 0, 0, 0].map((_, index) => (
          <MoleInAHole key={`MoleInAHole-1-${index}`} moleIndex={index}/>
        ))}
      </div>

      <div className={Styles.HomeRow}>
        {[0, 0, 0, 0].map((_, index) => (
          <MoleInAHole key={`MoleInAHole-2-${index}`} moleIndex={4 + index}/>
        ))}
      </div>
      
      <div className={Styles.HomeRow}>
        {[0, 0, 0, 0].map((_, index) => (
          <MoleInAHole key={`MoleInAHole-3-${index}`} moleIndex={8 + index}/>
          ))}
      </div>
    </div>
  );
};

export default Home;
