import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";
import { Link } from "react-router-dom";

function Register() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="min-h-screen bg-orange-50 flex items-center justify-center px-5 py-10">
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2">

        {/* Left Side */}
        <div className="hidden lg:flex flex-col justify-center items-center bg-gradient-to-br from-orange-500 to-orange-600 text-white p-12">

          <div className="text-7xl mb-8">🍔</div>

          <h1 className="text-5xl font-bold text-center">
            Join Foodie
          </h1>

          <p className="mt-6 text-center text-orange-100 leading-8 max-w-md">
            Create your account and enjoy delicious meals delivered
            to your doorstep in minutes.
          </p>

          <img
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600"
            alt="Food"
            className="mt-12 rounded-3xl shadow-xl"
          />

        </div>

        {/* Right Side */}
        <div className="p-8 md:p-12">

          <h2 className="text-4xl font-bold text-gray-800">
            Create Account
          </h2>

          <p className="mt-2 text-gray-500">
            Register to start ordering your favourite meals.
          </p>

          <form className="mt-10 space-y-6">

            {/* Name */}
            <div className="relative">

              <User
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-xl pl-12 pr-4 py-4 outline-none focus:border-orange-500"
              />

            </div>

            {/* Email */}
            <div className="relative">

              <Mail
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-xl pl-12 pr-4 py-4 outline-none focus:border-orange-500"
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
                className="w-full border border-gray-300 rounded-xl pl-12 pr-12 py-4 outline-none focus:border-orange-500"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>

            </div>

            {/* Confirm Password */}
            <div className="relative">

              <Lock
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full border border-gray-300 rounded-xl pl-12 pr-4 py-4 outline-none focus:border-orange-500"
              />

            </div>

            {/* Terms */}
            <label className="flex items-center gap-3 text-sm text-gray-600">

              <input
                type="checkbox"
                className="accent-orange-500"
              />

              I agree to the Terms & Conditions

            </label>

            {/* Register Button */}
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-semibold transition">
              Create Account
            </button>

          </form>

          <p className="text-center mt-8 text-gray-500">

            Already have an account?

            <Link
              to="/login"
              className="text-orange-500 font-semibold ml-2 hover:underline"
            >
              Login
            </Link>

          </p>

        </div>

      </div>
    </section>
  );
}

export default Register;