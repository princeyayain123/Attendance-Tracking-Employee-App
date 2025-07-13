import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { useState } from "react";

function CalendarComponent() {
  const [selected, setSelected] = useState<Date>();

  return (
    <>
      <div className="p-2 lg:p-4 text-black shadow-xl dayPicker">
        <DayPicker mode="single" selected={selected} onSelect={setSelected}  />
      </div>
    </>
  );
}

export default CalendarComponent;
