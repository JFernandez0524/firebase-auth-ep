export function Button({ color, text, handleClick }) {
  return (
    <button
      className={`btn btn-${color}`}
      onClick={(e) => handleClick(e, text)}>
      {text}
    </button>
  );
}
