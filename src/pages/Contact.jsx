import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
} from "lucide-react";

function Contact() {
  return (
    <div className="bg-white text-gray-900">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-100">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-24">

          <div className="text-center max-w-3xl mx-auto">

            <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-semibold text-sm">
              <MessageCircle size={18} />
              Get In Touch
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Let's Talk About
              <br />
              <span className="text-orange-500">
                Your Food Experience.
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              Have a question, need help with your order, or want to
              work with us? Send us a message and our team will be
              happy to help.
            </p>

          </div>

        </div>
      </section>


      {/* ================= CONTACT SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-5 gap-10">

          {/* ================= LEFT SIDE ================= */}
          <div className="lg:col-span-2">

            <span className="text-orange-500 font-bold uppercase tracking-wider text-sm">
              Contact Us
            </span>

            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold">
              We're here to help.
            </h2>

            <p className="mt-5 text-gray-600 leading-7">
              Whether you have a question about your order, delivery,
              restaurants, or anything else, feel free to reach out.
            </p>


            {/* CONTACT DETAILS */}
            <div className="mt-10 space-y-7">

              {/* EMAIL */}
              <div className="flex items-start gap-4">

                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center shrink-0">
                  <Mail
                    size={22}
                    className="text-orange-500"
                  />
                </div>

                <div>
                  <h3 className="font-bold text-lg">
                    Email Us
                  </h3>

                  <p className="text-gray-500 mt-1">
                    support@foodapp.com
                  </p>
                </div>

              </div>


              {/* PHONE */}
              <div className="flex items-start gap-4">

                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center shrink-0">
                  <Phone
                    size={22}
                    className="text-orange-500"
                  />
                </div>

                <div>
                  <h3 className="font-bold text-lg">
                    Call Us
                  </h3>

                  <p className="text-gray-500 mt-1">
                    +91 9778580349
                  </p>
                </div>

              </div>


              {/* LOCATION */}
              <div className="flex items-start gap-4">

                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin
                    size={22}
                    className="text-orange-500"
                  />
                </div>

                <div>
                  <h3 className="font-bold text-lg">
                    Our Location
                  </h3>

                  <p className="text-gray-500 mt-1 leading-6">
                    Kochi, Kerala
                    <br />
                    India
                  </p>
                </div>

              </div>


              {/* WORKING HOURS */}
              <div className="flex items-start gap-4">

                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center shrink-0">
                  <Clock
                    size={22}
                    className="text-orange-500"
                  />
                </div>

                <div>
                  <h3 className="font-bold text-lg">
                    Working Hours
                  </h3>

                  <p className="text-gray-500 mt-1">
                    Monday - Sunday
                  </p>

                  <p className="text-gray-500">
                    9:00 AM - 10:00 PM
                  </p>
                </div>

              </div>

            </div>

          </div>


          {/* ================= RIGHT FORM ================= */}
          <div className="lg:col-span-3">

            <div className="bg-white border border-gray-100 rounded-3xl shadow-xl p-6 md:p-10">

              <h2 className="text-2xl md:text-3xl font-extrabold">
                Send us a message
              </h2>

              <p className="mt-2 text-gray-500">
                Fill in the details below and we'll get back to you.
              </p>


              <form className="mt-8 space-y-6">

                {/* NAME + EMAIL */}
                <div className="grid md:grid-cols-2 gap-5">

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Your Name
                    </label>

                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-5 py-4 rounded-xl border border-gray-200 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                    />
                  </div>


                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Email Address
                    </label>

                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-5 py-4 rounded-xl border border-gray-200 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                    />
                  </div>

                </div>


                {/* PHONE */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                  />
                </div>


                {/* SUBJECT */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Subject
                  </label>

                  <select
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 outline-none bg-white transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                  >
                    <option value="">
                      Select a subject
                    </option>

                    <option value="order">
                      Order Issue
                    </option>

                    <option value="delivery">
                      Delivery Issue
                    </option>

                    <option value="restaurant">
                      Restaurant Partnership
                    </option>

                    <option value="feedback">
                      Feedback
                    </option>

                    <option value="other">
                      Other
                    </option>
                  </select>
                </div>


                {/* MESSAGE */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Message
                  </label>

                  <textarea
                    rows="6"
                    placeholder="Tell us how we can help..."
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 outline-none resize-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                  ></textarea>
                </div>


                {/* SUBMIT */}
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition shadow-lg shadow-orange-200"
                >
                  <Send size={18} />
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>


      {/* ================= BOTTOM CTA ================= */}
      <section className="px-6 pb-20">

        <div className="max-w-5xl mx-auto bg-orange-500 rounded-[35px] p-10 md:p-14 text-center text-white">

          <div className="mx-auto w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
            <MessageCircle size={28} />
          </div>

          <h2 className="mt-6 text-3xl md:text-4xl font-extrabold">
            Have a question about your order?
          </h2>

          <p className="mt-4 text-orange-100 max-w-2xl mx-auto">
            Our support team is ready to help you with orders,
            deliveries, payments and more.
          </p>

          <button className="mt-8 bg-white text-orange-500 hover:bg-orange-50 px-8 py-4 rounded-full font-bold transition">
            Contact Support
          </button>

        </div>

      </section>

    </div>
  );
}

export default Contact;
