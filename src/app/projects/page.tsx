import React from 'react'

import Image from 'next/image'

export default function projects
() {
  return (
    <div className='h-screen  bg-gray-400 flex justify-center items-center'>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-4 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl  title-font mb-4 text-black font-bold">My Typescript Projects </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed  text-white  text-base"> Develops typesript projects including a calculator,Number Guessing Game,Currency converter,Countdown Timer,Student Management system,Atm Machine.</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3GqG8R5nBt41wv4cmB8ArhJEJeaaeLp6fkg&s"/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">

            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Calculator</h1>
            <p className="leading-relaxed">This is a cli base calculator.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6PPjOR77DSfpwaaO_Ibe-rnCc0uO5l1ZPqw&s"/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
     
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Number Guessing Game</h1>
            <p className="leading-relaxed">This is a cli base number guessing game.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2021/06/getty_currency-exchange_062321.jpeg.jpg"/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
          
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Currency Converter</h1>
            <p className="leading-relaxed">This is a cli base currency converter.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7RSMkaeFlWmJ5GGMFg7HmG0zF0XUwDDS_Hg&s"/>          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
          
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Student  Management System</h1>
            <p className="leading-relaxed">This is a cli base Student  Management System .</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Gw8VU6pnXuLbxBoCuP4xSnG7jkw_zIhAuA&s"/>

          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">

            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Count Down Timer </h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVtTGTUxooDz58yd7qjzHN-sTl31y7kPI4bQ&s"/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">

            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Atm Machine</h1>
            <p className="leading-relaxed">This is a cli base Atm machine.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}
