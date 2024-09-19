import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HeroSection = () => {
  return (
    
      <section className="bg-[url('/background.jpg')] bg-cover bg-center h-[400px]  dark:bg-gray-900">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl leading-tight md:leading-lose mb-4 text-4xl font-extrabold tracking-tight  md:text-5xl xl:text-6xl dark:text-white text-white">Most <span className='text-yellow-400'>Powerful AI</span> Based <span className='text-blue-500'> Tools</span></h1>
            <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl ">Latest online tools for you.</p>
        
            <button  className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center bg-blue-500 hover:bg-blue-700 text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Get started
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
            <Link href={'/contact'}>
            <button  className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-gray-300 rounded-lg hover:text-black hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Contact
            </button> 
            </Link>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <Image className='rounded-md' src="/download.png" width={400} height={200} alt="mockup"/>
        </div>                
    </div>
</section>
    
  )
}

export default HeroSection
