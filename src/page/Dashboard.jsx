import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    toast.error("Logout: Please login again");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-slate-950 p-5">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center py-6 border-b border-slate-800">
          <h1 className="text-2xl font-bold text-white">My Dashboard</h1>

          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg transition"
          >
            Logout
          </button>
        </div>

        <div className="mt-12 bg-slate-900 border border-slate-800 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-white mb-3">
            Hello, {user?.name}!
          </h2>

          <p className="text-slate-400">
            Welcome to your dashboard. You are successfully logged in.
          </p>

          <div className="mt-6 bg-slate-800 p-5 rounded-xl">
            <p className="text-slate-400 text-sm">Your Email</p>
            <p className="text-white font-medium mt-1">{user?.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
