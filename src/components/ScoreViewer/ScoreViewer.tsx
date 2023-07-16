import {useContext} from "react";
import Styles from "./ScoreViewer.module.scss";
import AppContext from "../../context/AppContext.tsx";

const ScoreViewer = () => {
  const {score} = useContext(AppContext);

  return (
    <div className={Styles.ScoreViewerContainer}>
      <h2 className={Styles.ScoreViewerTitle}>Score</h2>
      <h1 className={Styles.ScoreViewerScore}>{score}</h1>
    </div>
  );
};

export default ScoreViewer;
