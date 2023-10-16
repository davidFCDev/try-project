const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-2xl px-4 py-2 border border-black font-creatoLight tracking-wider transition-all hover:bg-black hover:text-white"
    >
      {text}
    </button>
  );
};

export default Button;
