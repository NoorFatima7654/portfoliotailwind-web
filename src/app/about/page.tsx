import React from 'react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className=' h-screen  bg-gray-400 flex justify-center items-center'>
      <div className='flex h-[465] w-11/12'>
      <div className=' flex flex-col flex-1 gap-4 justify-center px-4'>
      <h1 className='font-bold  text-6xl'> Noor Fatima</h1>
      <p className='font-normal text-3xl'>Hi, I`m Noor Fatima, a  highly skilled web developer with extensive 
        expertise in creating dynamic
      
      and responsive web applications.  

   
       Currently, I`m part of an amazing training program at the Governor House, which has helped me grow tremendously.
        This program is guided by some of the most incredible mentors.

In addition to my web development skills, I have strong command over programming languages such as HTML, CSS, JavaScript, TypeScript, and Next.js..

</p>
</div>
      <div className=' flex-1'> 
        <div>
      <Image src='/images/noor.jpeg'
      alt="picture"
      width={400}
      height={400}
      className='rounded-full mr-6'/>
      </div>
    </div>
    </div>
    </div>
  )
}
      
      