import { PieChart } from "@mui/x-charts/PieChart";

const attendanceData = [
  { id: 0, value: 20, label: "Whole Day" },
  { id: 1, value: 5, label: "Half Day" },
  { id: 2, value: 3, label: "Absent" },
  { id: 3, value: 2, label: "Late" },
];

export default function AttendancePieChart() {
  return (
    <div className="lg:w-full p-2 lg:p-4 shadow-xl">
      <PieChart series={[{ data: attendanceData }]} width={200} height={200} />
    </div>
  );
}
