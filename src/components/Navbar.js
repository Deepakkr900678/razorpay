import React from 'react'
import logo from "../images/logo.svg"
import indianFlag from "../images/india-flag.svg"
import heroillustration from "../images/hero-illustration.jpg"
import heroshap from "../images/hero-shape.svg"
import featuresection1 from "../images/feature-section1-dottedrows.png"
import paymentsuite from "../images/payment-suite.png"
import paymentlink from "../images/payment-link-icon.svg"
import xflame1 from "../images/x-flame-1.png"
import xflame2 from "../images/x-flame-2.png"
import razorpayX from "../images/razorpayX.svg"
import buisnessbanking from "../images/buisness-banking.png"
import currenticon from "../images/current-icon.svg"
import featuresection1dottedrows from "../images/feature-section1-dottedrows.png"
import razorpayXicon from "../images/razorpayXicon.svg"
import logodark from "../images/logo-dark.svg"
import footercertificate1 from "../images/footer-certificate-1.png"
import footercertificate2 from "../images/footer-certificate-2.jpg"
import facebookicon from "../images/facebook-icon.svg";
import instagramicon from "../images/instagram-icon.svg";
import twittericon from "../images/twitter-icon.svg"
import githubicon from "../images/github-icon.svg"
import linkedinicon from "../images/linkedin-icon.svg"

export default function Navbar() {
  return (
    <>
      <div class="overflow-x-hidden relative w-full">
        <nav class="bg-deepBlue" >
          <div class="relative w-[1080px] mx-auto flex items-center justify-between ">
            <a href="/">
              <img src={logo} width="125px" height="30px" />
            </a>
            <ul class="flex space-x-6">
              <li
                class="relative text-white transition-all duration-200 cursor-pointer font-mullish py-7 hover:text-lightBlue group">
                <a href="#">Payments</a>

                <div
                  class="absolute bottom-0 hidden w-full h-1 transition-all duration-200 bg-lightBlue group-hover:block">
                </div>
              </li>

              <li
                class="relative text-white transition-all duration-200 cursor-pointer font-mullish py-7 hover:text-lightBlue group">
                <a href="#">Banking</a>

                <div
                  class="absolute bottom-0 hidden w-full h-1 transition-all duration-200 bg-lightBlue group-hover:block">
                </div>
              </li>

              <li
                class="relative text-white transition-all duration-200 cursor-pointer font-mullish py-7 hover:text-lightBlue group">
                <a href="#">Corporate Card</a>
              </li>

              <li
                class="relative text-white transition-all duration-200 cursor-pointer font-mullish py-7 hover:text-lightBlue group">
                <a href="#">Payroll</a>

              </li>

              <li
                class="relative text-white transition-all duration-200 cursor-pointer font-mullish py-7 hover:text-lightBlue group">
                <a href="#">Resources</a>

                <div
                  class="absolute bottom-0 hidden w-full h-1 transition-all duration-200 bg-lightBlue group-hover:block">
                </div>
              </li>

              <li
                class="relative text-white transition-all duration-200 cursor-pointer font-mullish py-7 hover:text-lightBlue group">
                <a href="#">Support</a>

                <div
                  class="absolute bottom-0 hidden w-full h-1 transition-all duration-200 bg-lightBlue group-hover:block">
                </div>
              </li>

              <li
                class="relative text-white transition-all duration-200 cursor-pointer font-mullish py-7 hover:text-lightBlue group">
                <a href="#">Pricing</a>

                <div
                  class="absolute bottom-0 hidden w-full h-1 transition-all duration-200 bg-lightBlue group-hover:block">
                </div>
              </li>
            </ul>

            <div class="flex space-x-6">
              <img src={indianFlag} width="28px" height="20px" />
              <button
                class="px-5 py-3 text-sm font-bold text-white border rounded-sm font-mullish border-lightBlue">Log
                in</button>

              <button
                class="flex px-4 py-3 text-sm font-bold transition-all duration-200 bg-white border rounded-sm font-mullish text-lightBlue300 hover:text-lightBlue500">Sign
                Up
                <svg viewBox="0 0 24 24" focusable="false" class="w-[14px] h-[14px] ml-3">
                  <path fill="currentColor" d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
                </svg></button>
            </div>

          </div>
        </nav>

        <section class="relative bg-deepBlue">

          <div class="w-10/12 max-w-[1080px] flex flex-row justify-between items-center mx-auto ">
            <div class="space-y-8">
              <h1 class="font-mullish font-bold text-[40px] leading-[1.2] text-white">Power your finance, grow your
                business</h1>
              <div class="w-6 h-1 bg-greenLight"></div>
              <p class="font-mullish text-[18px] leading-7 text-white opacity-70">
                Accept payments from customers. Automate payouts to vendors &
                employees. Never run out of working capital.
              </p>
              <button class="bg-lightBlue text-white  py-[14px] px-[18px] rounded-md font-mullish font-bold
            hover:bg-lightBlue500 transition-all duration-200">Sign Up Now</button>
            </div>
            <img src={heroillustration} alt="" class="w-full max-w-[680px]" />
          </div>

          <div class="w-[103%] absolute left-0 right-0">
            <img src={heroshap} alt="" class="object-fill w-full " />
          </div>
        </section>

        <section class="relative mt-[190px] overflow-hidden">
          <img src={featuresection1} alt="" loading="lazy" width="233" height="167"
            class="absolute -top-[8rem] left-[10rem] inline-block -z-10" />

          <img src={featuresection1} alt="" loading="lazy" width="233" height="167"
            class="absolute top-[3rem] right-0 inline-block rotate-180" />


          <div class="relative w-11/12 max-w-[1080px] mx-auto pt-4">
            <h2 class="font-mullish text-center text-2xl leading-[1.2] font-extrabold">Accept Payments with Razorpay
              Payment Suite</h2>
            <div class="w-6 h-1 mx-auto mt-4 mb-6 bg-greenLight"></div>

            <div class="w-full min-h-[520px] bg-white flex rounded-md relative p-10 py-12 border">
              <div class="flex flex-col justify-between w-full">
                <h3 class="font-mullish text-[28px] leading-10 font-bold max-w-[500px]">
                  Supercharge your business with the all‑powerful
                  <span class="text-lightBlue">Payment Gateway</span>
                </h3>
                <ul class="space-y-2">
                  <li class="flex items-center space-x-2 font-mullish">

                    <i data-feather="check" class="text-greenLight"></i>
                    <span>100+ Payment Methods</span>
                  </li>
                  <li class="flex items-center space-x-2 font-mullish">
                    <i data-feather="check" class="text-greenLight"></i>
                    <span> Industry Leading Success Rate </span>
                  </li>
                  <li class="flex items-center space-x-2 font-mullish">
                    <i data-feather="check" class="text-greenLight"></i>
                    <span> Superior Checkout Experience </span>
                  </li>
                  <li class="flex items-center space-x-2 font-mullish">
                    <i data-feather="check" class="text-greenLight"></i>
                    <span> Easy to Integrate </span>
                  </li>
                  <li class="flex items-center space-x-2 font-mullish">
                    <i data-feather="check" class="text-greenLight"></i>
                    <span> Instant Settlements from day 1 </span>
                  </li>
                  <li class="flex items-center space-x-2 font-mullish">
                    <i data-feather="check" class="text-greenLight"></i>
                    <span> In-depth Reporting and Insights </span>
                  </li>
                </ul>


                <div class="flex flex-row items-center space-x-4 ">
                  <button class="bg-lightBlue w-fit text-white py-[14px] px-[18px] rounded-md
                    font-mullish font-bold hover:bg-lightBlue500 translate-all duration-200">Sign Up Now</button>

                  <div class="flex items-center cursor-pointer group">
                    <a href="#"
                      class="font-bold transition-all duration-200 font-mullish text-lightBlue500 group-hover:text-grayBlue">Know
                      More</a>
                    <i data-feather="chevron-right"
                      class="w-5 h-5 transition-all duration-200 text-lightBlue500 group-hover:text-grayBlue"></i>
                  </div>
                </div>

              </div>
              <img src={paymentsuite} alt="" class="max-w-[600px] absolute right-0 bottom-0" />

            </div>

            <div class="grid w-full grid-cols-3 gap-4 mt-10">
              <div class="w-full min-h-[15rem] relative cursor-pointer">
                <img src={paymentlink} alt="" class="bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-[8]
                    transition-all duration-200"/>

                <svg viewBox="0 0 349.32501220703125 225" xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  class="stroke-1 stroke-[#818597] h-full w-full absolute z-[9] transition-all duration-200"
                >
                  {/* style="stroke-opacity: 0.15" */}
                  <path d="m 0 6 
                    a 6 6 0 0 1 6 -6 
                    h 250.32501220703125 
                    a 16 16 0 0 1 11 5 
                    l 77 77 
                    a 16 16 0 0 1 5 11 
                    v 126 
                    a 6 6 0 0 1 -6 6 
                    h -337.32501220703125 
                    a 6 6 0 0 1 -6 -6 
                    z" fill="#fff"></path>
                </svg>

                <div class="z-[100] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8">

                  <div>
                    <h3 class="font-mullish font-bold text-deepBlueHead leading-[1.2] text-[1.375rem]">Payment
                      Links</h3>
                    <p class="mt-6 font-mullish text-grayText">
                      Share payment link via an email, SMS, messenger, chatbot etc. and get paid immediately
                    </p>
                  </div>

                  <div class="flex items-center cursor-pointer group">
                    <a href="#"
                      class="font-bold transition-all duration-200 font-mullish text-lightBlue500 group-hover:text-grayBlue">Know
                      More</a>
                    <i data-feather="chevron-right"
                      class="w-5 h-5 transition-all duration-200 text-lightBlue500 group-hover:text-grayBlue"></i>
                  </div>

                </div>
              </div>

              <div class="w-full min-h-[15rem] relative cursor-pointer">
                <img src={paymentlink} alt="" class="bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-[8]
                    transition-all duration-200"/>

                <svg viewBox="0 0 349.32501220703125 225" xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  class="stroke-1 stroke-[#818597] h-full w-full absolute z-[9] transition-all duration-200"
                >
                  {/* style="stroke-opacity: 0.15" */}
                  <path d="m 0 6 
                    a 6 6 0 0 1 6 -6 
                    h 250.32501220703125 
                    a 16 16 0 0 1 11 5 
                    l 77 77 
                    a 16 16 0 0 1 5 11 
                    v 126 
                    a 6 6 0 0 1 -6 6 
                    h -337.32501220703125 
                    a 6 6 0 0 1 -6 -6 
                    z" fill="#fff"></path>
                </svg>

                <div class="z-[100] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8">

                  <div>
                    <h3 class="font-mullish font-bold text-deepBlueHead leading-[1.2] text-[1.375rem]">Payment
                      Links</h3>
                    <p class="mt-6 font-mullish text-grayText">
                      Share payment link via an email, SMS, messenger, chatbot etc. and get paid immediately
                    </p>
                  </div>


                  <div class="flex items-center cursor-pointer group">
                    <a href="#"
                      class="font-bold transition-all duration-200 font-mullish text-lightBlue500 group-hover:text-grayBlue">Know
                      More</a>
                    <i data-feather="chevron-right"
                      class="w-5 h-5 transition-all duration-200 text-lightBlue500 group-hover:text-grayBlue"></i>
                  </div>

                </div>

              </div>

              <div class="w-full min-h-[15rem] relative cursor-pointer">
                <img src={paymentlink} alt="" class="bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-[8]
                    transition-all duration-200"/>

                <svg viewBox="0 0 349.32501220703125 225" xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  class="stroke-1 stroke-[#818597] h-full w-full absolute z-[9] transition-all duration-200"
                >
                  {/* style="stroke-opacity: 0.15" */}
                  <path d="m 0 6 
                    a 6 6 0 0 1 6 -6 
                    h 250.32501220703125 
                    a 16 16 0 0 1 11 5 
                    l 77 77 
                    a 16 16 0 0 1 5 11 
                    v 126 
                    a 6 6 0 0 1 -6 6 
                    h -337.32501220703125 
                    a 6 6 0 0 1 -6 -6 
                    z" fill="#fff"></path>
                </svg>

                <div class="z-[100] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8">

                  <div>
                    <h3 class="font-mullish font-bold text-deepBlueHead leading-[1.2] text-[1.375rem]">Payment
                      Links</h3>
                    <p class="mt-6 font-mullish text-grayText">
                      Share payment link via an email, SMS, messenger, chatbot etc. and get paid immediately
                    </p>
                  </div>

                  <div class="flex items-center cursor-pointer group">
                    <a href="#"
                      class="font-bold transition-all duration-200 font-mullish text-lightBlue500 group-hover:text-grayBlue">Know
                      More</a>
                    <i data-feather="chevron-right"
                      class="w-5 h-5 transition-all duration-200 text-lightBlue500 group-hover:text-grayBlue"></i>
                  </div>

                </div>
              </div>

              <div class="w-full min-h-[15rem] relative cursor-pointer">
                <img src={paymentlink} alt="" class="bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-[8]
                    transition-all duration-200"/>

                <svg viewBox="0 0 349.32501220703125 225" xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  class="stroke-1 stroke-[#818597] h-full w-full absolute z-[9] transition-all duration-200"
                >
                  {/* style="stroke-opacity: 0.15" */}
                  <path d="m 0 6 
                    a 6 6 0 0 1 6 -6 
                    h 250.32501220703125 
                    a 16 16 0 0 1 11 5 
                    l 77 77 
                    a 16 16 0 0 1 5 11 
                    v 126 
                    a 6 6 0 0 1 -6 6 
                    h -337.32501220703125 
                    a 6 6 0 0 1 -6 -6 
                    z" fill="#fff"></path>
                </svg>

                <div class="z-[100] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8">

                  <div>
                    <h3 class="font-mullish font-bold text-deepBlueHead leading-[1.2] text-[1.375rem]">Payment
                      Links</h3>
                    <p class="mt-6 font-mullish text-grayText">
                      Share payment link via an email, SMS, messenger, chatbot etc. and get paid immediately
                    </p>
                  </div>


                  <div class="flex items-center cursor-pointer group">
                    <a href="#"
                      class="font-bold transition-all duration-200 font-mullish text-lightBlue500 group-hover:text-grayBlue">Know
                      More</a>
                    <i data-feather="chevron-right"
                      class="w-5 h-5 transition-all duration-200 text-lightBlue500 group-hover:text-grayBlue"></i>
                  </div>

                </div>

              </div>

              <div class="w-full min-h-[15rem] relative cursor-pointer">
                <img src={paymentlink} alt="" class="bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-[8]
                    transition-all duration-200"/>

                <svg viewBox="0 0 349.32501220703125 225" xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  class="stroke-1 stroke-[#818597] h-full w-full absolute z-[9] transition-all duration-200"
                >
                  {/* style="stroke-opacity: 0.15" */}
                  <path d="m 0 6 
                    a 6 6 0 0 1 6 -6 
                    h 250.32501220703125 
                    a 16 16 0 0 1 11 5 
                    l 77 77 
                    a 16 16 0 0 1 5 11 
                    v 126 
                    a 6 6 0 0 1 -6 6 
                    h -337.32501220703125 
                    a 6 6 0 0 1 -6 -6 
                    z" fill="#fff"></path>
                </svg>

                <div class="z-[100] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8">

                  <div>
                    <h3 class="font-mullish font-bold text-deepBlueHead leading-[1.2] text-[1.375rem]">Payment
                      Links</h3>
                    <p class="mt-6 font-mullish text-grayText">
                      Share payment link via an email, SMS, messenger, chatbot etc. and get paid immediately
                    </p>
                  </div>

                  <div class="flex items-center cursor-pointer group">
                    <a href="#"
                      class="font-bold transition-all duration-200 font-mullish text-lightBlue500 group-hover:text-grayBlue">Know
                      More</a>
                    <i data-feather="chevron-right"
                      class="w-5 h-5 transition-all duration-200 text-lightBlue500 group-hover:text-grayBlue"></i>
                  </div>

                </div>
              </div>

              <div class="w-full min-h-[15rem] relative cursor-pointer">
                <img src={paymentlink} alt="" class="bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-[8]
                    transition-all duration-200"/>

                <svg viewBox="0 0 349.32501220703125 225" xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  class="stroke-1 stroke-[#818597] h-full w-full absolute z-[9] transition-all duration-200"
                >
                  {/* style="stroke-opacity: 0.15" */}
                  <path d="m 0 6 
                    a 6 6 0 0 1 6 -6 
                    h 250.32501220703125 
                    a 16 16 0 0 1 11 5 
                    l 77 77 
                    a 16 16 0 0 1 5 11 
                    v 126 
                    a 6 6 0 0 1 -6 6 
                    h -337.32501220703125 
                    a 6 6 0 0 1 -6 -6 
                    z" fill="#fff"></path>
                </svg>

                <div class="z-[100] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8">

                  <div>
                    <h3 class="font-mullish font-bold text-deepBlueHead leading-[1.2] text-[1.375rem]">Payment
                      Links</h3>
                    <p class="mt-6 font-mullish text-grayText">
                      Share payment link via an email, SMS, messenger, chatbot etc. and get paid immediately
                    </p>
                  </div>


                  <div class="flex items-center cursor-pointer group">
                    <a href="#"
                      class="font-bold transition-all duration-200 font-mullish text-lightBlue500 group-hover:text-grayBlue">Know
                      More</a>
                    <i data-feather="chevron-right"
                      class="w-5 h-5 transition-all duration-200 text-lightBlue500 group-hover:text-grayBlue"></i>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </section>

        <section class=" bg-no-repeat bg-cover pb-[500px] mt-14 pt-[20rem]">
          {/* bg-[url(./images/feature-section-2BG.svg)] */}
          <div class="w-10/12 max-w-[1080px]  mx-auto relative pt-4 ">
            <h2 class="font-mullish text-center text-2xl leading-[1.2] text-white font-bold">Explore Razorpay Business
              Banking</h2>
            <div class="w-6 h-1 mx-auto mt-4 mb-6 bg-greenLight"></div>
          </div>

          <div class="w-full min-h[440px] flex flex-col relative">
            <img src={xflame1} alt="" loading="lazy" class="absolute -top-[142px] -left-[140px] w-[200px]" />

            <img src={xflame2} alt="" loading="lazy" class="absolute top-[150px] -right-[180px] w-[200px]" />

            <div class="relative w-full bg-[#181c2e] p-10 py-12 border border-slate-700 z-20 rounded-md ">

              <div class="z-20 flex flex-col items-start justify-between w-full h-full gap-12">
                <h3 class="font-mullish text-[28px] text-white font-bold leading-10 max-w-[500px]">Manage your company’s
                  finances with
                  <img src={razorpayX} alt="" width="168px" height="32px" class="inline" />
                  <span class="text-greenLight">Business Banking</span>
                </h3>

                <ul class="space-y-2">
                  <li class="flex items-center space-x-2 text-white font-mullish">
                    <i data-feather="check" class="text-greenLight"></i>
                    <span>Open a fully digital current account
                    </span>
                  </li>
                  <li class="flex items-center space-x-2 text-white font-mullish">
                    <i data-feather="check" class="text-greenLight"></i>
                    <span>Automate payables & compliment payments
                    </span>
                  </li>
                  <li class="flex items-center space-x-2 text-white font-mullish">
                    <i data-feather="check" class="text-greenLight"></i>
                    <span>Simplify and track spends with Corporate cards
                    </span>
                  </li>
                  <li class="flex items-center space-x-2 text-white font-mullish">
                    <i data-feather="check" class="text-greenLight"></i>
                    <span>View financial insights at a glance
                    </span>
                  </li>
                </ul>
                <div class="flex flex-col-reverse items-center w-full space-x-4 md:flex-row ">
                  <button class="relative bg-lightBlue flex items-center 
                          place-content-center md:justify-start text-white py-[14px] px-[18px] md:pr-[90px] rounded-md
                           font-mullish font-bold hover:bg-lightBlue500 transition-all duration-200
                           self-stretch md:w-fit">
                    Sign Up
                    <div class="w-12 h-[60px] bg-greenLight absolute right-6 skew-x-[20deg] 
                              flex justify-center items-center">

                      <svg viewBox="0 0 24 24" focusable="false" class="w-[20px] h-[20px] -skew-x-[20deg] ">
                        <path fill="currentColor" d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
                      </svg>
                    </div>
                  </button>

                  <div class="flex flex-row items-center cursor-pointer group">
                    <a href="#" class="font-bold transition-all duration-200 font-mullish text-lightBlue500 group-hover:text-lightBlue">Know More</a>
                    <i data-feather="chevron-right"
                      class="w-5 h-5 transition-all duration-200 text-lightBlue500 group-hover:text-lightBlue"></i>
                  </div>
                </div>
              </div>

              <img src={buisnessbanking} alt=""
                class="max-w-[600px] absolute right-0 bottom-0 z-4 hidden md:max-w-[400px] lg:max-w-[600px] md:block lg:block" />
            </div>

            <div class="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 my-14">
              <div class="w-full min-h-[15rem] relative cursor-pointer featureCard2">
                <img src={currenticon}
                  class="bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-[80] featureCardIcon transition-all duration-200" />
                <svg viewBox="0 0 349.32501220703125 225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
                  class="stroke-1 stroke-[#525a76] h-full w-full absolute z-[90] featureCardSVG transition-all duration-200"
                >
                  {/* style="stroke-opacity: 0.8" */}
                  <path d="m 0 6 
                    a 6 6 0 0 1 6 -6 
                    h 250.32501220703125 
                    a 16 16 0 0 1 11 5 
                    l 77 77 
                    a 16 16 0 0 1 5 11 
                    v 126 
                    a 6 6 0 0 1 -6 6 
                    h -337.32501220703125 
                    a 6 6 0 0 1 -6 -6 
                    z" fill="#181C2E"></path>
                </svg>
                <div class="z-[1000] absolute h-full w-full pl-5 py-6 pr-8 flex flex-col justify-between featureCardBox">
                  <div>
                    <h3 class="font-mullish font-extrabold text-white leading-[1.2] text-[1.375rem]">
                      Current Account
                    </h3>
                    <p class="mt-6 font-mullish text-grayText">
                      Current accounts for fast-growing businesses, supported by the
                      best-in-class technology
                    </p>
                  </div>
                  <div class="flex items-center cursor-pointer place-items-end">
                    <a href="#" class="font-bold transition-all duration-200 font-mullish text-lightBlue500">Know More</a>
                    <i data-feather="chevron-right" class="w-5 h-5 transition-all duration-200 text-lightBlue500"></i>
                  </div>
                </div>
              </div>

              <div class="w-full min-h-[15rem] relative cursor-pointer featureCard2">
                <img src={currenticon}
                  class="bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-[80] featureCardIcon transition-all duration-200" />
                <svg viewBox="0 0 349.32501220703125 225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
                  class="stroke-1 stroke-[#525a76] h-full w-full absolute z-[90] featureCardSVG transition-all duration-200"
                >
                  {/* style="stroke-opacity: 0.8" */}
                  <path d="m 0 6 
                    a 6 6 0 0 1 6 -6 
                    h 250.32501220703125 
                    a 16 16 0 0 1 11 5 
                    l 77 77 
                    a 16 16 0 0 1 5 11 
                    v 126 
                    a 6 6 0 0 1 -6 6 
                    h -337.32501220703125 
                    a 6 6 0 0 1 -6 -6 
                    z" fill="#181C2E"></path>
                </svg>
                <div class="z-[1000] absolute h-full w-full pl-5 py-6 pr-8 flex flex-col justify-between featureCardBox">
                  <div>
                    <h3 class="font-mullish font-extrabold text-white leading-[1.2] text-[1.375rem]">
                      Current Account
                    </h3>
                    <p class="mt-6 font-mullish text-grayText">
                      Current accounts for fast-growing businesses, supported by the
                      best-in-class technology
                    </p>
                  </div>
                  <div class="flex items-center cursor-pointer place-items-end">
                    <a href="#" class="font-bold transition-all duration-200 font-mullish text-lightBlue500">Know More</a>
                    <i data-feather="chevron-right" class="w-5 h-5 transition-all duration-200 text-lightBlue500"></i>
                  </div>
                </div>
              </div>

              <div class="w-full min-h-[15rem] relative cursor-pointer featureCard2">
                <img src={currenticon}
                  class="bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-[80] featureCardIcon transition-all duration-200" />
                <svg viewBox="0 0 349.32501220703125 225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
                  class="stroke-1 stroke-[#525a76] h-full w-full absolute z-[90] featureCardSVG transition-all duration-200"
                >
                  {/* style="stroke-opacity: 0.8" */}
                  <path d="m 0 6 
                    a 6 6 0 0 1 6 -6 
                    h 250.32501220703125 
                    a 16 16 0 0 1 11 5 
                    l 77 77 
                    a 16 16 0 0 1 5 11 
                    v 126 
                    a 6 6 0 0 1 -6 6 
                    h -337.32501220703125 
                    a 6 6 0 0 1 -6 -6 
                    z" fill="#181C2E"></path>
                </svg>
                <div class="z-[1000] absolute h-full w-full pl-5 py-6 pr-8 flex flex-col justify-between featureCardBox">
                  <div>
                    <h3 class="font-mullish font-extrabold text-white leading-[1.2] text-[1.375rem]">
                      Current Account
                    </h3>
                    <p class="mt-6 font-mullish text-grayText">
                      Current accounts for fast-growing businesses, supported by the
                      best-in-class technology
                    </p>
                  </div>
                  <div class="flex items-center cursor-pointer place-items-end">
                    <a href="#" class="font-bold transition-all duration-200 font-mullish text-lightBlue500">Know More</a>
                    <i data-feather="chevron-right" class="w-5 h-5 transition-all duration-200 text-lightBlue500"></i>
                  </div>
                </div>
              </div>
            </div>


            <div class="relative items-center hidden w-full p-8 mb-24 border rounded-md justify-evenly border-slate-700 gap-y-6 md:flex md:flex-col lg:flex-row lg:flex">

              <p class="text-xl text-white font-mullish">Check out the live demo to learn how RazorpayX works.
                <span class="font-bold"> No sign-up required!</span>
              </p>

              <button class="relative bg-lightBlue flex items-center 
              justify-start text-white py-[14px] px-[18px] md:pr-[90px] rounded-md
               font-mullish font-bold hover:bg-lightBlue500 transition-all duration-200">
                Check out the demo
                <div class="w-12 h-[60px] bg-greenLight absolute right-6 skew-x-[20deg] 
                  flex justify-center items-center">
                  <svg viewBox="0 0 24 24" focusable="false" class="w-[20px] h-[20px] -skew-x-[20deg] ">
                    <path fill="currentColor" d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </section>

        <section class="relative bg-white">
          <div class="relative w-11/12 max-w-[1080px] mx-auto pt-4">
            <img src={featuresection1dottedrows} alt=""
              class="absolute w-[233px] left-[300px] -top-[6rem] z-10" />
            <img src={featuresection1dottedrows} alt=""
              class="absolute w-[233px] -right-[3.5rem] -top-[6rem] z-10" />

            <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-4 relative z-[100]">
              <div class="relative z-0 flex items-center">
                <h2 class="text-deepBlueHead font-mullish font-extrabold text-4xl leading-[3.375rem]">New in the
                  <span class="text-lightBlue500">
                    Razorpay
                  </span>
                  Product Suite
                </h2>
              </div>

              <div class="p-10  w-full max-h-[300px] cursor-pointer
              bg-no-repeat hover:scale-105 transition-all duration-200
              bg-white">
                <img src={razorpayXicon} alt="" class="w-10 h-10" />
                <h3 class="pt-4 text-lg font-bold font-mullish">Corporate Cards</h3>
                <p class="py-3 leading-normal font-mullish text-grayText">Simplify your recurring, international and team
                  expenses with savings on every spend. Save upto 10 lacs every month.</p>
                <div class="flex flex-row items-center cursor-pointer group">
                  <a href="" class="font-bold transition-all duration-200 font-mullish text-lightBlue500 group-hover:text-lightBlue">Know More</a>
                  <i data-feather="chevron-right" class="w-5 h-5 transition-all duration-200 text-lightBlue500 group-hover:text-grayBlue"></i>
                </div>

              </div>

              <div class="p-10  w-full max-h-[300px] cursor-pointer
              bg-no-repeat hover:scale-105 transition-all duration-200
              bg-white">
                <img src={razorpayXicon} alt="" class="w-10 h-10" />
                <h3 class="pt-4 text-lg font-bold font-mullish">Corporate Cards</h3>
                <p class="py-3 leading-normal font-mullish text-grayText">Simplify your recurring, international and team
                  expenses with savings on every spend. Save upto 10 lacs every month.</p>
                <div class="flex flex-row items-center cursor-pointer group">
                  <a href="" class="font-bold transition-all duration-200 font-mullish text-lightBlue500 group-hover:text-lightBlue">Know More</a>
                  <i data-feather="chevron-right" class="w-5 h-5 transition-all duration-200 text-lightBlue500 group-hover:text-grayBlue"></i>
                </div>

              </div>

              <div class="p-10  w-full max-h-[300px] cursor-pointer
              bg-no-repeat hover:scale-105 transition-all duration-200
              bg-white">

                <img src={razorpayXicon} alt="" class="w-10 h-10" />
                <h3 class="pt-4 text-lg font-bold font-mullish">Corporate Cards</h3>
                <p class="py-3 leading-normal font-mullish text-grayText">Simplify your recurring, international and team
                  expenses with savings on every spend. Save upto 10 lacs every month.</p>
                <div class="flex flex-row items-center cursor-pointer group">
                  <a href="" class="font-bold transition-all duration-200 font-mullish text-lightBlue500 group-hover:text-lightBlue">Know More</a>
                  <i data-feather="chevron-right" class="w-5 h-5 transition-all duration-200 text-lightBlue500 group-hover:text-grayBlue"></i>
                </div>

              </div>
              <div class="p-10  w-full max-h-[300px] cursor-pointer
              bg-no-repeat hover:scale-105 transition-all duration-200
              bg-white">

                <img src={razorpayXicon} alt="" class="w-10 h-10" />
                <h3 class="pt-4 text-lg font-bold font-mullish">Corporate Cards</h3>
                <p class="py-3 leading-normal font-mullish text-grayText">Simplify your recurring, international and team
                  expenses with savings on every spend. Save upto 10 lacs every month.</p>
                <div class="flex flex-row items-center cursor-pointer group">
                  <a href="" class="font-bold transition-all duration-200 font-mullish text-lightBlue500 group-hover:text-lightBlue">Know More</a>
                  <i data-feather="chevron-right" class="w-5 h-5 transition-all duration-200 text-lightBlue500 group-hover:text-grayBlue"></i>
                </div>

              </div>
              <div class="p-10  w-full max-h-[300px] cursor-pointer
              bg-no-repeat hover:scale-105 transition-all duration-200
              bg-white">
                <img src={razorpayXicon} alt="" class="w-10 h-10" />
                <h3 class="pt-4 text-lg font-bold font-mullish">Corporate Cards</h3>
                <p class="py-3 leading-normal font-mullish text-grayText">Simplify your recurring, international and team
                  expenses with savings on every spend. Save upto 10 lacs every month.</p>
                <div class="flex flex-row items-center cursor-pointer group">
                  <a href="" class="font-bold transition-all duration-200 font-mullish text-lightBlue500 group-hover:text-lightBlue">Know More</a>
                  <i data-feather="chevron-right" class="w-5 h-5 transition-all duration-200 text-lightBlue500 group-hover:text-grayBlue"></i>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* core features */}
        <section>

        </section>

        {/* join razorpay section */}
        <section>

        </section>

        {/* Testimonail Section */}
        <section>

        </section>

        {/* CTA */}
        <section>

        </section>

      </div>

      {/* footer */}

      <footer style="background: linear-gradient(to right, #eef9fe, #edf7ff)" class="-mt-[400px] md:-mt-[300px]">
        <div
          class="w-10/12 pt-[400px] pb-10 md:pt-[350px] md:my-0 md:w-11/12 max-w-[1080px] mx-auto flex flex-col space-y-6 lg:space-y-0 lg:space-x-4 lg:flex-row justify-between">
          <div class="flex flex-col md:max-w-[340px] lg:max-w-[260px]">
            <img src={logodark} loading="lazy" width="120px" height="24px" />
            <p class="my-3 text-sm text-grayText font-mullish">
              Razorpay is the only payments solution in India that allows
              businesses to accept, process and disburse payments with its product
              suite. It gives you access to all payment modes including credit
              card, debit card, netbanking, UPI and popular wallets including
              JioMoney, Mobikwik, Airtel Money, FreeCharge, Ola Money and PayZapp.
            </p>
            <p class="my-3 text-sm text-grayText font-mullish">
              RazorpayX supercharges your business banking experience, bringing
              effectiveness, efficiency, and excellence to all financial
              processes. With RazorpayX, businesses can get access to
              fully-functional current accounts, supercharge their payouts and
              automate payroll compliance.
            </p>
            <p class="my-3 text-sm text-grayText font-mullish">
              Manage your marketplace, automate bank transfers, collect recurring
              payments, share invoices with customers and avail working capital
              loans - all from a single platform. Fast forward your business with
              Razorpay.
            </p>
            <p class="text-[0.625rem] text-grayText my-3 font-mullish">
              Disclaimer: The RazorpayX powered Current Account and VISA corporate
              credit card are provided by RBI licensed banks. Your RazorpayX
              powered account is provided by our partner bank, in accordance with
              RBI regulations. RazorpayX itself is not a bank and doesn't hold or
              claim to hold a banking license.
            </p>
            <p class="font-bold uppercase font-mullish text-gray2">
              Subscribe to our newsletter
            </p>
            <form class="relative bg-white w-[260px] mt-2 mb-4">
              <input placeholder="Your email address"
                class="px-4 py-2 pr-16 transition-all duration-200 border border-gray-300 rounded-sm font-mullish outline-lightBlue focus:outline-lightBlue placeholder:text-sm" />
              <button
                class="h-[90%] bg-white absolute right-[1.5px] top-1/2 -translate-y-1/2 z-10 font-mullish text-sm font-bold text-lightBlue300 flex rounded-sm items-center hover:text-lightBlue500 transition-all duration-200">
                Subscribe
                <svg viewBox="0 0 24 24" focusable="false" class="w-[14px] h-[14px] ml-3">
                  <path fill="currentColor" d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
                </svg>
              </button>
            </form>
            <div class="flex items-start space-x-4">
              <img src={footercertificate1} loading="lazy" width="92" height="40" class="cursor-pointer" />
              <img src={footercertificate2} loading="lazy" width="122" height="80" class="cursor-pointer" />
            </div>
          </div>

          <div class="flex flex-col justify-between space-y-4 md:space-y-0 md:flex-row md:space-x-4">
            <div class="space-y-3">
              <div>
                <p class="mb-1 font-bold uppercase font-mullish text-gray2">
                  BANKING PLUS
                </p>
                <ul class="space-y-2">
                  <li>
                    <a href="#"
                      class="font-medium transition-all duration-200 font-mullish text-lightBlue500 hover:text-grayBlue">RazorpayX</a>
                  </li>
                  <li>
                    <a href="#"
                      class="font-medium transition-all duration-200 font-mullish text-lightBlue500 hover:text-grayBlue">Current
                      Accounts</a>
                  </li>
                  <li>
                    <a href="#"
                      class="font-medium transition-all duration-200 font-mullish text-lightBlue500 hover:text-grayBlue">Payouts</a>
                  </li>
                  <li>
                    <a href="#"
                      class="font-medium transition-all duration-200 font-mullish text-lightBlue500 hover:text-grayBlue">Payout
                      Links</a>
                  </li>
                  <li>
                    <a href="#"
                      class="font-medium transition-all duration-200 font-mullish text-lightBlue500 hover:text-grayBlue">Corporate
                      Credit Card</a>
                  </li>
                  <li>
                    <a href="#"
                      class="relative font-medium transition-all duration-200 font-mullish text-lightBlue500 hover:text-grayBlue">
                      View Live Demo
                      <span
                        class="p-1 text-xs font-bold text-white uppercase bg-green-500 rounded-sm font-mullish">New</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p class="mb-1 font-bold uppercase font-mullish text-gray2">
                  LENDING
                </p>
                <ul class="space-y-2">
                  <li>
                    <a href="#"
                      class="font-medium transition-all duration-200 font-mullish text-lightBlue500 hover:text-grayBlue">Razorpay
                      Capital</a>
                  </li>
                  <li>
                    <a href="#"
                      class="font-medium transition-all duration-200 font-mullish text-lightBlue500 hover:text-grayBlue">Instant
                      Settlements</a>
                  </li>
                  <li>
                    <a href="#"
                      class="font-medium transition-all duration-200 font-mullish text-lightBlue500 hover:text-grayBlue">Working
                      Capital Loans</a>
                  </li>
                  <li>
                    <a href="#"
                      class="font-medium transition-all duration-200 font-mullish text-lightBlue500 hover:text-grayBlue">Marketplace
                      Instant Settlements</a>
                  </li>
                </ul>
              </div>
              <div>
                <p class="mb-1 font-bold uppercase font-mullish text-gray2">
                  RISK & FRAUD
                </p>
                <ul class="space-y-2">
                  <li>
                    <a href="#"
                      class="font-medium transition-all duration-200 font-mullish text-lightBlue500 hover:text-grayBlue">Thirdwatch</a>
                  </li>
                  <li>
                    <a href="#"
                      class="relative font-medium transition-all duration-200 font-mullish text-lightBlue500 hover:text-grayBlue">
                      PrePay CoD
                      <span
                        class="p-1 text-xs font-bold text-white uppercase bg-green-500 rounded-sm font-mullish">New</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p class="mb-1 font-bold uppercase font-mullish text-gray2">
                  BECOME A PARTNER
                </p>
                <ul class="space-y-2">
                  <li>
                    <a href="#"
                      class="font-medium transition-all duration-200 font-mullish text-lightBlue500 hover:text-grayBlue">Refer
                      and Earn</a>
                  </li>
                  <li>
                    <a href="#"
                      class="font-medium transition-all duration-200 font-mullish text-lightBlue500 hover:text-grayBlue">
                      Onboarding APIs
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p class="mb-1 font-bold uppercase font-mullish text-gray2">
                  MORE
                </p>
                <ul class="space-y-2">
                  <li>
                    <a href="#"
                      class="font-medium transition-all duration-200 font-mullish text-lightBlue500 hover:text-grayBlue">Route</a>
                  </li>
                  <li>
                    <a href="#"
                      class="font-medium transition-all duration-200 font-mullish text-lightBlue500 hover:text-grayBlue">Invoices</a>
                  </li>
                  <li>
                    <a href="#"
                      class="font-medium transition-all duration-200 font-mullish text-lightBlue500 hover:text-grayBlue">Freelancer
                      Payments</a>
                  </li>
                  <li>
                    <a href="#"
                      class="font-medium transition-all duration-200 font-mullish text-lightBlue500 hover:text-grayBlue">International</a>
                  </li>
                  <li>
                    <a href="#"
                      class="font-medium transition-all duration-200 font-mullish text-lightBlue500 hover:text-grayBlue">Flash
                      Checkout</a>
                  </li>
                  <li>
                    <a href="#"
                      class="font-medium transition-all duration-200 font-mullish text-lightBlue500 hover:text-grayBlue">UPI</a>
                  </li>
                  <li>
                    <a href="#"
                      class="font-medium transition-all duration-200 font-mullish text-lightBlue500 hover:text-grayBlue">ePOS</a>
                  </li>
                  <li>
                    <a href="#"
                      class="font-medium transition-all duration-200 font-mullish text-lightBlue500 hover:text-grayBlue">Checkout
                      Demo</a>
                  </li>
                  <li>
                    <a href="#"
                      class="font-medium transition-all duration-200 font-mullish text-lightBlue500 hover:text-grayBlue">RazorpayX
                      Payroll</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="space-y-3">
              <div>
                <p class="mb-1 font-bold uppercase font-mullish text-gray2">
                  ACCEPT PAYMENTS
                </p>
                <ul class="space-y-2">
                  <li>
                    <a href="#"
                      class="font-medium transition-all duration-200 font-mullish text-lightBlue500 hover:text-grayBlue">Payment
                      Gateway</a>
                  </li>
                  <li>
                    <a href="#"
                      class="font-medium transition-all duration-200 font-mullish text-lightBlue500 hover:text-grayBlue">Payment
                      Pages</a>
                  </li>
                  <li>
                    <a href="#"
                      class="font-medium transition-all duration-200 font-mullish text-lightBlue500 hover:text-grayBlue">Payment
                      Links</a>
                  </li>
                  <li>
                    <a href="#"
                      class="font-medium transition-all duration-200 font-mullish text-lightBlue500 hover:text-grayBlue">QR
                      Codes</a>
                  </li>
                  <li>
                    <a href="#"
                      class="font-medium transition-all duration-200 font-mullish text-lightBlue500 hover:text-grayBlue">Subscriptions</a>
                  </li>
                  <li>
                    <a href="#"
                      class="font-medium transition-all duration-200 font-mullish text-lightBlue500 hover:text-grayBlue">
                      Smart Collect
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p class="mb-1 font-bold uppercase font-mullish text-gray2">
                  DEVELOPERS
                </p>
                <ul class="space-y-2">
                  <li>
                    <a href="#"
                      class="font-medium transition-all duration-200 font-mullish text-lightBlue500 hover:text-grayBlue">Docs</a>
                  </li>
                  <li>
                    <a href="#"
                      class="font-medium transition-all duration-200 font-mullish text-lightBlue500 hover:text-grayBlue">Integrations</a>
                  </li>
                  <li>
                    <a href="#"
                      class="font-medium transition-all duration-200 font-mullish text-lightBlue500 hover:text-grayBlue">API
                      Reference</a>
                  </li>
                </ul>
              </div>
              <div>
                <p class="mb-1 font-bold uppercase font-mullish text-gray2">
                  RESOURCES
                </p>
                <ul class="space-y-2">
                  <li>
                    <a href="#"
                      class="font-medium transition-all duration-200 font-mullish text-lightBlue500 hover:text-grayBlue">Blog</a>
                  </li>
                  <li>
                    <a href="#"
                      class="relative font-medium transition-all duration-200 font-mullish text-lightBlue500 hover:text-grayBlue">
                      Customer Stories
                    </a>
                  </li>
                  <li>
                    <a href="#"
                      class="relative font-medium transition-all duration-200 font-mullish text-lightBlue500 hover:text-grayBlue">
                      Events
                    </a>
                  </li>
                  <li>
                    <a href="#"
                      class="relative font-medium transition-all duration-200 font-mullish text-lightBlue500 hover:text-grayBlue">
                      Chargeback Guide
                    </a>
                  </li>
                  <li>
                    <a href="#"
                      class="relative font-medium transition-all duration-200 font-mullish text-lightBlue500 hover:text-grayBlue">
                      Settlement Guide
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p class="mb-1 font-bold uppercase font-mullish text-gray2">
                  SOLUTIONS
                </p>
                <ul class="space-y-2">
                  <li>
                    <a href="#"
                      class="font-medium transition-all duration-200 font-mullish text-lightBlue500 hover:text-grayBlue">Education</a>
                  </li>
                  <li>
                    <a href="#"
                      class="font-medium transition-all duration-200 font-mullish text-lightBlue500 hover:text-grayBlue">
                      E-commerce
                    </a>
                  </li>
                  <li>
                    <a href="#"
                      class="font-medium transition-all duration-200 font-mullish text-lightBlue500 hover:text-grayBlue">
                      Saas
                    </a>
                  </li>
                  <li>
                    <a href="#"
                      class="font-medium transition-all duration-200 font-mullish text-lightBlue500 hover:text-grayBlue">
                      BFSI
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p class="mb-1 font-bold uppercase font-mullish text-gray2">
                  FREE TOOLS
                </p>
                <ul class="space-y-2">
                  <li>
                    <a href="#"
                      class="font-medium transition-all duration-200 font-mullish text-lightBlue500 hover:text-grayBlue">GST
                      Calculator</a>
                  </li>
                  <li>
                    <a href="#"
                      class="font-medium transition-all duration-200 font-mullish text-lightBlue500 hover:text-grayBlue">Online
                      TDS Payment</a>
                  </li>
                  <li>
                    <a href="#"
                      class="relative font-medium transition-all duration-200 font-mullish text-lightBlue500 hover:text-grayBlue">
                      GST Number Search
                      <span
                        class="p-1 text-xs font-bold text-white uppercase bg-green-500 rounded-sm font-mullish">New</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div>
                <p class="mb-1 font-bold uppercase font-mullish text-gray2">
                  COMPANY
                </p>
                <ul class="space-y-2">
                  <li>
                    <a href="#"
                      class="font-medium transition-all duration-200 font-mullish text-lightBlue500 hover:text-grayBlue">About
                      Us</a>
                  </li>
                  <li>
                    <a href="#"
                      class="relative font-medium transition-all duration-200 font-mullish text-lightBlue500 hover:text-grayBlue">Careers
                      <span class="p-1 text-xs font-bold text-white bg-green-500 rounded-sm font-mullish">We're
                        hiring!</span>
                    </a>
                  </li>
                  <li>
                    <a href="#"
                      class="font-medium transition-all duration-200 font-mullish text-lightBlue500 hover:text-grayBlue">Terms
                      of Use</a>
                  </li>
                  <li>
                    <a href="#"
                      class="font-medium transition-all duration-200 font-mullish text-lightBlue500 hover:text-grayBlue">Privacy
                      Policy</a>
                  </li>
                  <li>
                    <a href="#"
                      class="font-medium transition-all duration-200 font-mullish text-lightBlue500 hover:text-grayBlue">Grievance
                      Redressal</a>
                  </li>
                  <li>
                    <a href="#"
                      class="font-medium transition-all duration-200 font-mullish text-lightBlue500 hover:text-grayBlue">
                      Responsible Disclosure
                    </a>
                  </li>
                  <li>
                    <a href="#"
                      class="font-medium transition-all duration-200 font-mullish text-lightBlue500 hover:text-grayBlue">
                      Partners
                    </a>
                  </li>
                  <li>
                    <a href="#"
                      class="font-medium transition-all duration-200 font-mullish text-lightBlue500 hover:text-grayBlue">
                      White Papers
                    </a>
                  </li>
                  <li>
                    <a href="#"
                      class="font-medium transition-all duration-200 font-mullish text-lightBlue500 hover:text-grayBlue">
                      Corporate Information
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p class="mt-3 mb-1 font-bold uppercase font-mullish text-gray2">
                  HELP & SUPPORT
                </p>
                <ul class="space-y-2">
                  <li>
                    <a href="#"
                      class="font-medium transition-all duration-200 font-mullish text-lightBlue500 hover:text-grayBlue">Support</a>
                  </li>
                  <li>
                    <a href="#"
                      class="font-medium transition-all duration-200 font-mullish text-lightBlue500 hover:text-grayBlue">Knowledge
                      base</a>
                  </li>
                </ul>
              </div>
              <div>
                <p class="mt-6 mb-1 font-bold uppercase font-mullish text-gray2">
                  FIND US ONLINE
                </p>
                <ul class="flex items-center mt-4 space-x-4">
                  <li class="cursor-pointer">
                    <a>
                      <img src={facebookicon} width="24" height="24" loading="lazy" />
                    </a>
                  </li>
                  <li class="cursor-pointer">
                    <a>
                      <img src={twittericon} width="24" height="24" loading="lazy" />
                    </a>
                  </li>
                  <li class="cursor-pointer">
                    <a>
                      <img src={instagramicon} width="24" height="24" loading="lazy" />
                    </a>
                  </li>
                  <li class="cursor-pointer">
                    <a>
                      <img src={githubicon} width="24" height="24" loading="lazy" />
                    </a>
                  </li>
                  <li class="cursor-pointer">
                    <a>
                      <img src={linkedinicon} width="24" height="24" loading="lazy" />
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p class="mt-6 mb-1 font-bold uppercase font-mullish text-gray2">
                  REGD. OFFICE ADDRESS
                </p>
                <p class="mt-4 text-sm font-mullish whitespace-nowrap">
                  Razorpay Software Private Limited, <br />1st Floor, SJR Cyber,
                  <br />22 Laskar Hosur Road, Adugodi, <br />Bengaluru, 560030,
                  <br />Karnataka, India <br />CIN: U72200KA2013PTC097389
                </p>
                <div class="mt-6 font-mullish">
                  <p class="text-sm">© Razorpay 2022</p>
                  <p class="text-sm">All Rights Reserved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </>

  )
}
