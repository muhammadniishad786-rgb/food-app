import { Heart, ShoppingCart, Star, Clock } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { getMeal, getMealsByCategory } from "../api/mealAPI";
import { CountContext } from "../context/CartContext";

// const foods = [
//   {
//     id: 1,
//     name: "Classic Burger",
//     image:
//       "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600",
//     price: 12,
//     rating: 4.8,
//     time: "20 min",
//   },
//   {
//     id: 2,
//     name: "Italian Pizza",
//     image:
//       "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600",
//     price: 18,
//     rating: 4.9,
//     time: "25 min",
//   },
//   {
//     id: 3,
//     name: "Chicken Biryani",
//     image:
//       "https://images.unsplash.com/photo-1701579231340-3bdbbc1d6510?w=600",
//     price: 15,
//     rating: 4.7,
//     time: "30 min",
//   },
//   {
//     id: 4,
//     name: "Fresh Pasta",
//     image:
//       "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600",
//     price: 14,
//     rating: 4.6,
//     time: "22 min",
//   },
//   {
//     id: 5,
//     name: "Caesar Salad",
//     image:
//       "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600",
//     price: 10,
//     rating: 4.5,
//     time: "15 min",
//   },
//   {
//     id: 6,
//     name: "Chocolate Cake",
//     image:
//       "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600",
//     price: 8,
//     rating: 4.9,
//     time: "18 min",
//   },
// ];

function FoodCards() {
  
  const [search, setSearch] = React.useState("chicken")
  const [meal, setMeal] = React.useState([])
  const {state, dispatch} = useContext(CountContext)

  // useEffect(() => {
  //   const fetchMeals = async () => {
  //     const data = await getMeal(search);
  //     setMeal(data)
      
  //   };
  //   fetchMeals()
  // }, []);

  useEffect(() => {
    const fetchMeals = async () => {
      const data = await getMealsByCategory(state.selectedCategory);
      setMeal(data)
      
    };
    fetchMeals()
  }, []);
  console.log(meal);
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-orange-500 uppercase tracking-widest font-semibold">
            Popular Foods
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-3">
            Our Best Dishes
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Hand-picked meals prepared with fresh ingredients and delivered hot
            to your doorstep.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {meal.map((food) => (
            <div
              key={meal.idMeal}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={food.strMealThumb}
                  alt={food.strMeal}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
                />

                {/* Favourite */}
                <button className="absolute top-4 right-4 h-11 w-11 rounded-full bg-white shadow flex items-center justify-center hover:bg-red-500 hover:text-white transition">
                  <Heart size={20} />
                </button>

                {/* Rating */}
                <div className="absolute bottom-4 left-4 bg-white rounded-full px-3 py-1 flex items-center gap-1 shadow">
                  <Star size={16} className="fill-yellow-400 text-yellow-400" />
                  {/* <span className="font-semibold text-sm">{food.rating}</span> */}
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
                    {/* <span>{food.time}</span> */}
                  </div>

                  <span className="text-2xl font-bold text-orange-500">
                    {/* £{food.price} */}
                  </span>
                </div>

                <button 
                onClick={() => dispatch({
                  type: "ADD_TO_CART",
                  payload: food
                })}
                className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl flex items-center justify-center gap-2 font-semibold transition">
                  <ShoppingCart size={20} />
                  Add to Cart
                </button>
              </div>
            </div>
          ))} 
        </div>
      </div>
    </section>
  );
}

export default FoodCards;
