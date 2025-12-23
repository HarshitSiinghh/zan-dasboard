import { useState } from "react";

export function SignIn({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      const user = { email };
      if (remember) {
        localStorage.setItem("authUser", JSON.stringify(user));
      } else {
        sessionStorage.setItem("authUser", JSON.stringify(user));
      }
      onLogin(user);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f0f0f] text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-[#1a1a1a] rounded-xl p-8 w-full max-w-md shadow-lg"
      >
        <h1 className="text-2xl font-semibold text-center mb-2">Sign In</h1>
        <p className="text-center text-gray-400 mb-6">Welcome to Zanthium</p>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 bg-[#121212] border border-gray-700 rounded-md px-4 py-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 bg-[#121212] border border-gray-700 rounded-md px-4 py-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="flex items-center justify-between text-sm mb-6">
          <label className="flex items-center gap-2 text-gray-400">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            Remember me?
          </label>
          <span className="text-orange-400 cursor-pointer">Forgot Password?</span>
        </div>

        <button className="w-full bg-orange-500 hover:bg-orange-600 py-2 rounded-md font-medium">
          Sign In
        </button>
      </form>
    </div>
  );
}

export function SignUp({ onSwitch }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f0f0f] text-white">
      <form className="bg-[#1a1a1a] rounded-xl p-8 w-full max-w-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-center mb-2">Sign Up</h1>
        <p className="text-center text-gray-400 mb-6">Welcome to Zanthium</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="auth-input" placeholder="Sponsor Id" />
          <input className="auth-input" placeholder="Sponsor Name" />
          <input className="auth-input" placeholder="Name" />
          <input className="auth-input" placeholder="Country" />
          <input className="auth-input" placeholder="Email" />
          <input className="auth-input" placeholder="Phone no" />
          <input type="password" className="auth-input" placeholder="Password" />
          <input type="password" className="auth-input" placeholder="Confirm-password" />
        </div>

        <label className="flex items-center gap-2 text-sm text-gray-400 mt-4">
          <input type="checkbox" /> I agree with the terms of use
        </label>

        <button className="w-full bg-orange-500 hover:bg-orange-600 py-2 rounded-md font-medium mt-6">
          Sign Up
        </button>

        <p className="text-center text-sm text-gray-400 mt-4">
          Already have an Account?{" "}
          <span
            onClick={onSwitch}
            className="text-orange-400 cursor-pointer"
          >
            Sign in
          </span>
        </p>
      </form>
    </div>
  );
}

export function Logout({ onLogout }) {
  return (
    <button
      onClick={() => {
        localStorage.removeItem("authUser");
        sessionStorage.removeItem("authUser");
        onLogout();
      }}
      className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md"
    >
      Logout
    </button>
  );
}

