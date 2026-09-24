import {
  Heart,
  Clock,
  ShieldCheck,
  Truck,
  Users,
  Utensils,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="bg-white text-gray-900">

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-100">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT */}
            <div>
              <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-semibold text-sm">
                <Utensils size={18} />
                About Our Food App
              </span>

              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                Good Food.
                <br />
                Great Moments.
                <br />
                <span className="text-orange-500">
                  Delivered Fast.
                </span>
              </h1>

              <p className="mt-6 text-lg text-gray-600 leading-8 max-w-xl">
                We make it simple to discover delicious meals, order from
                your favourite restaurants, and enjoy fresh food delivered
                straight to your doorstep.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link to='/foodcart'>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition">
                  Explore Food
                </button>
                </Link>

                <button className="border border-gray-300 hover:border-orange-500 hover:text-orange-500 px-8 py-4 rounded-full font-semibold transition">
                  Contact Us
                </button>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative flex justify-center">
              <div className="absolute w-72 h-72 md:w-[450px] md:h-[450px] bg-orange-200 rounded-full blur-3xl opacity-60"></div>

              <img
                loading="lazy"
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900"
                alt="Delicious food"
                className="relative z-10 w-full max-w-[520px] h-[520px] object-cover rounded-[40px] shadow-2xl"
              />

              {/* Rating Card */}
              <div className="absolute bottom-6 left-0 md:left-4 z-20 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
                <div className="bg-orange-100 p-3 rounded-xl">
                  <Star
                    size={24}
                    className="text-orange-500 fill-orange-500"
                  />
                </div>

                <div>
                  <p className="font-bold text-lg">4.9/5</p>
                  <p className="text-sm text-gray-500">
                    Customer Rating
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          <div>
            <img
              loading="lazy"
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=900"
              alt="Restaurant"
              className="w-full h-[420px] object-cover rounded-3xl shadow-xl"
            />
          </div>

          <div>
            <span className="text-orange-500 font-bold uppercase tracking-wider text-sm">
              Our Story
            </span>

            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold">
              Food brings people together.
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              Our goal is to make food delivery convenient, enjoyable and
              accessible. Whether you're craving a juicy burger, a fresh
              salad, delicious pizza or a comforting meal, we help you find
              something you'll love.
            </p>

            <p className="mt-4 text-gray-600 leading-8">
              We connect hungry customers with restaurants and food
              experiences they can enjoy from the comfort of their homes.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <Heart className="text-orange-500" />
              </div>

              <div>
                <h4 className="font-bold">
                  Made with love
                </h4>

                <p className="text-sm text-gray-500">
                  Every order matters to us.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-2xl mx-auto">
            <span className="text-orange-500 font-bold uppercase text-sm">
              Why Choose Us
            </span>

            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold">
              Everything you need for a great meal
            </h2>

            <p className="mt-4 text-gray-600">
              We focus on making every part of your food ordering experience
              simple and enjoyable.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

            <div className="bg-white p-7 rounded-3xl shadow-sm hover:shadow-xl transition">
              <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center">
                <Truck className="text-orange-500" size={28} />
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Fast Delivery
              </h3>

              <p className="mt-3 text-gray-500 leading-7">
                Get your favourite meals delivered quickly and conveniently.
              </p>
            </div>

            <div className="bg-white p-7 rounded-3xl shadow-sm hover:shadow-xl transition">
              <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center">
                <Clock className="text-orange-500" size={28} />
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Save Time
              </h3>

              <p className="mt-3 text-gray-500 leading-7">
                Order your favourite food without waiting in long queues.
              </p>
            </div>

            <div className="bg-white p-7 rounded-3xl shadow-sm hover:shadow-xl transition">
              <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center">
                <ShieldCheck className="text-orange-500" size={28} />
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Secure Ordering
              </h3>

              <p className="mt-3 text-gray-500 leading-7">
                Enjoy a reliable and secure ordering experience.
              </p>
            </div>

            <div className="bg-white p-7 rounded-3xl shadow-sm hover:shadow-xl transition">
              <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center">
                <Users className="text-orange-500" size={28} />
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Happy Customers
              </h3>

              <p className="mt-3 text-gray-500 leading-7">
                Thousands of customers trust us for their favourite meals.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-orange-500 rounded-[40px] p-10 md:p-14 text-white">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">

            <div>
              <h3 className="text-4xl font-extrabold">
                10K+
              </h3>
              <p className="mt-2 text-orange-100">
                Happy Customers
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-extrabold">
                500+
              </h3>
              <p className="mt-2 text-orange-100">
                Food Items
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-extrabold">
                100+
              </h3>
              <p className="mt-2 text-orange-100">
                Restaurants
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-extrabold">
                4.9
              </h3>
              <p className="mt-2 text-orange-100">
                Average Rating
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl md:text-5xl font-extrabold">
            Ready for something delicious?
          </h2>

          <p className="mt-5 text-gray-600 text-lg">
            Discover your next favourite meal and order it today.
          </p>

          <Link to='/foodcart'>
          <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full font-semibold transition">
            Order Now
          </button>
          </Link>

        </div>
      </section>

    </div>
  );
}

export default About;