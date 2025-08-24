import React, { useState } from 'react'
import Logo from '../assets/images/Adidas_logo.png'
import { FaCartShopping } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";

const Navitem = [
  { id: 1, name: "فروشگاه", link: "/#Blogs" },
  { id: 2, name: "زنانه", link: "/#Home" },
  { id: 3, name: "مردانه ", link: "/#Shop" },
  { id: 4, name: "درباره ما ", link: "/#About" },
  { id: 5, name: "خانه", link: "/#Blogs" }
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    {/* کل سکشن استیکی */}
    <section className="w-full sticky top-0 z-50">
      {/* بخش تبلیغی */}
      <div className="bg-black text-white px-1 py-3">
        <div className="max-w-screen-xl mx-auto flex flex-col-reverse sm:flex-row justify-center items-center text-center">
          <button className="cursor-pointer flex flex-col bg-amber-50 text-black sm:mr-3 py-2 px-3 rounded-xl hover:bg-blue-600 hover:text-amber-50 transition delay-150 duration-300">
            کلیک کنید
          </button>
          <h1 className="flex text-xl md:mr-30 sm:ml-5" dir="rtl">
            ۳۰ درصد تخفیف پاییزه آدیداس
          </h1>
        </div>
      </div>

      {/* Navbar */}
      <nav className="w-full shadow-[3px_8px_44px_14px_rgba(0,_0,_0,_0.1)] py-3 bg-white">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between">
          
          {/* لوگو */}
          <img src={Logo} alt="Logo" className="w-[50px] mt-2 ml-3" />

          {/* منو (فقط دسکتاپ) */}
          <ul className="hidden lg:flex items-center gap-6 text-lg mx-auto">
            {Navitem.map((data) => (
              <li key={data.id}>
                <a
                  href={data.link}
                  className="hover:text-pink-600 transition-colors duration-200"
                >
                  {data.name}
                </a>
              </li>
            ))}
          </ul>

          {/* راست: دکمه و آیکون */}
          <div className="flex items-center gap-2 mr-5">
            <button className="bg-black rounded-lg text-amber-50 py-1 px-2">
              ایجاد حساب کاربری
            </button>
            <div className="bg-blue-500 px-2 py-2 rounded-lg text-amber-50 justify-center text-center cursor-pointer hover:bg-black hover:text-amber-50 transition delay-150 duration-300">
              <FaCartShopping className="justify-center text-center" />
            </div>

            {/* آیکون همبرگر فقط در موبایل */}
            <button 
              className="lg:hidden text-2xl text-black"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* منوی موبایل */}
        {isOpen && (
          <div className="lg:hidden bg-white shadow-md">
            <ul className="flex flex-col items-center gap-4 py-4">
              {Navitem.map((data) => (
                <li key={data.id}>
                  <a
                    href={data.link}
                    className="hover:text-pink-600 transition-colors duration-200"
                    onClick={() => setIsOpen(false)} 
                  >
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </section>
    </>
  )
}

export default Navbar
