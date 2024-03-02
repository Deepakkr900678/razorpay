import React from 'react'
import logo from "../images/logo.svg"
import indianFlag from "../images/india-flag.svg"

export default function Navbar() {
  return (
    <div class="bg-deepBlue" >
      <div class="relative w-[1080px] mx-auto flex items-center justify-between ">
        <a href="">
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
    </div>
  )
}
