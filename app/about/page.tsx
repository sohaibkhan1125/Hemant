import React from 'react';
import TopMenu from '../TopMenu';
import Footer from '../Footer';

const Page = () => {
  return (
    <section className="bg-gray-50 min-h-screen flex flex-col justify-between">
      <TopMenu />
      
      <div className="container mx-auto px-6 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About <b>Techy Hit Tools</b></h1>
          <p className="text-lg text-gray-700 mb-4">
            Welcome to <b>Techy Hit Tools</b>, where we share information related to online tools. We're dedicated to providing you with the very best information and knowledge on the above-mentioned topics. Our about us page is generated with the help of <a href="https://raptorkit.com/about-us-page-generator" className="text-yellow-500 underline hover:text-yellow-600 transition-colors duration-300">About Us Page Generator</a>.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            We hope you found all of the information on <b>Techy Hit Tools</b> helpful, as we love to share it with you.
          </p>
          <p className="text-lg text-gray-700">
            If you require any more information or have any questions about our site, please feel free to contact us by email at <b>admin@techyhittools.com</b>.
          </p>
        </div>
      </div>

      <Footer />
    </section>
  );
}

export default Page;
