interface Props {
  text: string;
  id: string;
  functions: () => void;
}

const TimeInButton = ({ text, id , functions}: Props) => {
  return (
    <button id={id} onClick={functions} className="bg-[#646cff] text-white font-semibold py-2 px-6 rounded-lg shadow-xl hover:bg-[#747bff] active:scale-95 transition duration-300 ease-in-out">
      {text}
    </button>
  );
};

export default TimeInButton;
