import React from 'react';
import TopMenu from '../TopMenu';
import Footer from '../Footer';

const Page = () => {
  return (
    <section>
      <TopMenu />
      <div className='p-5 mb-20 mt-5'>
        <h1 className='text-2xl font-semibold'>Contact Us!</h1>
        <h2 style={{ textAlign: 'center' }} className='text-2xl font-semibold'>
          Welcome to <span id="W_Name">AI Content Generator</span>!
        </h2>

        <p style={{ fontSize: '17px' }}>
          Please email us if you have any queries about the site, advertising, or anything else.
        </p>

        <div style={{ textAlign: 'center' }}>
          <img
            alt="contact-us"
            height="87"
            loading="lazy"
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgcLPYLvBhQspUwGqwYdt1VcsaLeNn5tGh2EycKOIFQJN3UbGNdtuxqjZyArvangz-kgxJPl_li2g2T0G2ZvsjC7YDC6mbqPaG9dSw1uzK-r6ekNQfcTzM-bM7CKnnygPDhFNZ-E4Gipqo/w320-h87-rw/email-us-1805514__480.webp"
            width="320"
          />

          <p style={{ marginLeft: '25%' }}>
            <i className="fas fa-envelope-open-text" style={{ color: '#2c3e50', fontSize: '20px' }}></i>
            <b>
              <i>
                <span id="W_Email">
                  <a href="mailto:admin@techhittools.com">admin@techhittools.com</a>
                </span>
              </i>
            </b>
            <br />
            <i className="fab fa-whatsapp-square" style={{ color: '#3edc81', fontSize: '20px' }}></i>
            <b>
              <span id="W_whatsapp">
                <a href="tel:"></a>
              </span>
            </b>
            <br />
          </p>

          <h3 style={{ color: '#3e005d' }}>We will revert you as soon as possible...!</h3>
          <p style={{ color: '#3e005d', textAlign: 'center' }}>
            Thank you for contacting us! <br />
            <b>Have a great day</b>
          </p>
          <span style={{ fontSize: '1px', opacity: 0 }}>
            This page is generated with the help of{' '}
            <a href="https://www.blogearns.com/2021/06/free-contact-us-page-generator.html" style={{ color: 'inherit' }}>
              Contact Us Page Generator
            </a>
          </span>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Page;
