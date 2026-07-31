import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";
  
function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo & About */}
          <div>

            <div className="flex items-center gap-3">

              <div className="h-12 w-12 rounded-xl bg-orange-500 flex items-center justify-center text-white text-2xl">
                🍔
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">
                  Foodie
                </h2>

                <p className="text-sm text-gray-400">
                  Fast Delivery
                </p>
              </div>

            </div>

            <p className="mt-6 leading-7 text-gray-400">
              Fresh meals, fast delivery, and unforgettable flavours.
              Order your favourite food anytime, anywhere.
            </p>

            {/* Social Icons */}

            <div className="flex gap-4 mt-8">

              <a
                href="#"
                className="h-10 w-10 rounded-full bg-gray-800 hover:bg-orange-500 flex items-center justify-center transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="h-10 w-10 rounded-full bg-gray-800 hover:bg-orange-500 flex items-center justify-center transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="h-10 w-10 rounded-full bg-gray-800 hover:bg-orange-500 flex items-center justify-center transition"
              >
                <FaXTwitter />
              </a>

              <a
                href="#"
                className="h-10 w-10 rounded-full bg-gray-800 hover:bg-orange-500 flex items-center justify-center transition"
              >
                <FaLinkedinIn />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-6">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Menu
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Categories
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  About
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Categories */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-6">
              Categories
            </h3>

            <ul className="space-y-3">

              <li className="hover:text-orange-500 cursor-pointer transition">
                Burger
              </li>

              <li className="hover:text-orange-500 cursor-pointer transition">
                Pizza
              </li>

              <li className="hover:text-orange-500 cursor-pointer transition">
                Pasta
              </li>

              <li className="hover:text-orange-500 cursor-pointer transition">
                Desserts
              </li>

              <li className="hover:text-orange-500 cursor-pointer transition">
                Drinks
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-6">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex items-center gap-3">
                <MapPin className="text-orange-500" size={20} />
                <span>Kozhikode, Kerala, India</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-orange-500" size={20} />
                <span>+91 9778580349</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="text-orange-500" size={20} />
                <span>foodie@example.com</span>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Footer */}

      <div className="border-t border-gray-800">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm text-gray-400 text-center">
            © {new Date().getFullYear()} Foodie. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">

            <a
              href="#"
              className="hover:text-orange-500 transition"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="hover:text-orange-500 transition"
            >
              Terms & Conditions
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;