import React from "react";
import Logo from "../assets/images/Adidas_logo.png"
import Shoes from "../assets/images/shoes 2.png"
import Shirt from "../assets/images/shirt adidas 1.png"
import Model from "../assets/images/model - Copy.png"
/**
 * سکشن محصولات آدیداس – مطابق لِی‌اوت اسکرین‌شات
 * - راست‌به‌چپ
 * - سه کارت (تخفیف/تی‌شرت/کفش)
 * - دایره بالای راست با درصد تخفیف
 * - لوگوها و دکمه‌ها مطابق چینش عکس
 * - شامل شکل منحنیِ خاکستریِ گوشه‌ی بالا-راست
 */
export default function AdidasSection() {
  return (
    <section dir="rtl" className="relative w-full bg-white overflow-hidden mt-15 ">
      {/* شکل منحنی گوشه‌ی بالا راست */}
      <div className="pointer-events-none absolute top-4 -right-50 w-[630px] h-[630px] rounded-full bg-gray-200" />

      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-12">
        {/* تیتر */}
        <h2 className="text-center text-xl md:text-2xl font-bold ">محصولات</h2>
         <div className="flex items-center justify-center ">
          <div className="bg-black px-1 py-0.5 w-[120px] rounded-xl mb-15"></div>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* کارت تخفیف – ستون چپ */}
          <div className="bg-[#9BA9FF]  rounded-2xl p-5 md:p-6 lg:p-7 shadow-md relative min-h-[330px] flex items-stretch transition-all duration-300 text-gray-800 hover:bg-[#4f74efe2] hover:text-white hover:-translate-y-4">
            {/* دایره درصد 
            <div className="absolute top-5 right-5 w-16 h-16 bg-white text-[#3949AB] rounded-full flex items-center justify-center font-bold shadow-sm select-none">
              ۲۵٪
            </div>
            */}


            {/* محتوا */}
            <div className="flex w-full gap-4 md:gap-6 items-end ">
              {/* تصویر مدل/هودی */}
              <img
                className="h-[430px] md:h-[260px] md:-mr-4 self-end drop-shadow lg:h-[430px] lg:-mb-7"
                alt="هودی آدیداس"
                src={Model}
              />

              {/* متن و دکمه */}
              <div className="flex-1 flex flex-col items-end justify-center text-black -mt-7  hover:text-white transition-all duration-300 drop-shadow-[0_1px_0_rgba(0,0,0,0.25)]">

                <p className="font-extrabold text-2xl leading-8 drop-shadow-[0_1px_0_rgba(0,0,0,0.25)] mb-17  " dir="rtl">
                  ۲۵٪ تخفیف ویژه پاییزه
                  <br />
                  آدیداس
                  <br />
                  تا آخر مهر ماه
                </p>
                <button className=" inline-flex items-center justify-center rounded-lg bg-gray-800 hover:bg-black text-white px-4 py-2 text-sm transition mb-14">
                  اطلاعات بیشتر
                </button>
              </div>
            </div>

            {/* لوگو پایین راست کارت */}
            <img
              className="absolute bottom-4 left-10 w-14 opacity-90"
              alt="adidas logo"
              src={Logo}
            />
          </div>

          {/* ستون راست: دو کارت روی‌هم */}
          <div className="flex flex-col gap-6">
            {/* کارت تی‌شرت ورزشی */}
            <div className="bg-gray-300 rounded-2xl px-6 py-5 shadow-md flex items-center justify-between min-h-[160px] transition-all duration-300 hover:-translate-y-5">
              {/* سمت راست: لوگو + متن + دکمه */}
              <div className="flex flex-col items-end text-black">
                <img
                  className="w-15 mb-1 ml-6"
                  alt="adidas logo"
                   src={Logo}
                />
                <div className="font-extrabold text-lg mb-3 drop-shadow-[0_1px_0_rgba(0,0,0,0.25)]">
                  تی‌شرت های ورزشی
                </div>
                <button className="inline-flex items-center justify-center rounded-lg bg-gray-800 hover:bg-black text-white px-4 py-2 text-sm transition">
                  مشاهده محصولات
                </button>
              </div>

              {/* سمت چپ: تصویر تی‌شرت */}
              <img
                className="w-32 md:w-36 lg:w-40 object-contain ml-7"
                alt="تی‌شرت ورزشی"
                src={Shirt}
              />
            </div>

            {/* کارت کفش اسپرت */}
            <div className="bg-[#ff8c8c] rounded-2xl px-6 py-5 shadow-md flex items-center justify-between min-h-[160px] hover:bg-[#ff5151e2] transition delay-150 duration-300  hover:-translate-y-3">
              {/* سمت راست: لوگو + متن + دکمه */}
              <div className="flex flex-col items-end text-black">
                <img
                  className="w-15 mb-1 ml-6"
                  alt="adidas logo"
                  src={Logo}
                />
                <div className="font-extrabold text-lg mb-3 drop-shadow-[0_1px_0_rgba(0,0,0,0.25)]">
                  کفش های اسپرت
                </div>
                <button className="inline-flex items-center justify-center rounded-lg bg-gray-800 hover:bg-black text-white px-4 py-2 text-sm transition">
                  مشاهده محصولات
                </button>
              </div>

              {/* سمت چپ: تصویر کفش */}
              <img
                className="w-[100px] md:w-40 lg:w-[220px] object-contain"
                alt="کفش اسپرت"
                src={Shoes}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
