import React from "react";
import { Heart, Plus } from "lucide-react";

// 📌 محصولات نمونه
import shoeImg from "../assets/images/Adidas-Running-Shoes-PNG-Download-Image.png";
import capImg from "../assets/images/Adidas-Running-Shoes-PNG-Download-Image.png";
import pantsImg from "../assets/images/pants.png";
import shirtImg from "../assets/images/Adidas-Running-Shoes-PNG-Download-Image.png";

const products = [
  { title: "کفش آدیداس اولترا", price: "۵۰۰۰۰۰", image: shoeImg },
  { title: "کلاه آدیداس", price: "۱۲۵۰۰۰", image: capImg },
  { title: "شلوار آدیداس", price: "۳۰۰۰۰۰", image: pantsImg },
  { title: "پیراهن منچستر یونایتد", price: "۶۰۰۰۰۰", image: shirtImg },
];

const Women = () => {
  return (
    <>
      {/* عنوان بخش */}
      <div className="justify-center mt-12 mb-6">
        <h1 className="text-center text-2xl font-bold">پوشاک زنانه</h1>
        <div className="flex items-center justify-center mt-2">
          <div className="bg-black px-1 py-0.5 w-[120px] rounded-xl"></div>
        </div>
      </div>

      {/* محصولات */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-30 mb-10">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-gray-200 rounded-2xl shadow-md p-2 flex flex-col relative"
          >
            {/* آیکون‌ها */}
            <div className="absolute top-3 left-3 flex flex-col gap-2">
              <button className="bg-white p-1 rounded-full shadow hover:scale-110 transition">
                <Heart size={18} className="text-gray-600" />
              </button>
              <button className="bg-white p-1 rounded-full shadow hover:scale-110 transition">
                <Plus size={18} className="text-gray-600" />
              </button>
            </div>

            {/* تصویر */}
            <img
              src={product.image}
              alt={product.title}
              className="h-30 mx-auto"
            />

            {/* متن */}
            <h3 className="text-base font-medium text-gray-800 text-center">
              {product.title}
            </h3>
            <p className="text-sm text-gray-500 text-center mt-1">
              قیمت: {product.price} تومان
            </p>

            {/* امتیاز ⭐⭐⭐⭐⭐ */}
            <div className="flex justify-center mt-2 text-yellow-500">
              {"★★★★★"}
            </div>

            {/* دکمه */}
            <button className="mt-4 px-4 py-1 bg-black text-white rounded-lg text-sm hover:bg-gray-800">
              اطلاعات بیشتر
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Women;
