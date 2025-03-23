const ProductCard = ({ product }) => {
  return (
    <div className="relative overflow-hidden transition-all duration-300 bg-white rounded-lg shadow-md hover:shadow-xl group min-h-[450px] flex flex-col">
      <div className="h-64 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col flex-grow p-5 text-center">
        <h3 className="mb-2 text-lg font-semibold text-gray-800">
          {product.name}
        </h3>
        <p className="mb-4 text-xl font-bold text-pink-500">
          {product.price.toLocaleString()} đ
        </p>
        <div className="mt-auto">
          <button className="w-full px-4 py-2 text-white transition-colors duration-300 bg-pink-500 rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-opacity-50">
            Thêm vào giỏ
          </button>
        </div>
      </div>
      <div className="absolute top-0 right-0 p-2 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
        <span className="px-3 py-1 text-sm font-medium text-white bg-pink-500 rounded-full">
          Mới
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
