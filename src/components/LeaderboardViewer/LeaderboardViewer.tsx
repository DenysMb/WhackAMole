import Styles from "./LeaderboardViewer.module.scss";
import { useContext, useMemo } from "react";
import AppContext from "../../context/AppContext.tsx";
import { getScoresFromLocalStorage } from "../../shared/serviceStorage.ts";

interface Score {
  name: string;
  score: number;
}

export const MOCK_SCORES: Score[] = [
  { name: "Neil Young", score: 307 },
  { name: "Johnny Cash", score: 352 },
  { name: "Aretha Franklin", score: 245 },
  { name: "Michael Jackson", score: 411 },
  { name: "Whitney Houston", score: 449 },
  { name: "Jimi Hendrix", score: 225 },
  { name: "Ben E. King", score: 300 },
  { name: "Eric Clapton", score: 354 },
  { name: "Bill Withers", score: 418 },
  { name: "Dolly Parton", score: 241 },
];

const LeaderboardViewer = () => {
  const { wasGameFinished } = useContext(AppContext);

  const scores = useMemo(() => {
    let playerScores: Score[] = [];

    if (wasGameFinished) {
      playerScores = getScoresFromLocalStorage().map((score) => ({
        name: "Player",
        score,
      }));
    }

    return [...MOCK_SCORES, ...playerScores]
      .sort((a, b) => (a.score < b.score ? 1 : -1))
      .slice(0, 10);
  }, [wasGameFinished]);

  return (
    <div className={Styles.LeaderboardViewerContainer}>
      {scores.map((record, index) => (
        <div
          key={`${index}-${record.name}`}
          className={Styles.LeaderboardViewerRow}
        >
          <div className={Styles.LeaderboardViewerRowName}>{record.name}</div>
          <div className={Styles.LeaderboardViewerRowScore}>{record.score}</div>
        </div>
      ))}
    </div>
  );
};

export default LeaderboardViewer;
