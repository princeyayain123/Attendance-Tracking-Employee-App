import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

interface Props {
  isSidebarOpen: boolean;
}

const NavBar = ({ isSidebarOpen }: Props) => {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(0);

  const navItems = [
    { path: "/dashboard", label: "Dashboard" },
    { path: "/profile", label: "Profile" },
    { path: "/attendance", label: "Attendance" },
    { path: "/", label: "Log Out" },
  ];

  const test = () => {
    document.getElementById("blackScreen")?.click();
  };

  useEffect(() => {
    const index = navItems.findIndex((item) => item.path === location.pathname);
    setActiveIndex(index === -1 ? 0 : index);
  }, [location.pathname]);

  return (
    <div>
      <aside id="default-sidebar" className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform duration-500 ease-in-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`} aria-label="Sidebar">
        <div className="shadow-lg h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 relative">
          <h2 className="text-black font-bold p-6">Hi NAME!</h2>

          <ul className="space-y-2 font-medium relative">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  onClick={() => {
                    test();
                  }}
                  className={`flex items-center p-3 text-gray-900 rounded-lg dark:text-white transition-all duration-300 ease-in-out ${activeIndex === index ? "bg-gray-200 dark:bg-gray-700" : "hover:bg-gray-100 dark:hover:bg-gray-700"}`}
                >
                  <span className="ms-3">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default NavBar;
