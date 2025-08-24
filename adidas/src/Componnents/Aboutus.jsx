import React from 'react'
import i1 from '../assets/images/adidas-front.png'

const Aboutus = () => {
  return (
    <>
    {/*text*/}
    <div >
        <h1 className=' text-black justify-center text-center mt-5 text-2xl'>درباره ما</h1>
        <div className="flex items-center justify-center">
  <div className="bg-black px-1 py-0.5 w-[80px]  rounded-xl ">
  </div>
</div>
    </div>
    

     {/*image*/}
<div className="flex flex-col sm:flex-row items-center sm:items-start">
  {/* بخش عکس */}
  <img
    src={i1}
    alt=""
    // گوشه‌های گرد + فاصله بالا/پایین + سایه
    // روی گوشی وسط‌چین میشه (mx-auto)
    // از sm به بالا margin-left می‌گیره تا از متن فاصله داشته باشه
    className="rounded-xl mt-3 mb-3 shadow-[13px_8px_44px_14px_rgba(0,_0,_0,_0.1)] sm:ml-10 mx-auto"
  />

  {/* بخش متن */}
  <div
    // توی حالت موبایل متن میره زیر عکس (flex-col)
    // margin-top فقط توی موبایل، ولی در سایز بزرگتر حذف میشه
    // متن توی موبایل وسط‌چین میشه، در دسکتاپ چپ‌چین
    className="flex flex-col sm:ml-10 mt-4 sm:mt-0 text-center sm:text-right"
  >
    <h1 className='text-xl mt-30 mr-5' >
    فروشگاه آدیداس، مقصدی مطمئن برای علاقه‌مندان به دنیای ورزش و مد است. ما مفتخریم که مجموعه‌ای گسترده از محصولات اورجینال آدیداس، شامل کفش، لباس و تجهیزات ورزشی با بالاترین کیفیت را در اختیار مشتریان خود قرار دهیم.

هدف ما ارائه تجربه‌ای بی‌نظیر از خرید است؛ از انتخاب محصول تا دریافت سریع و مطمئن سفارشات، همه‌چیز با دقت و تعهد انجام می‌شود. ما معتقدیم ورزش و سبک زندگی سالم، با کیفیت و راحتی آغاز می‌شود و تلاش می‌کنیم بهترین‌ها را برای شما فراهم کنیم.

با فروشگاه آدیداس، قدم به دنیای ورزش، انرژی و استایل بگذارید و از خریدی مطمئن و لذت‌بخش لذت ببرید.
    </h1>
  </div>
</div>

    
    </>
  )
}

export default Aboutus