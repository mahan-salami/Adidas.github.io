import { FaFacebookF, FaInstagram, FaPhone, FaTelegramPlane, FaSearch } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center relative mt-10 rounded-t-2xl shadow-[0_-4px_20px_rgba(0,0,0,0.15)]">
      {/* خطوط کناری - ضخامت ثابت */}
      <div className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 space-y-4">
        <div className="w-12 md:w-16 lg:w-30 h-10 bg-gray-700 rounded -ml-7"></div>
        <div className="w-12 md:w-16 lg:w-30 h-10 bg-gray-700 rounded -ml-7"></div>
        <div className="w-12 md:w-16 lg:w-30 h-10 bg-gray-700 rounded -ml-7"></div>
      </div>

      <div className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 space-y-4">
        <div className="-mr-6 w-14 md:w-20 lg:w-35 h-10 bg-gray-700 rounded "></div>
        <div className="-mr-6 w-14 md:w-20 lg:w-35 h-10 bg-gray-700 rounded"></div>
        <div className="-mr-6 w-14 md:w-20 lg:w-35 h-10 bg-gray-700 rounded"></div>
      </div>

      {/* لوگو */}
      <div className="pt-6">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg"
          alt="Adidas Logo"
          className="mx-auto w-16 md:w-20"
        />
      </div>

      {/* جستجو */}
      <div className="flex justify-center items-center mt-4 px-4" dir="rtl">
        <input
          type="text"
          placeholder="جستجو کنید ..."
          className="w-full max-w-xs px-3 py-2 border border-gray-300 rounded-r-lg focus:outline-none text-sm"
        />
        <button className="bg-gray-300 px-3 py-2.5 rounded-l-lg">
          <FaSearch className="text-gray-700" />
        </button>
      </div>

      {/* منو */}
      <nav className="mt-4 flex flex-wrap justify-center gap-3">

        <a href="#" className="text-gray-700 text-sm hover:underline">
          محصولات
        </a>
        <a href="#" className="text-gray-700 text-sm hover:underline">
          نمایندگی‌ها
        </a>
        <a href="#" className="text-gray-700 text-sm hover:underline">
          تماس با ما
        </a>
        <a href="#" className="text-gray-700 text-sm hover:underline">
          درباره ما
        </a>

         <a href="#" className="text-gray-700 text-sm hover:underline">
          خانه
        </a>
      </nav>

      {/* آدرس */}
      <p className="mt-3 text-gray-600 text-sm px-4">
        تهران اشرفی اصفهانی بلوار مرزداران خیابان اطاعتی  ، پلاک ۳۴
      </p>

      {/* شبکه‌های اجتماعی */}
      <div className="flex justify-center gap-4 mt-4">
        <a href="#" className="text-black text-lg hover:text-gray-700">
          <FaFacebookF />
        </a>
        <a href="#" className="text-black text-lg hover:text-gray-700">
          <FaInstagram />
        </a>
        <a href="#" className="text-black text-lg hover:text-gray-700">
          <FaPhone />
        </a>
        <a href="#" className="text-black text-lg hover:text-gray-700">
          <FaTelegramPlane />
        </a>
      </div>

      {/* کپی‌رایت */}
      <div className="bg-gray-900 text-white text-xs mt-6 py-2">
        کلیه حقوق این سایت متعلق به آدیداس می‌باشد
      </div>
    </footer>
  );
}
