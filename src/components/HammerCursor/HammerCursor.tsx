import Styles from "./HammerCursor.module.scss";

export interface CursorPosition {
  x: number;
  y: number;
}

const HammerCursor = ({
  hammerPosition,
  hammerRotation,
}: {
  hammerPosition: CursorPosition;
  hammerRotation: number;
}) => {
  return (
    <div
      data-testid="hammer-cursor"
      className={Styles.HammerCursorContainer}
      style={{
        width: 200,
        height: 200,
        backgroundImage: `url("src/assets/WAM_Hammer.png")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        position: "absolute",
        left: `${hammerPosition.x}px`,
        top: `${hammerPosition.y}px`,
        transform: `rotate(${hammerRotation}deg)`,
        pointerEvents: "none",
      }}
    />
  );
};

export default HammerCursor;
