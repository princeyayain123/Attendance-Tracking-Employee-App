import { useEffect, useState } from "react";
interface Employee {
  name: string;
  timein: string;
  timeout: string;
  status: string;
}

const FilterEmployees = () => {
  const employeeHistory = [
    { name: "Julius Anthony R. Yayain", timein: "8:00", timeout: "5:00", status: "Whole Day" },
    { name: "Jocelyn R. Yayain", timein: "8:00", timeout: "5:00", status: "Whole Day" },
  ];

  const [employees, setEmployees] = useState<Employee[]>([]);
  const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>([]);
  useEffect(() => {
    setEmployees(employeeHistory);
    setFilteredEmployees(employeeHistory);
  }, []);

  function handleFilter(event: React.ChangeEvent<HTMLInputElement>) {
    const filter = event.target.value.toLowerCase();
    const result = employees.filter((emp) => emp.name.toLowerCase().includes(filter));
    setFilteredEmployees(result);
  }
  return {filteredEmployees, handleFilter};
};

export default FilterEmployees;
