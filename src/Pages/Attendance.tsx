import PieChart from "../Components/Components/PieChart";
import Table from "../Components/Components/Table";
const Attendance = () => {
  return (
    <div>
      <div className=" h-[100dvh] bg-white flex flex-col items-center justify-center p-0 lg:ml-64">
        <div className="w-full p-4 overflow-auto max-w-[1400px]">
          <div className="grid grid-cols-4 lg:grid-cols-12 gap-8">
            <div className="col-span-4 sm:col-span-12 lg:col-span-9 flex flex-col items-center justify-center">
              <Table></Table>
            </div>
            <div className="col-span-4 sm:col-span-12 lg:col-span-3 lg:col-span-3 w-full py-4 flex flex-col sm:flex-row lg:flex-col items-center justify-center gap-8">
              <PieChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
