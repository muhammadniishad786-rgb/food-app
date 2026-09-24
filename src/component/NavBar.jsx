import { useContext, useState } from "react";
import { Menu, X, ShoppingCart, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { CountContext } from "../context/CartContext";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { state } = useContext(CountContext);
  //   console.log(state.cart[0].quantity);

  const isLoggedIn = localStorage.getItem("token");

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const cartCount = state.cart.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-5">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="h-11 w-11 rounded-xl bg-orange-500 flex items-center justify-center text-white font-bold text-xl">
            🍔
          </div>

          <div>
            <h1 className="text-2xl font-bold text-gray-800">Foodie</h1>
            <p className="text-xs text-gray-500">Fast Delivery</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-10">
          <Link
            to={"/"}
            className="text-gray-700 hover:text-orange-500 font-medium transition"
          >
            Home
          </Link>

          <Link
            to={"/foodcart"}
            className="text-gray-700 hover:text-orange-500 font-medium transition"
          >
            Menu
          </Link>

          <Link
            to={"/catogery"}
            className="text-gray-700 hover:text-orange-500 font-medium transition"
          >
            Category
          </Link>
          <Link
            to={"/about"}
            className="text-gray-700 hover:text-orange-500 font-medium transition"
          >
            About
          </Link>

          <Link
            to={"/contact"}
            className="text-gray-700 hover:text-orange-500 font-medium transition"
          >
            Contact
          </Link>
        </nav>

        {/* Desktop Right */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Search */}
          <button className="h-11 w-11 rounded-full border hover:bg-orange-500 hover:text-white transition flex items-center justify-center">
            <Search size={20} />
          </button>

          {/* Cart */}
          <Link to={"/cart"}>
            <button className="relative h-11 w-11 rounded-full border hover:bg-orange-500 hover:text-white transition flex items-center justify-center">
              <ShoppingCart size={20} />

              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
                {cartCount}
              </span>
            </button>
          </Link>

          {/* Login */}
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium transition"
            >
              Logout
            </button>
          ) : (
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium transition">
              Login
            </button>
          )}
        </div>

        {/* Mobile Button */}
        <button onClick={() => setOpen(!open)} className="lg:hidden">
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

            {isLoggedIn ? (
              <button className="bg-orange-500 text-white py-3 rounded-full">
                Login
              </button>
            ) : (
              <button
                onClick={handleLogout}
                className="bg-orange-500 text-white py-3 rounded-full"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
