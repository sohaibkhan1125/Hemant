import React from 'react'

const layout = () => {
  return (
    <main className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 mt-5'>
      <section className='bg-gray-200 rounded h-20 flex flex-col items-center justify-center text-center '>
        <div className='flex flex-col'>
          <div>
        <img src="https://img.icons8.com/?size=80&id=Uz0Za42ThqGW&format=png" className='h-20 ' alt="" />
        </div>
         <h2 className='font-semibold text-2xl'>Backlink Checker</h2>
         </div>
      </section>
    </main>
  )
}

export default layout
