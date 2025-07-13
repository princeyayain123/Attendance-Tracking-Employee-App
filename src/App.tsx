import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import "./App.css";

// Components
import NavButton from "./Components/Components/NavButton";
import NavBar from "./Components/Components/NavBar";
import BlackScreen from "./Components/Components/BlackScreen";

// Pages
import Login from "./Pages/Login";

import Dashboard from "./Pages/Dashboard";
import Profile from "./Pages/Profile";
import Attendance from "./Pages/Attendance";

const AppRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
              <Login />
            </motion.div>
          }
        />

        <Route
          path="/dashboard"
          element={
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
              <Dashboard />
            </motion.div>
          }
        />
        <Route
          path="/profile"
          element={
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
              <Profile />
            </motion.div>
          }
        />
        <Route
          path="/attendance"
          element={
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
              <Attendance />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

const Layout: React.FC = () => {
  const [isSidebarOpen, setSidebar] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebar(!isSidebarOpen);
  };

  const hideUIRoutes = ["/", "/register"];
  const shouldShowUI = !hideUIRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen animate-gradient text-black w-full">
      <AnimatePresence mode="wait">
        {shouldShowUI && (
          <motion.div key="navbar" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ duration: 0.4 }}>
            <NavButton toggleSidebar={toggleSidebar} />
            <NavBar isSidebarOpen={isSidebarOpen} />
            <BlackScreen setSidebar={setSidebar} isSidebarOpen={isSidebarOpen} />
          </motion.div>
        )}
      </AnimatePresence>

      <AppRoutes />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Layout></Layout>
    </Router>
  );
};

export default App;
