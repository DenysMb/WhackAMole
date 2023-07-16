import { useEffect, useMemo, useState } from "react";
import Styles from "./App.module.scss";
import Home from "./pages/Home";
import AppContext from "./context/AppContext.tsx";
import LeaderboardViewer from "./components/LeaderboardViewer";
import {
  getScoresFromLocalStorage,
  setScoresOnLocalStorage,
} from "./shared/serviceStorage.ts";
import { getRandomMoleIndex } from "./shared/utils";
import {
  MOLE_DISPLAY_TIME,
  SECONDS_IN_MILLISECOND,
} from "./shared/constants.ts";

function App() {
  const [wasGameStarted, setWasGameStarted] = useState<boolean>(false);
  const [moleToShow, setMoleToShow] = useState<number | undefined>(undefined);
  const [score, setScore] = useState<number>(0);
  const [playTimeInSeconds, setPlayTimeInSeconds] = useState<number>(120);

  const wasGameFinished = useMemo(() => {
    return !playTimeInSeconds;
  }, [playTimeInSeconds]);

  const parsedTimer = useMemo(() => {
    return playTimeInSeconds
      ? new Date(playTimeInSeconds * SECONDS_IN_MILLISECOND)
          .toISOString()
          .slice(14, 19)
      : "00:00";
  }, [playTimeInSeconds]);

  useEffect(() => {
    if (wasGameFinished && score) {
      const storedScores = getScoresFromLocalStorage();

      storedScores.push(score);

      setScoresOnLocalStorage(storedScores);
    }
  }, [score, wasGameFinished]);

  useEffect(() => {
    if (wasGameStarted) {
      if (playTimeInSeconds) {
        setTimeout(() => {
          setPlayTimeInSeconds(playTimeInSeconds - 1);
        }, SECONDS_IN_MILLISECOND);
      } else {
        setWasGameStarted(false);
      }
    }
  }, [wasGameStarted, playTimeInSeconds, setWasGameStarted]);

  useEffect(() => {
    if (wasGameStarted) {
      const interval = setInterval(() => {
        setMoleToShow(getRandomMoleIndex());
      }, MOLE_DISPLAY_TIME);

      return () => {
        clearInterval(interval);
      };
    }
  }, [wasGameStarted]);

  const handleGameStart = () => {
    setScore(0);
    setPlayTimeInSeconds(120);
    setWasGameStarted(true);
  };

  return (
    <AppContext.Provider
      value={{
        wasGameFinished,
        wasGameStarted,
        moleToShow,
        setMoleToShow,
        score,
        setScore,
      }}
    >
      <div className={Styles.AppContainer}>
        <h1 className={Styles.AppTimer}>{parsedTimer || "0"}</h1>

        {!wasGameStarted && (
          <div className={Styles.AppStartGameButtonContainer}>
            {wasGameFinished && (
              <>
                <h1 className={Styles.AppGameFinishedMessage}>Finished!</h1>

                <LeaderboardViewer />
              </>
            )}

            <button
              className={Styles.AppStartGameButton}
              onClick={handleGameStart}
            >
              Start
            </button>
          </div>
        )}

        <Home />
      </div>
    </AppContext.Provider>
  );
}

export default App;
