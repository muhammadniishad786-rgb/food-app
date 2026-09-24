import { Heart, ShoppingCart, Star, Clock } from "lucide-react";
import React, { useContext, useEffect } from "react";
import { getMealBySeach, getMealsByCategory } from "../api/mealAPI";
import { CountContext } from "../context/CartContext";

function FoodCards({limit}) {
  const { state, meal, dispatch, setMeal, isSearching, setIsSearching , selectedCategory} = useContext(CountContext);  

  useEffect(() => {
    if(isSearching) return;
    const fetchMeals = async () => {
      const data = await getMealsByCategory(state.selectedCategory);
      setMeal(data);
    };

    fetchMeals();
  }, [state.selectedCategory, isSearching]);


   // Show only the required number of meals
  const displayedMeals = limit ? meal.slice(0, limit) : meal;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {displayedMeals.map((food) => (
        <div
          key={food.idMeal}
          className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300"
        >
          {/* Image */}
          <div className="relative overflow-hidden">
            <img
              src={food.strMealThumb}
              alt={food.strMeal}
              className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
            />

            <button className="absolute top-4 right-4 h-11 w-11 rounded-full bg-white shadow flex items-center justify-center hover:bg-red-500 hover:text-white transition">
              <Heart size={20} />
            </button>

            <div className="absolute bottom-4 left-4 bg-white rounded-full px-3 py-1 flex items-center gap-1 shadow">
              <Star
                size={16}
                className="fill-yellow-400 text-yellow-400"
              />
              <span className="font-semibold text-sm">4.8</span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-800">
              {food.strMeal}
            </h3>

            <p className="text-gray-500 mt-2">
              Fresh ingredients with premium quality and rich flavour.
            </p>

            <div className="flex items-center justify-between mt-5">
              <div className="flex items-center gap-2 text-gray-500">
                <Clock size={18} />
                <span>20 min</span>
              </div>

              <span className="text-2xl font-bold text-orange-500">
                ₹13
              </span>
            </div>

            <button
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: food,
                })
              }
              className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl flex items-center justify-center gap-2 font-semibold transition"
            >
              <ShoppingCart size={20} />
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FoodCards;
