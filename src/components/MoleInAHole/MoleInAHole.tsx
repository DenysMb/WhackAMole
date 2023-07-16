import {useContext} from "react";
import {useMemo} from "react";
import Styles from "./MoleInAHole.module.scss";
import AppContext from "../../context/AppContext.tsx";

const MoleInAHole = ({moleIndex}: { moleIndex: number }) => {
  const MOLE_IMG = "src/assets/WAM_Mole.png";
  const HOLE_IMG = "src/assets/WAM_Hole.png";

  const {moleToShow, setMoleToShow, score, setScore} = useContext(AppContext);

  const moleOrHole = useMemo(() => {
    return moleIndex === moleToShow ? MOLE_IMG : HOLE_IMG;
  }, [moleToShow, moleIndex]);

  const handleClick = () => {
    if (moleIndex === moleToShow) {
      setMoleToShow && setMoleToShow(undefined);
      setScore && setScore(score + 10)
    }
  };

  return (
    <div
      className={Styles.MoleInAHoleContainer}
      onClick={handleClick}
      style={{backgroundImage: `url("${moleOrHole}")`}}
      data-testid="mole-in-a-hole"
    />
  );
};

export default MoleInAHole;
