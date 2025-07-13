import TimeButton from "../Components/Components/TimeButton";
import Card from "../Components/Components/Card";
import Day from "../Components/Components/Day";
import useClock from "../Components/CustomHooks/UseClock";
import useEmployee from "../Components/CustomHooks/Employee";

const Dashboard = () => {
  const { time, date } = useClock();
  const { storeEmployee, setEmployee } = useEmployee(date, time);

  // .then/.catch vs vs Async/await

  // function test() {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       const loaded = false;
  //       if (loaded) resolve("Program is ready"); // True
  //       else reject("Program is NOT ready"); // False
  //     }, 1000);
  //   });
  // }

  // useEffect(() => {
  //   test()
  //     .then((message) => {
  //       console.log(message);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  // useEffect(() => {
  //   async function testRun() {
  //     try {
  //       const message = await test();
  //       console.log(message);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   testRun();
  // }, []);

  return (
    <div>
      <div className="dashboard-container flex flex-col items-center justify-center transition-margin duration-500 animate-gradient  p-4">
        <div className="fixed top-2 right-2 text-right flex flex-col">
          <span className="text-gray-600">Date:</span>
          <span className="font-bold text-gray-600">
            {date.days}/{date.months}/{date.years}
          </span>
        </div>
        <div className="relative p-4 rounded-xl bg-white glass">
          <Day></Day>
          <div className="font-bold text-black flex items-center justify-center gap-4 lg:gap-8 my-8 sm:m-8">
            <Card time={time.hours} text="HOURS"></Card>
            <Card time={time.minutes} text="MINUTES"></Card>
            <Card time={time.seconds} text="SECONDS"></Card>
          </div>
          <div className="absolute left-1/2 bottom-[-20px] transform -translate-x-1/2 flex items-center justify-center flex-row gap-5">
            <TimeButton text="Time In" id="timeIn" functions={() => setEmployee(true)}></TimeButton>
            <TimeButton text="Time Out" id="timeOut" functions={() => setEmployee(false)}></TimeButton>
          </div>
        </div>

        <div className="fixed bottom-[-8px] sm:bottom-4 bg-white flex flex-col p-4 w-full lg:w-5/12 h-40 overflow-auto shadow-sm rounded-xl px-4 mx-auto text-black hide-scrollbar">
          {storeEmployee.map((employee, index) => (
            <div key={index} className="shadow-sm border-1-500 rounded-xl mb-4">
              <div className="p-4 flex w-full justify-start text-[clamp(1rem,2vw,1.125rem)] font-medium text-gray-600">
                <p className="w-1/4">Name: {employee.name}</p>
                <p className="w-1/4">Date: {employee.date}</p>
                <p className="w-1/4">Time: {employee.time}</p>
                <p className="w-1/4">
                  Status: <span className={employee.status === "Time In" ? "text-green-500" : "text-red-500"}>{employee.status}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
