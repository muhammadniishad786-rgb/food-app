const categories = [
  {
    id: 1,
    name: "Burger",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400",
  },
  {
    id: 2,
    name: "Pizza",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400",
  },
  {
    id: 3,
    name: "Chicken",
    image:
      "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400",
  },
  {
    id: 4,
    name: "Pasta",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400",
  },
  {
    id: 5,
    name: "Salad",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
  },
  {
    id: 6,
    name: "Dessert",
    image:
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=400",
  },
  {
    id: 7,
    name: "Drinks",
    image:
      "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?w=400",
  },
  {
    id: 8,
    name: "Sea Food",
    image:
      "https://images.unsplash.com/photo-1559847844-5315695dadae?w=400",
  },
];

function Category() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-orange-500 font-semibold uppercase tracking-widest">
            Categories
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-3">
            Browse By Category
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Discover your favourite meals from different food categories.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">

          {categories.map((item) => (
            <div
              key={item.id}
              className="group bg-orange-50 rounded-3xl p-6 cursor-pointer hover:bg-orange-500 transition-all duration-300 hover:-translate-y-2 shadow-sm hover:shadow-xl"
            >
              <div className="overflow-hidden rounded-full w-32 h-32 mx-auto">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <h3 className="mt-6 text-center text-xl font-semibold text-gray-800 group-hover:text-white">
                {item.name}
              </h3>

              <p className="text-center text-sm text-gray-500 mt-2 group-hover:text-orange-100">
                Explore Delicious {item.name}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Category;