// import React from 'react'
// import FoodCards from '../component/FoodCard'

// function FoodCart() {
//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Heading */}
//         <div className="text-center mb-14">
//           <span className="text-orange-500 uppercase tracking-widest font-semibold">
//             Popular Foods
//           </span>

//           <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-3">
//             Our Best Dishes
//           </h2>

//           <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
//             Hand-picked meals prepared with fresh ingredients and delivered hot
//             to your doorstep.
//           </p>
//         </div>

//         {/* Cards */}
//         {/* <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"> */}
//            <FoodCards />
//         {/* </div> */}
//       </div>
//     </section>
   
//   )
// }

// export default FoodCart

import React, { useContext } from "react";
import FoodCards from "../component/FoodCard";
import { CountContext } from "../context/CartContext";

function FoodCart() {

    const {state} = useContext(CountContext)
  return (
    <main className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-orange-500 uppercase tracking-widest font-semibold">
            Popular {state.selectedCategory} items
          </span>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gray-800">
            {state.selectedCategory} items
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-gray-500">
            Hand-picked meals prepared with fresh ingredients and delivered hot
            to your doorstep.
          </p>
        </div>

        {/* Food Cards */}
        <FoodCards />
      </div>
    </main>
  );
}

export default FoodCart;