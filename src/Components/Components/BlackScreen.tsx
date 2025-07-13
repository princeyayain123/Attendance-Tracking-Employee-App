interface Props {
  setSidebar: (open: boolean) => void;
  isSidebarOpen: boolean;
}

const BlackScreen: React.FC<Props> = ({ setSidebar, isSidebarOpen }) => {
  return (
    <div>
      <div
        id="blackScreen"
        onClick={() => {
          setSidebar(false);
        }}
        className={`bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-30 transition-opacity duration-500 ease-in-out ${isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      ></div>
    </div>
  );
};

export default BlackScreen;
