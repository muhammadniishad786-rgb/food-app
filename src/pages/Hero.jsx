import { Search, Star } from "lucide-react";
import { useContext, useEffect } from "react";
import { CountContext } from "../context/CartContext";
import { getMealBySeach } from "../api/mealAPI";
import { useNavigate } from "react-router-dom";

function Hero() {
  const { search, setSearch, setMeal, meal, setIsSearching } = useContext(CountContext);
  const navigate = useNavigate()

    const handleClick = async () => {
      const data = await getMealBySeach(search);
      setMeal(data);       
      setIsSearching(true) 
      navigate('/foodcart')    
    };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-100">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 items-center gap-10 lg:gap-14">
          {/* LEFT */}
          <div>
            <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-semibold text-sm">
              🍔 Best Food Delivery
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight text-gray-900">
              Delicious Food
              <br />
              Delivered
              <span className="text-orange-500"> Fast.</span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-xl leading-8">
              Order fresh meals from your favourite restaurants and enjoy
              lightning-fast delivery right to your doorstep.
            </p>

            {/* Search */}
            <div className="mt-10 flex w-full max-w-xl bg-white rounded-full shadow-xl overflow-hidden">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Search burger, pizza..."
                className="flex-1 px-6 py-4 bg-transparent outline-none"
              />

              <button
                onClick={handleClick}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 transition"
              >
                <Search />
              </button>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition">
                Order Now
              </button>

              <button className="border border-gray-300 hover:border-orange-500 hover:text-orange-500 px-8 py-4 rounded-full font-semibold transition">
                View Menu
              </button>
            </div>

            {/* Rating */}
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                <img
                  loading="lazy"
                  src="https://i.pravatar.cc/50?img=1"
                  alt="Customer 1"
                  className="w-12 h-12 rounded-full border-2 border-white"
                />

                <img
                  loading="lazy"
                  src="https://i.pravatar.cc/50?img=2"
                  alt="Customer 2"
                  className="w-12 h-12 rounded-full border-2 border-white"
                />

                <img
                  loading="lazy"
                  src="https://i.pravatar.cc/50?img=3"
                  alt="Customer 3"
                  className="w-12 h-12 rounded-full border-2 border-white"
                />
              </div>

              <div>
                <div className="flex items-center gap-1">
                  <Star size={18} className="fill-yellow-400 text-yellow-400" />
                  <span className="font-bold">4.9</span>
                </div>

                <p className="text-sm text-gray-500">
                  Trusted by 10k+ customers
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center items-center mt-10 lg:mt-0">
            {/* Background Circle */}
            <div className="absolute w-72 h-72 md:w-[420px] md:h-[420px] bg-orange-200 rounded-full blur-3xl opacity-70"></div>

            {/* Main Image */}
            <img
              loading="lazy"
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800"
              alt="Delicious Burger"
              className="relative z-10 w-full max-w-[500px] rounded-full shadow-2xl object-cover aspect-square"
            />

            {/* Floating Card 1 */}
            <div className="absolute top-4 left-0 md:top-8 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 animate-bounce">
              <img
                loading="lazy"
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200"
                alt="Healthy Salad"
                className="w-14 h-14 rounded-xl object-cover"
              />

              <div>
                <h4 className="font-semibold">Healthy Salad</h4>
                <p className="text-orange-500 font-bold">$12</p>
              </div>
            </div>

            {/* Floating Card 2 */}
            <div className="absolute bottom-4 right-0 md:bottom-12 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
              <img
                loading="lazy"
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=200"
                alt="Italian Pizza"
                className="w-14 h-14 rounded-xl object-cover"
              />

              <div>
                <h4 className="font-semibold">Italian Pizza</h4>
                <p className="text-orange-500 font-bold">$18</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
