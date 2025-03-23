import { useParams } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "Thời trang nữ",
    image: "/api/placeholder/400/500",
    link: "#",
    description: "Khám phá bộ sưu tập thời trang dành cho phái đẹp",
  },
  {
    id: 2,
    name: "Thời trang nam",
    image: "/api/placeholder/400/500",
    link: "#",
    description: "Phong cách lịch lãm và cá tính cho quý ông",
  },
  {
    id: 3,
    name: "Phụ kiện",
    image: "/api/placeholder/400/500",
    link: "#",
    description: "Hoàn thiện phong cách với các phụ kiện thời trang",
  },
];

const CategoryPage = () => {
  const { slug } = useParams(); // Lấy slug từ URL nếu có dùng Router

  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container max-w-6xl px-4 mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-4xl font-bold text-gray-800">
            {slug ? `Danh mục: ${slug}` : "Danh mục sản phẩm"}
          </h2>
          <div className="w-20 h-1 mx-auto mb-6 bg-pink-500 rounded-full"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Khám phá các bộ sưu tập thời trang đa dạng và phong cách
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative overflow-hidden transition-all duration-300 shadow-lg rounded-xl group hover:shadow-xl"
            >
              <img
                src={category.image}
                alt={category.name}
                className="object-cover w-full transition duration-700 h-96 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black via-black/50 to-transparent opacity-80">
                <div className="px-6 text-center transition-all duration-500 transform translate-y-8 group-hover:translate-y-0">
                  <h3 className="mb-3 text-2xl font-bold text-white">
                    {category.name}
                  </h3>
                  <p className="mb-5 text-gray-200 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                    {category.description}
                  </p>

                  <a
                    href={category.link}
                    className="inline-block px-6 py-3 font-medium text-white transition duration-300 border-2 border-white rounded-full hover:bg-pink-500 hover:border-pink-500 hover:scale-105"
                  >
                    Xem ngay
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-block px-8 py-4 font-medium text-white transition duration-300 bg-pink-500 rounded-full shadow-md hover:bg-pink-600 hover:shadow-lg"
          >
            Xem tất cả danh mục
          </a>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
