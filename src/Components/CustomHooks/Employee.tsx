import { useEffect, useRef, useState } from "react";

interface EmployeeProps {
  name: string;
  date: string;
  time: string;
  status: string;
}

const Employee = (date: { days: string; months: string }, time: { hours: string; minutes: string }) => {
  const employeeRef = useRef("");

  const [storeEmployee, setStoreEmployee] = useState<EmployeeProps[]>([]);
  const [employeeStatus, setEmployeeStatus] = useState<EmployeeProps>({
    name: "",
    date: "",
    time: "",
    status: "",
  });

  function setEmployee(condition: boolean) {
    let name = "NAME";
    let dates = `${date.days}/${date.months}`;
    let times = `${time.hours}/${time.minutes}`;
    let status = condition ? "Time In" : "Time Out";
    setEmployeeStatus({ name, date: dates, time: times, status });
  }

  useEffect(() => {
    // To know the previous employee attendance
    const previousName = employeeRef.current;
    console.log(previousName);

    if (employeeStatus.name !== "") {
      employeeRef.current = employeeStatus.name;
      setStoreEmployee((prev) => [...prev, employeeStatus]);
    }
  }, [employeeStatus]);

  return { storeEmployee, setEmployee };
};

export default Employee;
