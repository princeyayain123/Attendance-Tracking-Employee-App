import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState(true);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // ✅ Simulate login
    localStorage.setItem("isLoggedIn", "true");
    navigate("/dashboard"); // Redirect to dashboard
  };

  return (
    <div className="flex h-screen justify-center bg-wheat">
      <div className="sections relative w-full sm:w-1/2 flex items-center justify-center p-4 sm:p-10 sm:shadow-xl bg-gradient-to-br from-sky-100 to-indigo-100">
        <div className="fixed top-4 left-4 flex flex-row items-center justify-center rounded-xl logo gap-3">
          <img src="/img/takeyama_image.png" alt="" style={{ width: "40px" }} />
          <h2 className="text-lg font-semibold text-blue-800 tracking-widest takeyama-text">TAKEYAMA</h2>
        </div>

        <div className="w-full max-w-md shadow-2xl rounded-xl bg-white/70 backdrop-blur-md py-12 px-8 sm:p-12 border border-white/30">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">LOGIN</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Username</label>
              <input type="text" name="username" placeholder="Enter Username" className="mt-1 w-full px-4 py-2 border border-indigo-300 hover:border-indigo-500 transition-all duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/80" />
            </div>
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input type={password ? "password" : "text"} placeholder="Enter Password" className="mt-1 w-full px-4 py-2 border border-indigo-300 hover:border-indigo-500 transition-all duration-200  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/80" />
              <div
                className="absolute top-9 right-2 bg-transparent hover:cursor-pointer"
                onClick={() => {
                  setPassword((prev) => !prev);
                }}
              >
                <img src={password ? "/icons/eye.svg" : "/icons/eye-slash.svg"} alt="Eye Icon" />
              </div>
            </div>
            <button type="submit" className="w-full py-2 mt-8 bg-blue-600 text-gray font-semibold rounded-md hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg">
              Login
            </button>
          </form>
        </div>

        <div className="air air1"></div>
        <div className="air air2"></div>
        <div className="air air3"></div>
        <div className="air air4"></div>
      </div>

      <div className="w-1/2 relative hidden sm:flex">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-right" style={{ backgroundImage: "url('/img/bg_1.jpg')" }}></div>

        {/* Dark Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.51)", // Adjust darkness here
          }}
        ></div>
      </div>
    </div>
  );
};

export default Login;
