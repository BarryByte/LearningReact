import "./ButtonCard.css";

function ButtonCard({ name, colorCode, onClick, isActive }) {
  return (
    <div>
      <button
        className="color-btn"
        style={{
          backgroundColor: `#${colorCode}`,
          boxShadow: isActive
            ? "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
            : "none"
        }}
        onClick={onClick}
      >
        {name}
      </button>
    </div>
  );
}

export default ButtonCard;
