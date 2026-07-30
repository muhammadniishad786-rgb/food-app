import { useState } from "react";
import {
  Menu,
  X,
  ShoppingCart,
  Search,
} from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-5">

        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="h-11 w-11 rounded-xl bg-orange-500 flex items-center justify-center text-white font-bold text-xl">
            🍔
          </div>

          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Foodie
            </h1>
            <p className="text-xs text-gray-500">
              Fast Delivery
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-10">

          <a
            href="#"
            className="text-gray-700 hover:text-orange-500 font-medium transition"
          >
            Home
          </a>

          <a
            href="#"
            className="text-gray-700 hover:text-orange-500 font-medium transition"
          >
            Menu
          </a>

          <a
            href="#"
            className="text-gray-700 hover:text-orange-500 font-medium transition"
          >
            Categories
          </a>

          <a
            href="#"
            className="text-gray-700 hover:text-orange-500 font-medium transition"
          >
            About
          </a>

          <a
            href="#"
            className="text-gray-700 hover:text-orange-500 font-medium transition"
          >
            Contact
          </a>
        </nav>

        {/* Desktop Right */}
        <div className="hidden lg:flex items-center gap-4">

          {/* Search */}
          <button className="h-11 w-11 rounded-full border hover:bg-orange-500 hover:text-white transition flex items-center justify-center">
            <Search size={20} />
          </button>

          {/* Cart */}
          <button className="relative h-11 w-11 rounded-full border hover:bg-orange-500 hover:text-white transition flex items-center justify-center">
            <ShoppingCart size={20} />

            <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
              2
            </span>
          </button>

          {/* Login */}
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-medium transition">
            Login
          </button>

        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white border-t">

          <div className="flex flex-col p-6 gap-5">

            <a href="#" className="font-medium">
              Home
            </a>

            <a href="#" className="font-medium">
              Menu
            </a>

            <a href="#" className="font-medium">
              Categories
            </a>

            <a href="#" className="font-medium">
              About
            </a>

            <a href="#" className="font-medium">
              Contact
            </a>

            <button className="flex items-center gap-2">
              <Search size={18} />
              Search
            </button>

            <button className="flex items-center gap-2">
              <ShoppingCart size={18} />
              Cart (2)
            </button>

            <button className="bg-orange-500 text-white py-3 rounded-full">
              Login
            </button>

          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;