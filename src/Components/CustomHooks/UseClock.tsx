import { useEffect, useState } from "react";

const UseClock = () => {
  const [time, setTime] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const [date, setDate] = useState({
    days: "00",
    months: "00",
    years: "00",
  });

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");

      let days = String(now.getUTCDate()).padStart(2, "0");
      let months = String(now.getUTCMonth() + 1).padStart(2, "0");
      let years = String(now.getUTCFullYear());

      setTime({ hours, minutes, seconds });

      setDate({ days, months, years });
    };

    const interval = setInterval(updateClock, 1000);
    updateClock();

    return () => clearInterval(interval);
  }, []);

  return { time, date };
};

export default UseClock;
