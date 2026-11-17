import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-5">
      <div className="w-full max-w-md bg-slate-900 p-10 rounded-2xl text-center border border-slate-800">
        <h1 className="text-3xl font-bold text-white mb-3">Welcome Back!</h1>

        <p className="text-slate-400 mb-8">
          Simple React Authentication System
        </p>

        <div className="flex flex-col gap-4">
          <Link
            to="/login"
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="border border-slate-600 text-white py-3 rounded-lg hover:bg-slate-800 transition"
          >
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
