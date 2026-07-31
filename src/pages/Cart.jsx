import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { useContext } from "react";
import { CountContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { state, dispatch } = useContext(CountContext);

  const subtotal = state.cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  console.log(state);

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

    {state.cart.length === 0 ? (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Your Cart is Empty 🛒
        </h2>

        <p className="mt-3 text-gray-500 max-w-md">
          Looks like you haven't added any delicious meals yet.
        </p>

        <Link
          to="/foodcart"
          className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition"
        >
          Browse Menu
        </Link>
      </div>
    ) : (
      <div className="grid lg:grid-cols-3 gap-10">

        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-6">
          {state.cart.map((food) => (
            <div
              key={food.idMeal}
              className="bg-white rounded-3xl shadow-md p-5 flex flex-col sm:flex-row gap-5 items-center"
            >
              {/* Image */}
              <img
                src={food.strMealThumb}
                alt={food.strMeal}
                className="h-28 w-28 rounded-2xl object-cover"
              />

              {/* Details */}
              <div className="flex-1 w-full">
                <h2 className="text-xl font-bold text-gray-800">
                  {food.strMeal}
                </h2>

                <p className="text-orange-500 font-bold mt-2">
                  ${food.price}
                </p>

                <div className="flex items-center gap-3 mt-4">
                  <button
                    onClick={() =>
                      dispatch({
                        type: "DECREASE_QUANTITY",
                        payload: food.idMeal,
                      })
                    }
                    className="h-9 w-9 rounded-full bg-gray-100 hover:bg-orange-500 hover:text-white flex items-center justify-center transition"
                  >
                    <Minus size={16} />
                  </button>

                  <span className="font-semibold text-lg">
                    {food.quantity}
                  </span>

                  <button
                    onClick={() =>
                      dispatch({
                        type: "INCREASE_QUANTITY",
                        payload: food.idMeal,
                      })
                    }
                    className="h-9 w-9 rounded-full bg-gray-100 hover:bg-orange-500 hover:text-white flex items-center justify-center transition"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              {/* Item Total */}
              <div className="text-xl font-bold text-orange-500">
                ${food.price * food.quantity}
              </div>

              {/* Delete */}
              <button
                onClick={() =>
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: food.idMeal,
                  })
                }
                className="text-red-500 hover:bg-red-50 p-3 rounded-full transition"
              >
                <Trash2 size={22} />
              </button>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white rounded-3xl shadow-md p-8 h-fit sticky top-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-orange-100 text-orange-500 p-3 rounded-full">
              <ShoppingBag />
            </div>

            <h2 className="text-2xl font-bold text-gray-800">
              Order Summary
            </h2>
          </div>

          <div className="space-y-4 text-gray-600">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal}</span>
            </div>

            <div className="flex justify-between">
              <span>Delivery</span>
              <span>$3</span>
            </div>

            <hr />

            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span className="text-orange-500">
                ${subtotal + 3}
              </span>
            </div>
          </div>

          <button className="mt-8 w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-semibold transition">
            Proceed To Checkout
          </button>
        </div>
      </div>
    )}
  </div>
</section>
  );
}

export default Cart;
