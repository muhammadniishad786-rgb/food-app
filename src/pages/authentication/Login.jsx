import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { useForm } from "react-hook-form";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const onsubmit = (data) => {
    const users = JSON.parse(localStorage.getItem("users"));

    const user = users.find((user) => {
      return data.email === user.email && data.password === user.password;
    });

    if (user) {
      localStorage.setItem("token", "LoggedIn");
      navigate("/");
    } else {
      alert("invalid email or password");
    }
  };

  return (
    <section className="min-h-screen bg-orange-50 flex items-center justify-center px-5 py-10">
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2">
        {/* Left Side */}
        <div className="hidden lg:flex flex-col justify-center items-center bg-gradient-to-br from-orange-500 to-orange-600 text-white p-12">
          <div className="text-7xl mb-8">🍔</div>

          <h1 className="text-5xl font-bold text-center">Welcome Back</h1>

          <p className="mt-6 text-center text-orange-100 leading-8 max-w-md">
            Sign in to continue ordering your favourite meals and enjoy fast
            delivery to your doorstep.
          </p>

          <img
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=700"
            alt="Food"
            className="mt-12 rounded-3xl shadow-xl"
          />
        </div>

        {/* Right Side */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-gray-800">Login</h2>

          <p className="mt-2 text-gray-500">
            Enter your credentials to continue.
          </p>

          <form className="mt-10 space-y-6" onSubmit={handleSubmit(onsubmit)}>
            {/* Email */}
            <div className="relative">
              <Mail
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="email"
                placeholder="Email Address"
                {...register("email", {
                  required: "email required",
                })}
                className="w-full border border-gray-300 rounded-xl pl-12 pr-4 py-4 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <Lock
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                {...register("password", {
                  minLength: {
                    value: 8,
                    message: "minimum 8 charecters",
                  },
                })}
                className="w-full border border-gray-300 rounded-xl pl-12 pr-12 py-4 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Remember Me */}
            <div className="flex justify-between items-center">
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" className="accent-orange-500" />
                Remember Me
              </label>

              <Link
                to="/forgot-password"
                className="text-orange-500 text-sm hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-semibold transition duration-300"
            >
              Login
            </button>
          </form>

          {/* Divider */}

          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-px bg-gray-300"></div>

            <span className="text-gray-500 text-sm">OR</span>

            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Google Button */}

          <button className="w-full border border-gray-300 rounded-xl py-4 hover:bg-gray-100 transition font-medium">
            Continue with Google
          </button>

          {/* Register */}

          <p className="text-center mt-8 text-gray-500">
            Don't have an account?
            <Link
              to="/register"
              className="text-orange-500 font-semibold ml-2 hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;
