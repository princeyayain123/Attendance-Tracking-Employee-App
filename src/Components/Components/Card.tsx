interface Props {
  time: string;
  text: string;
}

const Card = ({ time, text }: Props) => {
  return (
    <div>
      <div className="card flex flex-col items-center block max-w-sm rounded-xl shadow-lg bg-white/40 backdrop-blur-md border border-gray-200 p-4 lg:p-6 md:p-8 lg:p-12 ">
        <span className="text-[clamp(2rem,5vw,6rem)]">{time}</span>
        <span className="text-sm font-medium text-gray-400">{text}</span>
      </div>
    </div>
  );
};

export default Card;
