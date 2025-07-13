import { useState } from "react";

const Day = () => {
  const [days] = useState(["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]);

  const today = new Date();
  const dayIndex = today.getDay();

  return (
    <div>
      <div className="flex flex-row items-center justify-center gap-3 lg:gap-10 pt-4 w-full">
        {days.map((day, index) => (
          <p key={index} className={dayIndex === index ? "text-[#646cff] text-[clamp(1rem,2vw,1.125rem)] font-medium " : "text-[clamp(1rem,2vw,1.125rem)] font-medium text-gray-600"}>
            {day}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Day;
