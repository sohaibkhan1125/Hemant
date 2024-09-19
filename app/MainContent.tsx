import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MainContent = () => {
  return (
    <div>
      <section className="bg-white text-black">
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="mx-auto max-w-lg text-center">
      <h2 className="text-3xl font-bold sm:text-4xl">Our Latest Tools</h2>

      <p className="mt-4">
        We provide latest ai content generators tools that's are very helpful for you and all of these tools are free for you.
      </p>
    </div>

    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <Link href={'/backlinks-checker'} className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
      >
      
        <Image src={'https://img.icons8.com/?size=80&id=Uz0Za42ThqGW&format=png'} alt='logo' width={50} height={50} />

        <h2 className="mt-4 text-xl font-bold ">Backlink Checker</h2>

        <p className="mt-1 text-sm ">
          By using this tool you can easily check number of backlinks of your website.
        </p>
     
      </Link>
      
      <Link href={'/domain-authority-checker'} className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
      >
      
       <Image src={'https://img.icons8.com/?size=48&id=63808&format=png'} alt='logo' width={50} height={50} />

        <h2 className="mt-4 text-xl font-bold ">Domain Authority Checker</h2>

        <p className="mt-1 text-sm ">
         By using this tool you can easily check any domain authority.
        </p>
      
      </Link>

      <Link href={'/word-counter'} className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
      >
      
       <Image src={'https://img.icons8.com/?size=48&id=13674&format=png'} alt='logo' width={50} height={50} />

        <h2 className="mt-4 text-xl font-bold ">Word Counter</h2>

        <p className="mt-1 text-sm ">
         By using this tool you can easily count number of words.
        </p>
     
      </Link>

      <Link href={'/article-rewriter'} className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
      >
      
        <Image src={'https://cdn-icons-png.flaticon.com/128/14029/14029439.png'} alt='logo' width={50} height={50} />

        <h2 className="mt-4 text-xl font-bold ">Article Rewriter</h2>

        <p className="mt-1 text-sm ">
         By using this tool you can easily rewrite any article.
        </p>
     
      </Link>

      <Link href={'/plagiarism-checker'} className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
      >
     
    
        <Image src={'https://img.icons8.com/?size=48&id=63246&format=png'} alt='logo' width={50} height={50} />

        <h2 className="mt-4 text-xl font-bold ">Plagiarism Checker</h2>

        <p className="mt-1 text-sm ">
          By using this tool you can easily check any content plagiarism.
        </p>
      
      </Link>

      <Link href={'/image-background-remover'} className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
      >
      
        <Image src={'https://img.icons8.com/?size=50&id=6rXf9gUJ6obX&format=png'} alt='logo' width={50} height={50} />

        <h2 className="mt-4 text-xl font-bold ">Image Background Remover</h2>

        <p className="mt-1 text-sm ">
          By using this tool you can easily remove image background.
        </p>
      
      </Link>

      <Link href={'/url-summarizer'} className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
      >
      
        <Image src={'https://img.icons8.com/?size=48&id=VJz2Ob51dvZJ&format=png'} alt='logo' width={50} height={50} />

        <h2 className="mt-4 text-xl font-bold ">URL Summarizer</h2>

        <p className="mt-1 text-sm ">
          By using this tool you can easily extract text from any url.
        </p>
      
      </Link>

      <Link href={'/password-generator'} className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
      >
      
        <Image src={'https://img.icons8.com/?size=48&id=16204&format=png'} alt='logo' width={50} height={50} />

        <h2 className="mt-4 text-xl font-bold ">Password Generator</h2>

        <p className="mt-1 text-sm ">
          By using this tool you can easily generate strong password.
        </p>
      
      </Link>

      <Link href={'/qr-code-maker'} className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
      >
      
        <Image src={'https://img.icons8.com/?size=48&id=13019&format=png'} alt='logo' width={50} height={50} />

        <h2 className="mt-4 text-xl font-bold ">QR Code Generator</h2>

        <p className="mt-1 text-sm ">
          By using this tool you can easily generate strong qr code.
        </p>
      
      </Link>
    </div>

    <div className="mt-12 text-center">
      <button       className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
      >
      
        Get Started Today
        </button> 
      
    </div>
  </div>
</section>
    </div>
  )
}

export default MainContent
