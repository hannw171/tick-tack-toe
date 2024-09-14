import Button from "./button";

const GameInfo = ({ winner, isXNext, buttonResetAction }) => {
  const handleResetClick = () => {
    buttonResetAction();
  };
  return (
    <div className="game-info">
      {winner ? (
        <h2>Winner: {winner}</h2>
      ) : (
        <h2>Next Player: {isXNext ? "X" : "O"}</h2>
      )}
      <Button onClick={handleResetClick}>Start Over</Button>
    </div>
  );
};

export default GameInfo;
