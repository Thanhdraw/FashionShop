export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="px-6 py-24 text-center text-white shadow-lg rounded-b-3xl bg-gradient-to-r from-indigo-600 via-blue-600 to-blue-500">
        <h1 className="mb-6 text-5xl font-bold tracking-tight">
          Welcome to Fashion Shop
        </h1>
        <p className="max-w-xl mx-auto text-xl font-light opacity-90">
          Discover the latest trends and elevate your style
        </p>
        <button className="px-8 py-4 mt-8 font-semibold text-blue-600 transition-all duration-300 bg-white rounded-full shadow-md hover:bg-blue-50 hover:shadow-xl">
          Shop Now
        </button>
      </section>

      {/* Featured Products */}
      <section className="max-w-6xl px-6 py-16 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center text-gray-800">
          <span className="inline-block px-4 pb-2 border-b-4 border-blue-500">
            Featured Products
          </span>
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* Sample Product Cards */}
          {[1, 2, 3, 4].map((_, index) => (
            <div
              key={index}
              className="overflow-hidden transition-all duration-300 bg-white shadow-md rounded-xl hover:shadow-xl hover:-translate-y-2"
            >
              <div className="overflow-hidden">
                <img
                  src="https://product.hstatic.net/1000304105/product/ao-so-mi-nam-den1-t3321c8571__2__c5d7daba63cf4fdbae72f85f6fa433b2_master.jpg"
                  alt="Product"
                  className="object-cover w-full h-56 transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800">
                  Trendy Product
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-xl font-bold text-blue-600">$49.99</p>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-4 h-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                </div>
                <button className="w-full py-3 mt-4 text-white transition-all duration-300 bg-blue-600 rounded-lg hover:bg-blue-700">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 mt-8 bg-gray-50">
        <div className="max-w-6xl px-6 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center text-gray-800">
            <span className="inline-block px-4 pb-2 border-b-4 border-blue-500">
              Shop by Category
            </span>
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {["Women", "Men", "Accessories", "Footwear"].map(
              (category, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden transition-all duration-300 bg-white shadow-md rounded-xl group hover:shadow-xl"
                >
                  <img
                    src="/api/placeholder/400/320"
                    alt={category}
                    className="object-cover w-full h-64 transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                    <h3 className="text-2xl font-bold text-white">
                      {category}
                    </h3>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 translate-y-full bg-blue-600 group-hover:translate-y-0">
                    <p className="text-center text-white">Explore Collection</p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600">
        <div className="max-w-4xl px-6 mx-auto text-center text-white">
          <h2 className="mb-4 text-3xl font-bold">Stay Updated</h2>
          <p className="mb-8 text-lg opacity-90">
            Subscribe to our newsletter for exclusive offers and updates
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 text-gray-800 bg-white rounded-lg focus:outline-none"
            />
            <button className="px-6 py-3 font-semibold text-blue-600 transition-all duration-300 bg-white rounded-lg hover:bg-blue-50">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
