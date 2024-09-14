const Square = ({ value, onClick, index }) => {
  return (
    <div className="square-box" onClick={onClick}>
      <span
        style={{
          position: "absolute",
          color: "red",
          fontSize: "15px",
          top: "0",
          left: "4px",
        }}
      >
        {index}
      </span>
      {value}
    </div>
  );
};

export default Square;
