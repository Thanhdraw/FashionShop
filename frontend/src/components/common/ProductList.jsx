import products from "../../constants/products";
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container px-4 mx-auto">
        <h2 className="mb-8 text-3xl font-bold text-center text-gray-800 md:text-4xl">
          <span className="relative inline-block">
            Sản phẩm mới nhất
            <span className="absolute bottom-0 left-0 w-full h-1 bg-pink-500"></span>
          </span>
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-6 py-3 text-white transition-all duration-300 bg-pink-500 rounded-md hover:bg-pink-600 hover:shadow-lg">
            Xem thêm sản phẩm
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductList;
