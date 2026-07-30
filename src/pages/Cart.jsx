import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { useContext } from "react";
import { CountContext } from "../context/CartContext";

function Cart() {

    const {state} = useContext(CountContext);
    

  // temporary data (replace with context later)
//   const cartItems = [
//     {
//       id: 1,
//       name: "Chicken Pizza",
//       image:
//         "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600",
//       price: 18,
//       quantity: 2,
//     },
//     {
//       id: 2,
//       name: "Classic Burger",
//       image:
//         "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600",
//       price: 12,
//       quantity: 1,
//     },
//   ];


//   const subtotal = cartItems.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );

  
  return (
    <section className="min-h-screen bg-gray-50 py-16">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-12">
          <span className="text-orange-500 uppercase tracking-widest font-semibold">
            Your Cart
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mt-3">
            Delicious Choices Waiting
          </h1>

          <p className="text-gray-500 mt-3">
            Review your items and place your order.
          </p>
        </div>


        <div className="grid lg:grid-cols-3 gap-10">


          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">

            {/* {cartItems.map((item) => ( */}

              <div
                // key={item.id}
                className="bg-white rounded-3xl shadow-md p-5 flex gap-5 items-center"
              >

                {/* Image */}
                {/* <img
                //   src={item.image}
                //   alt={item.name}
                  className="h-28 w-28 rounded-2xl object-cover"
                /> */}


                {/* Details */}
                <div className="flex-1">

                  <h2 className="text-xl font-bold text-gray-800">
                    {/* {item.name} */}
                  </h2>

                  <p className="text-orange-500 font-bold mt-2">
                    {/* ${item.price} */}
                  </p>


                  {/* Quantity */}
                  <div className="flex items-center gap-3 mt-4">

                    <button className="h-9 w-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-orange-500 hover:text-white transition">
                      <Minus size={16}/>
                    </button>


                    <span className="font-semibold">
                      {/* {item.quantity} */}
                    </span>


                    <button className="h-9 w-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-orange-500 hover:text-white transition">
                      <Plus size={16}/>
                    </button>

                  </div>

                </div>


                {/* Delete */}
                <button className="text-red-500 hover:bg-red-50 p-3 rounded-full">
                  <Trash2 size={22}/>
                </button>


              </div>

            {/* ))} */}

          </div>



          {/* Summary */}
          <div
            className="bg-white rounded-3xl shadow-md p-8 h-fit"
          >

            <div className="flex items-center gap-3 mb-6">

              <div className="bg-orange-100 text-orange-500 p-3 rounded-full">
                <ShoppingBag/>
              </div>

              <h2 className="text-2xl font-bold text-gray-800">
                Order Summary
              </h2>

            </div>


            <div className="space-y-4 text-gray-600">

              <div className="flex justify-between">
                <span>Subtotal</span>
                {/* <span>${subtotal}</span> */}
              </div>


              <div className="flex justify-between">
                <span>Delivery</span>
                <span>$3</span>
              </div>


              <hr/>


              <div className="flex justify-between text-xl font-bold text-gray-800">
                <span>Total</span>
                <span className="text-orange-500">
                  {/* ${subtotal + 3} */}
                </span>
              </div>


            </div>


            <button
              className="mt-8 w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-semibold transition"
            >
              Proceed To Checkout
            </button>


          </div>


        </div>

      </div>

    </section>

  );
}

export default Cart;