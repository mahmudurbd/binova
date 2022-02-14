import React from 'react';
import './Footer.css';
import logo from '../../../../../images/logo.png';
import payment from '../../../../../images/payment-footer.png';

const Footer = () => {
    const date = new Date();
    let year = date.getFullYear();
    return (
        
          
<div class="footer-area pt-5">
 
  <footer
          class="text-center text-md-start text-white">
   
    <div class="container p-4 pb-0">
     
      <section class="">
       
        <div class="row">
          
          <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <img src={logo} alt="" />
            <p className='mt-3'>
                Call Customer Services, We Support 24/7 :
            </p>
            <span style={{fontFamily: 'Poppins',color: '#8CC32E',fontWeight: '700'}}>84-0123-456-789</span>
            <p style={{color: '#8CC32E'}} className='mt-3'>
                Address :
            </p>
            <span>PO Box 1622 Vissaosang Street West</span>

            <br />
            <div className='social-link'>
            <a href='https://facebook.com/'
               class="btn btn-floating text-white"
               role="button"
               ><i class="fa-brands fa-facebook-f"></i></a>
            <a href='https://twitter.com/'
               class="btn btn-floating m-1 text-white"
               role="button"
               ><i class="fa-brands fa-twitter"></i></a>
            <a href='https://www.pinterest.com/'
               class="btn btn-floating m-1 text-white"
               role="button"
               ><i class="fa-brands fa-pinterest"></i>
               </a>
            <a href='https://vimeo.com/'
               class="btn btn-floating m-1 text-white"
               role="button"
               ><i class="fa-brands fa-vimeo-v"></i>
               </a>
            <a href='https://www.instagram.com/'
               class="btn btn-floating m-1 text-white"
               role="button"
               ><i class="fa-brands fa-instagram"></i>
               </a>
            </div>
          </div>
          

          <hr class="w-100 clearfix d-md-none" />

          
          <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 class="text-uppercase mb-4 font-weight-bold">Customer Service</h6>
            <p>
              <a href='/' class="text-white">Contact us</a>
            </p>
            <p>
              <a href='/' class="text-white">Help and advice</a>
            </p>
            <p>
              <a href='/' class="text-white">Shipping & Returns</a>
            </p>
            <p>
              <a href='/' class="text-white">Terms and conditions</a>
            </p>
          </div>
          

          <hr class="w-100 clearfix d-md-none" />

          
          <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 class="text-uppercase mb-4 font-weight-bold">
              About Us
            </h6>
            <p>
              <a href="/" class="text-white">Who We Are ?</a>
            </p>
            <p>
              <a href="/" class="text-white">Corporate Responsibility</a>
            </p>
            <p>
              <a href="/" class="text-white">Careers</a>
            </p>
            <p>
              <a href="/" class="text-white">Privacy Policy</a>
            </p>
          </div>

          
          <hr class="w-100 clearfix d-md-none" />

          
          
          
        </div>
        
      </section>
      

      <hr class="my-3"/>

     
      <section class="p-3 pt-0">
        <div class="row d-flex align-items-center">
          
          <div class="col-md-7 col-lg-8 text-center text-md-start">
            
          <div class="p-3">
            © Copyright {year}
               <a class="ms-1 text-white text-decoration-none" href="/"
                 >Binova</a
                > - All Right Reserved
            </div>
            
          </div>
          

          
          <div class="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
            <img src={payment} alt="" />
          </div>
          
        </div>
      </section>
      
    </div>
    
  </footer>
  
</div>
    );
};

export default Footer;