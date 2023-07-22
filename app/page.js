"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import Amihub from "./components/hero/Amihub";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import Airsyn from "./components/hero/Airsyn";
import OkuPower from "./components/hero/Okupower";
import Proxie from "./components/hero/Proxie";
import WhatWeDo from "./components/hero/whatwedo/WhatWeDo";
import Team from "./components/hero/Team";
import MmiriMeter from "./components/hero/MmiriMeter";
import PowerAjiya from "./components/hero/PowerAjiya";
import GazMeter from "./components/hero/GazMeter";

export default function Home() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [toggleWaitlist, setToggleWaitlist] = useState(false);
  const dropdownRef = useRef(null);

  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const teams = [
    {
      name: "Jimmy Bomo Okoroh",
      position: "CEO",
      image:
        "https://res.cloudinary.com/dszhzezvt/image/upload/v1685109487/Team/jimmy_xdfrzc.png",
    },
    {
      name: "gideon jonathan ",
      position: "CTO",
      image:
        "https://res.cloudinary.com/dszhzezvt/image/upload/v1685109487/Team/gideon_hmazx5.png",
    },
    {
      name: "Owhor Sandra Nyekachi",
      position: "Admin/Business Development Analyst",
      image:
        "https://res.cloudinary.com/dszhzezvt/image/upload/v1685109487/Team/sandra_p9fcyl.png",
    },
    {
      name: "eunice ebelike ",
      position: "product designer",
      image:
        "https://res.cloudinary.com/dszhzezvt/image/upload/v1685110685/Team/eunice_s1sghm.png",
    },
    {
      name: "Chuku Success Chisom",
      position: "software engineer",
      image:
        "https://res.cloudinary.com/dszhzezvt/image/upload/v1685110682/Team/success_qjfwhg.png",
    },
    {
      name: "Sunny-Ade boma . F .",
      position: "intern",
      image:
        "https://res.cloudinary.com/dszhzezvt/image/upload/v1685110684/Team/boma_nuwbje.png",
    },
    {
      name: "precious josiah",
      position: "lead software engineer",
      image:
        "https://res.cloudinary.com/dszhzezvt/image/upload/v1685110683/Team/precious_cmsgzp.png",
    },
    {
      name: "Bridget Dinebari Beebe",
      position: "embedded/iot engineer",
      image:
        "https://res.cloudinary.com/dszhzezvt/image/upload/v1685110686/Team/bridget_h4w628.png",
    },
    {
      name: "Victor Isaac Ibani",
      position: "Software Engineer",
      image:
        "https://res.cloudinary.com/dszhzezvt/image/upload/v1685110682/Team/victor_ovtawm.png",
    },
    {
      name: "gonee ledor joy",
      position: "janitor",
      image:
        "https://res.cloudinary.com/dszhzezvt/image/upload/v1685110683/Team/joy_wicdp4.png",
    },
    {
      name: "benjamin .c. ochia",
      position: "brand identity designer",
      image:
        "https://res.cloudinary.com/dszhzezvt/image/upload/v1685110682/Team/benjamin_vx4yvu.png",
    },
    {
      name: "Okia Favour Ugochukwu",
      position: "lead embedded/iot engineer",
      image:
        "https://res.cloudinary.com/dszhzezvt/image/upload/v1685110686/Team/favour_n7q5mo.png",
    },
    {
      name: "julius .p. aseimegha",
      position: "facility manager",
      image:
        "https://res.cloudinary.com/dszhzezvt/image/upload/v1685110682/Team/julius_kfoxo1.png",
    },
  ];
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const isMobile = useMediaQuery("(max-width: 768px)");

  // toggle sidebar for mobile
  const toggleSideBar = () => {
    setShowSidebar(!showSidebar);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <main className="bg-[#F0EFEF]">
      {/* start nav */}
      <nav className="flex items-center justify-between w-full py-6 px-6 lg:px-[5rem] sticky top-0 z-[999] bg-[#F0EFEF]">
        {/* logo */}
        <h1 className="font-bold">
          <Image src="/logo.svg" alt="Logo" width={200} height={90} priority />
          <h2 className="-mt-4 text-blue-900 leading-4">
            Developing Africa's Technology Solution
          </h2>
        </h1>

        {/* links */}
        <div className="flex justify-end sm:justify-between w-[20rem] text-black">
          <span>
            <a
              href="http://tronix.africa/AirSyn.html"
              className="hidden sm:block px-4 py-2 text-gray-800 hover:text-[#377EAF]"
            >
              Airsyn
            </a>
          </span>

          {/* // for mobile */}
          <span class="sm:hidden relative inline-block" ref={dropdownRef}>
            <span
              onClick={toggleMenu}
              className="hover:text-[#377EAF]  focus:border focus:border-b-2 cursor-pointer active:text-[#377EAF]"
            >
              Products
            </span>
            {isOpen && (
              <ul className="absolute right-0 bg-white shadow-md rounded-md mt-2  py-2 w-[7rem]">
                <li>
                  <a
                    href="http://tronix.africa/AirSyn.html"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Airsyn
                  </a>
                </li>
                <li>
                  <a
                    href="https://okupower.amihub.africa/"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    OkuPower
                  </a>
                </li>
                <li>
                  <a
                    href="https://proxie.amihub.africa/"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Proxie
                  </a>
                </li>
              </ul>
            )}
          </span>

          <span>
            <a
              href="https://okupower.amihub.africa/"
              className="hidden sm:block px-4 py-2 text-gray-800 hover:text-[#377EAF]"
            >
              OkuPower
            </a>
          </span>
          <span>
            <a
              href="https://proxie.amihub.africa/"
              className="hidden sm:block px-4 py-2 text-gray-800 hover:text-[#377EAF]"
            >
              Proxie
            </a>
          </span>
        </div>

        {/* hamburger menu */}
        {/* <div className="flex sm:hidden" onClick={toggleSideBar}>
          <svg
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="text-black h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            ></path>
          </svg>
        </div> */}
      </nav>
      {/* end nav */}

      {/* start hero section */}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={isMobile ? false : true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <Amihub />
        </SwiperSlide>
        <SwiperSlide>
          <Airsyn />
        </SwiperSlide>
        <SwiperSlide>
          <OkuPower />
        </SwiperSlide>
        <SwiperSlide>
          <Proxie />
        </SwiperSlide>
        <SwiperSlide>
          <MmiriMeter />
        </SwiperSlide>
        <SwiperSlide>
          <PowerAjiya />
        </SwiperSlide>
        <SwiperSlide>
          <GazMeter />
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
      {/* end hero section */}

      {/* start pattern one */}
      <section className="h-[186px] w-full ">
        <Image
          src="./pattern1.svg"
          alt="Girl"
          className="object-cover h-full w-full"
          width={1260}
          height={186}
          priority
        />
      </section>
      {/* end pattern one */}

      {/* start our mission */}
      <section className="flex items-center justify-between px-6 py-9 lg:px-[5rem] sm:space-x-9">
        {/* left section */}
        <section className="flex-1 h-[40rem] bg-red-500">
          <Image
            src="https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Girl"
            className="object-cover h-full w-full"
            width={1260}
            height={186}
            priority
          />
        </section>

        {/* right section */}
        <section className="w-full sm:w-[40rem]">
          {/* our mission first section */}
          <div className="flex items-center space-x-6 mb-10">
            <div className="w-[5rem] sm:w-[10rem] h-fit bg-green-300 flex">
              <Image
                src="./line1.svg"
                alt="Line"
                className="object-cover h-[3px] w-full "
                width={100}
                height={3}
                priority
              />
            </div>
            <h1 className="text-4xl text-[#0A8C55]">Our Mission</h1>
          </div>

          {/* our mission second section */}
          <p className="mb-5">
            We are developing Africa's top-quality products and services through
            robust incubation, acceleration, trade and investment oppurtunities
            to deliver global solutions
          </p>

          {/* our vision first section */}
          <div className="flex items-center space-x-6 mb-10 mt-10">
            <div className="w-[5rem] sm:w-[10rem] h-fit bg-green-300 flex">
              <Image
                src="./line1.svg"
                alt="Line"
                className="object-cover h-[3px] w-full "
                width={100}
                height={3}
                priority
              />
            </div>
            <h1 className="text-4xl text-[#0A8C55]">Our Vision</h1>
          </div>

          {/* our vision second section */}
          <div className="mb-5">
            <ul className="space-y-9 pl-5 mt-5 sm:mt-0 sm:pl-0">
              <li className="list-disc">
                Becoming the Leader in Africa Manufacturing Innovation that
                provides a range of top quality brands, products and services.
              </li>
              <li className="list-disc">
                Impacting every aspect of the manufacturing business; from
                design, research and development, production, supply chain and
                logistics management through to sales, marketing and even end of
                life management.
              </li>
            </ul>
          </div>

          <section className="sm:hidden flex-1 h-[20rem] bg-red-500 mb-5">
            <Image
              src="https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Girl"
              className="object-cover h-full w-full "
              width={1260}
              height={186}
              priority
            />
          </section>
        </section>
      </section>
      {/* end our mission */}

      {/* start logo section */}
      <section className="px-6 lg:px-[5rem] h-[20rem] sm:h-[15rem] flex items-center">
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-x-[1rem] gap-y-[1rem] sm:gap-y-0 w-[70rem]">
          <div className="h-[8rem] w-[10] sm:h-[10rem] sm:w-[13rem] border border-black flex justify-center items-center rounded-xl">
            <Image
              src="https://res.cloudinary.com/dszhzezvt/image/upload/v1683553728/amihub/DREL_avahtu.png"
              alt="Drel company logo"
              className="object-cover "
              width={200}
              height={200}
              priority
            />
          </div>
          <div className="h-[8rem] w-[10] sm:h-[10rem] sm:w-[13rem] border border-black flex justify-center items-center rounded-xl">
            <Image
              src="https://res.cloudinary.com/dszhzezvt/image/upload/v1683553727/amihub/CLINR_z284d8.png"
              alt="Clinr company logo"
              className="object-cover "
              width={100}
              height={100}
              priority
            />
          </div>
          <div className="h-[8rem] w-[10] sm:h-[10rem] sm:w-[13rem] border border-black flex justify-center items-center rounded-xl">
            <Image
              src="https://res.cloudinary.com/dszhzezvt/image/upload/v1683553738/amihub/ARIAL_TECK_bnhl1h.png"
              alt="arial teck company product"
              className="object-cover "
              width={100}
              height={100}
              priority
            />
          </div>
          <div className="h-[8rem] w-[10] sm:h-[10rem] sm:w-[13rem] border border-black flex justify-center items-center rounded-xl">
            <Image
              src="https://res.cloudinary.com/dszhzezvt/image/upload/v1683553732/amihub/GECLAT_mukn8t.png"
              alt="geclat company product"
              className="object-cover "
              width={100}
              height={100}
              priority
            />
          </div>
          {/* <div className="h-[8rem] w-[10] sm:h-[10rem] sm:w-[13rem] border border-black flex justify-center items-center rounded-xl">
            <Image
              src="./companylogo1.svg"
              alt=""
              className="object-cover h-[100px] w-[100px]"
              width={100}
              height={100}
              priority
            />
          </div> */}
        </div>
      </section>
      {/* end logo section */}

      {/* start our core values */}
      <section className="flex flex-col sm:flex-row justify-between px-6 lg:px-[5rem] sm:space-x-9 items-center py-9 ">
        {/* left section */}
        <section className="hidden sm:flex space-y-[5rem] w-[80rem] h-[30rem]">
          <Image
            src="./pattern2.svg"
            alt=""
            className="object-cover h-[480px] w-[650px]"
            width={650}
            height={480}
            priority
          />
        </section>

        {/* right section */}
        <section className="w-full">
          {/* first section */}
          <div className="flex items-center sm:space-x-6 mb-10">
            <h1 className="text-4xl text-[#F2B123]">Our Core Values</h1>
          </div>

          {/* second section */}
          <div className="flex pl-5  space-x-12 sm:space-x-[13rem]">
            <ul className="space-y-9">
              <li className="list-disc">Creativity</li>
              <li className="list-disc">Efficiency</li>
            </ul>
            <ul className="space-y-9">
              <li className="list-disc">Simplicity</li>
              <li className="list-disc">Flexibility</li>
            </ul>
          </div>
        </section>
      </section>
      {/* end our core values */}

      {/* start airsyn */}
      <section className="flex items-center justify-between px-6 py-9 lg:px-[5rem] sm:space-x-9">
        {/* left section */}
        <section className="w-[40rem] h-[40rem] sm:flex hidden bg-red-500 px-6">
          <Image
            src="/airsyn-product-1.png"
            alt="Airsyn Product"
            className="object-contain h-full w-full"
            width={1260}
            height={186}
            priority
          />
        </section>

        {/* right section */}
        <section className="w-full sm:w-[40rem]">
          {/* first section */}
          <div className="flex items-center space-x-6 mb-10">
            <div className="w-[5rem] sm:w-[10rem] h-fit bg-green-300 hidden sm:flex  relative">
              <h1 className="absolute -top-6">Tronix</h1>
              <Image
                src="./line1.svg"
                alt="Line"
                className="object-cover h-[3px] w-full "
                width={100}
                height={3}
                priority
              />
            </div>
            <h1 className="text-4xl text-[#D20202] font-bold">Airsyn</h1>
          </div>

          {/* second section */}
          <p className="mb-5">
            AirSyn is a personal and industrial air quality monitoring device.
            It monitors ambient air quality within an environment and can detect
            up to 16 pollutants simultaneously which makes it a perfect
            replacement for the traditional smoke detector and fire alarm
            installed in homes, offices, factories, public places etc, providing
            real-time monitoring for effective decision making.
          </p>

          {/* airsyn image */}
          <section className="sm:hidden flex-1 h-[20rem] bg-[#D20202] mb-5">
            <Image
              src="/airsyn-product-1.png"
              alt="Airsyn Logo"
              className="object-contain h-full w-full "
              width={1260}
              height={186}
              priority
            />
          </section>

          {/* why */}
          <h1 className="mt-10 pb-3 font-bold">Why Airsyn</h1>
          <div>
            <div>• Used as a wireless access point.</div>
            <div>
              • Used as a safety device in homes, offices, and other
              environments.
            </div>
            <div>
              • Used as an early warning system and HSE mitigation Instrument.
            </div>
            <div>
              • It can be locked to a specific network service provider,
              increase sales for telecoms operator through constant usage.
            </div>
          </div>

          {/* product features */}
          <h1 className="mt-10 pb-3 font-bold">Product Features</h1>
          <div className="sm:flex sm:space-x-6 space-y-6 sm:space-y-0">
            <div>
              <div>• Simple installation</div>
              <div>• Up-To-The-Minute air quality update</div>
              <div>• Location-Based update</div>
              <div>• Air Quality Data Stored Securely on The Cloud</div>
              <div>• Ai-Enable Pattern Recognition</div>
            </div>
            <div>
              <div>• Mobile And App Enabled</div>
              <div>• Compatibility with wireless networks</div>
              <div>• Over 15m Wi-Fi range</div>
              <div>• Over 5 hours of battery life</div>
              <div>Remote monitoring and management</div>
              <div>• Rechargeable (solar, grid, and off-grid system)</div>
            </div>
          </div>
        </section>
      </section>
      {/* end airsyn */}

      {/* start proxie */}
      <section className="flex items-center justify-between px-6 py-9 lg:px-[5rem] sm:space-x-9">
        {/* left section */}
        <section className="w-full sm:w-[40rem]">
          {/* first section */}
          <div className="flex items-center space-x-6 mb-10">
            <div className="w-[5rem] sm:w-[10rem] h-fit bg-green-300 flex relative">
              <h1 className="absolute -top-6">Tronix</h1>
              <Image
                src="./line1.svg"
                alt="Line"
                className="object-cover h-[3px] w-full "
                width={100}
                height={3}
                priority
              />
            </div>
            <h1 className="text-4xl text-[#D20202] font-bold">Proxie</h1>
          </div>

          {/* second section */}
          <p className="mb-5">
            Proxie is an IoT-enabled smart socket that enables users to extend
            the coverage range of their WiFi network hotspot, as well as switch
            on and off appliances connected to it remotely. The device can be
            controlled both online as well as offline. It comes with a user
            interface for control. Proxie can be used in homes as well as
            industries due to it being built to handle up to 20amps of current
            at 110/250volts, and protects equipment with its surge protection
            capabilities.
          </p>
          {/* proxie image */}
          <section className="sm:hidden flex-1 h-[20rem] border border-gray-500 mb-5">
            <Image
              src="https://res.cloudinary.com/dszhzezvt/image/upload/v1683566012/amihub/proxie_image_2_ju4hqn.png"
              alt="Proxie Logo"
              className="object-contain h-full w-full "
              width={1260}
              height={186}
              priority
            />
          </section>
          {/* why */}
          <h1 className="mt-10 pb-3 font-bold">Why Proxie</h1>
          <div>
            <div>• Used as a wireless access point.</div>
            <div>
              • Used as a safety device in homes, offices, and other
              environments.
            </div>
            <div>
              • Used as an early warning system and HSE mitigation Instrument.
            </div>
            <div>
              • It can be locked to a specific network service provider,
              increase sales for telecoms operator through constant usage.
            </div>
          </div>
          {/* product features */}
          <h1 className="mt-10 pb-3 font-bold">Product Features</h1>
          <div className="sm:flex  sm:space-x-6 space-y-6 sm:space-y-0">
            <div>
              <div>
                • Used to deploy wireless network systems in offices, schools,
                hotels, homes, etc.
              </div>
              <div>• Used to extend the range of a Wi-Fi hotspot</div>
              <div>
                • Used to protect networking equipment and other appliances from
                power surges and static electricity
              </div>
            </div>
            <div>
              <div>• Used to optimize electricity management efficiency</div>
              <div>
                • Used to disable power remotely with its remote control feature
              </div>
            </div>
          </div>
        </section>

        {/* right section */}
        <section className="flex-1 h-[40rem] border border-gray-900">
          <Image
            src="https://res.cloudinary.com/dszhzezvt/image/upload/v1683566012/amihub/proxie_image_2_ju4hqn.png"
            alt="Proxie Logo"
            className="object-contain h-full w-full"
            width={1260}
            height={186}
            priority
          />
        </section>
      </section>
      {/* end proxie */}

      {/* start OkuPower */}
      <section className="flex items-center justify-between px-6 py-9 lg:px-[5rem] sm:space-x-9">
        {/* left section */}
        <section className="flex-1 h-[40rem] bg-white">
          <Image
            src="https://res.cloudinary.com/dszhzezvt/image/upload/v1683565325/amihub/okupower_kbilri.png"
            alt="OkuPower Product"
            className="object-contain h-full w-full"
            width={1260}
            height={186}
            priority
          />
        </section>

        {/* right section */}
        <section className="w-full sm:w-[40rem]">
          {/* first section */}
          <div className="flex items-center space-x-6 mb-10">
            <div className="w-[5rem] sm:w-[10rem] h-fit bg-green-300 flex relative">
              <h1 className="absolute -top-6">Tronix</h1>
              <Image
                src="./line1.svg"
                alt="Line"
                className="object-cover h-[3px] w-full "
                width={100}
                height={3}
                priority
              />
            </div>
            <h1 className="text-4xl text-[#0A8C55] font-bold">OkuPower</h1>
          </div>
          {/* second section */}
          <p className="mb-5">
            OkuPower is a digital prepaid electricity meter that measures the
            amount of electricity consumed by a facility. The product is
            designed to work in real-time showing the amount of power being
            consumed by the facility, showing the duration the current meter
            units carry, while making meter readings to be visible via a mobile
            device.
          </p>
          {/* OkuPower image */}
          <section className="sm:hidden flex-1 h-[20rem] bg-white mb-5">
            <Image
              src="https://res.cloudinary.com/dszhzezvt/image/upload/v1683565325/amihub/okupower_kbilri.png"
              alt="OkuPower Product"
              className="object-cover h-full w-full "
              width={1260}
              height={150}
              priority
            />
          </section>
          {/* why */}
          <h1 className="mt-10 pb-3 font-bold">Why OkuPower</h1>
          <div>
            <div>
              • AC Power monitoring and management for any kind of environment
            </div>
            <div>
              • It can be used estate for sales of off-grid power to house or
              facility owners, hence it offers the enablement for monetization
              of off-grid power generating systems.
            </div>
            <div>• It offers first-level surge protection for facilities.</div>
            <div>
              • It can be locked to a specific network service provider,
              increase sales for telecoms operator through constant usage.
            </div>
          </div>
          {/* product features */}
          <h1 className="mt-10 pb-3 font-bold">Product Features</h1>
          <div className="sm:flex  sm:space-x-6 space-y-6 sm:space-y-0">
            <div className="sm:w-[50%]">
              <div>
                • It can be used to drive the sales of recharge cards, as it can
                interact with an API that enables airtime to be converted to
                legal tender (NGN) and use the money value to purchase power
                units automatically.
              </div>
            </div>
            <div className="sm:w-[50%]">
              <div>• Used to optimize electricity management efficiency</div>
              <div>
                • Used to disable power remotely with its remote control feature
              </div>
              <div>• The device can also be used as a network downlink.</div>
            </div>
          </div>
        </section>
      </section>
      {/* end OkuPower */}

      {/* start mmiri meter */}
      <section className="flex items-center justify-between px-6 py-9 lg:px-[5rem] sm:space-x-9">
        {/* left section */}
        <section className="w-full sm:w-[40rem]">
          {/* first section */}
          <div className="flex items-center space-x-6 mb-10">
            <div className="w-[5rem] sm:w-[10rem] h-fit bg-green-300 flex relative">
              <h1 className="absolute -top-6">Tronix</h1>
              <Image
                src="./line1.svg"
                alt="Line"
                className="object-cover h-[3px] w-full "
                width={100}
                height={3}
                priority
              />
            </div>
            <h1 className="text-4xl text-[#D20202] font-bold">Mmiri Meter</h1>
          </div>

          {/* second section */}
          <p className="mb-5">
            Mmiri Meter is a smart water meter that is developed to monitor,
            collect and make water flow data readily to accessible for consumers
            via the users mobile devices.
          </p>
          {/* mmiri image */}
          <section className="sm:hidden flex-1 h-[20rem] border border-gray-500 mb-5">
            <Image
              src="https://res.cloudinary.com/dszhzezvt/image/upload/v1689007872/amihub/MMIRI_kaxvus.png"
              alt="mmiri Logo"
              className="object-contain h-full w-full "
              width={1260}
              height={186}
              priority
            />
          </section>
          {/* why */}
          <h1 className="mt-10 pb-3 font-bold">Why Mmiri Meter</h1>
          <div>
            <div>• Accurate.</div>
            <div>• Durable.</div>
            <div>• User-friendly.</div>
          </div>
          {/* product features */}
          <h1 className="mt-10 pb-3 font-bold">Product Features</h1>
          <div className="sm:flex  sm:space-x-6 space-y-6 sm:space-y-0">
            <div>
              <div>• Monitor water consumption.</div>
              <div>• Hassle free water management.</div>
              <div>• Simply load credit.</div>
            </div>
          </div>
        </section>

        {/* right section */}
        <section className="flex-1 h-[40rem] border border-gray-900">
          <Image
            src="https://res.cloudinary.com/dszhzezvt/image/upload/v1689007872/amihub/MMIRI_kaxvus.png"
            alt="Proxie Logo"
            className="object-contain h-full w-full"
            width={1260}
            height={186}
            priority
          />
        </section>
      </section>
      {/* end mmiri meter */}

      {/* start Power Ajiya */}
      <section className="flex items-center justify-between px-6 py-9 lg:px-[5rem] sm:space-x-9">
        {/* left section */}
        <section className="flex-1 h-[40rem] bg-white">
          <Image
            src="https://res.cloudinary.com/dszhzezvt/image/upload/v1689007877/amihub/POWER_AGIYA_vrxh0e.png"
            alt="OkuPower Product"
            className="object-contain h-full w-full"
            width={1260}
            height={186}
            priority
          />
        </section>

        {/* right section */}
        <section className="w-full sm:w-[40rem]">
          {/* first section */}
          <div className="flex items-center space-x-6 mb-10">
            <div className="w-[5rem] sm:w-[10rem] h-fit bg-green-300 flex relative">
              <h1 className="absolute -top-6">Tronix</h1>
              <Image
                src="./line1.svg"
                alt="Line"
                className="object-cover h-[3px] w-full"
                width={100}
                height={3}
                priority
              />
            </div>
            <h1 className="text-4xl text-[#0A8C55] font-bold">Power Ajiya</h1>
          </div>
          {/* second section */}
          <p className="mb-5">
            Our power bank is available in models of 10,000maH, 15,000maH and
            30,000maH. The power bank incorporates advanced features such as
            protection functions (OTP, OVP, OCP, VBUS, and Output Short
            Protection) to ensure safety during charging and dscharging. it also
            utilizes a smart algorithm for efficient charging and discharging at
            the same time, along with DPM Function for dynamic power management
            and Thermal regulation to prevent overheating.
          </p>
          {/* OkuPower image */}
          <section className="sm:hidden flex-1 h-[20rem] bg-white mb-5">
            <Image
              src="https://res.cloudinary.com/dszhzezvt/image/upload/v1689007877/amihub/POWER_AGIYA_vrxh0e.png"
              alt="Power Ajiya Product"
              className="object-contain h-full w-full "
              width={1260}
              height={150}
              priority
            />
          </section>
          {/* why */}
          <h1 className="mt-10 pb-3 font-bold">Why Power Ajiya</h1>
          <div>
            <div>• Advanced Safety Features</div>
            <div>• Efficient Charging and Discharging.</div>
            <div>• DPM Function for Dynamic Power Management.</div>
          </div>
          {/* product features */}
          <h1 className="mt-10 pb-3 font-bold">Product Features</h1>
          <div className="sm:flex  sm:space-x-6 space-y-6 sm:space-y-0">
            <div className="sm:w-[50%]">
              <div>• Protection Functions (OTP, OVP, OCP, VBUS).</div>
            </div>
            <div className="sm:w-[50%]">
              <div>• Output short protection</div>
              <div>• Thermal Regulation</div>
              <div>• Dynamic Power Management.</div>
            </div>
          </div>
        </section>
      </section>
      {/* end Power Ajiya */}

      {/* start gaz meter */}
      <section className="flex items-center justify-between px-6 py-9 lg:px-[5rem] sm:space-x-9">
        {/* left section */}
        <section className="w-full sm:w-[40rem]">
          {/* first section */}
          <div className="flex items-center space-x-6 mb-10">
            <div className="w-[5rem] sm:w-[10rem] h-fit bg-green-300 flex relative">
              <h1 className="absolute -top-6">Tronix</h1>
              <Image
                src="./line1.svg"
                alt="Line"
                className="object-cover h-[3px] w-full "
                width={100}
                height={3}
                priority
              />
            </div>
            <h1 className="text-4xl text-[#D20202] font-bold">Gaz Meter</h1>
          </div>

          {/* second section */}
          <p className="mb-5">
            Gaz Meter is a wireless digital gas metering system. This advanced
            device offers precise gas consumption monitoring, high accuracy,
            easy installation, strong and durable build designed to withstand
            different environmental conditions and resistant to factors such as
            dust, moisture, and other external elements. Our robust construction
            ensures the longetivity and reliable performance of the gas meter
            over an extended period, making it a dependable solution for gas
            consumption monitoring. Compatible with various gas supply systems,
            it empowers you to monitor and optimize your gas effectively. Stay
            in control of your energy consumption with our reliable and
            efficient gas meter.
          </p>
          {/* Gaz meter image */}
          <section className="sm:hidden flex-1 h-[20rem] border border-gray-500 mb-5">
            <Image
              src="https://res.cloudinary.com/dszhzezvt/image/upload/v1689007877/amihub/GAZ_nwv7c2.png"
              alt="Gaz meter"
              className="object-contain h-full w-full "
              width={1260}
              height={186}
              priority
            />
          </section>
          {/* why */}
          <h1 className="mt-10 pb-3 font-bold">Why Gaz Meter</h1>
          <div>
            <div>• Precise gas consumption monitoring.</div>
            <div>• Easy Installation.</div>
            <div>• Strong and Durable design.</div>
            <div>• Resistant to factors such as dust and moisture.</div>
          </div>
        </section>

        {/* right section */}
        <section className="flex-1 h-[40rem] border border-gray-900">
          <Image
            src="https://res.cloudinary.com/dszhzezvt/image/upload/v1689007877/amihub/GAZ_nwv7c2.png"
            alt="Gaz meter"
            className="object-contain h-full w-full"
            width={1260}
            height={186}
            priority
          />
        </section>
      </section>
      {/* end gaz meter */}

      {/* start our accomplishment */}
      <section className="space-y-10 px-6 lg:px-[5rem] py-9">
        {/* first section */}
        <div className="flex items-center sm:justify-center sm:space-x-6 mb-10 w-full">
          <div className="w-[10rem] h-fit bg-green-300 flex">
            <Image
              src="./line1.svg"
              alt="Line"
              className="object-cover h-[3px] w-full "
              width={100}
              height={3}
              priority
            />
          </div>
          <h1 className="text-4xl">Our Accomplishments</h1>
        </div>

        {/* second section */}
        <p className="sm:text-center">
          AMIHUB a renowned organization dedicated to fostering technological
          innovation through their specialized technology incubators, showcased
          their unwavering commitment to promoting cutting-edge ideas and
          supporting emerging talents by sponsoring Tronix with their
          groundbreaking Proxie product as a formidable contender in the
          prestigious NCC annual innovation competition. As a testament to the
          exceptional capabilities and ingenuity of Tronix, their sponsored
          product, Proxie, outshined numerous competitors and emerged as a
          highly recognized runner-up, solidifying AMIHUB reputation as a
          catalyst for groundbreaking advancements in the industry. Furthermore,
          in their unwavering dedication to making a positive impact on the
          local community, AMIHUB extended their support by generously
          sponsoring a promising and passionate kids football club, nurturing
          the potential of young athletes and fostering a sense of discipline,
          and teamwork among the youth.
        </p>

        {/* third section */}
        <section className="flex justify-between">
          {/* left section */}
          <div className="w-full sm:w-[50rem] h-[40rem] bg-[#c7e8ff] p-6 space-y-6">
            {/* first row */}
            <div className="flex justify-between space-x-6 ">
              <div className="bg-red-500 h-[11.3rem] w-[20rem] sm:w-[30rem] ">
                <Image
                  src="/proxie-product2.jpg"
                  alt="Line"
                  className="object-cover h-[180.8px]"
                  width={480}
                  height={180.8}
                  priority
                />
              </div>
              <div className="bg-white flex items-center justify-center h-[11.3rem] w-[20rem] sm:w-[15rem]">
                <Image
                  src="https://res.cloudinary.com/dszhzezvt/image/upload/v1683566012/amihub/proxie_image_2_ju4hqn.png"
                  alt="Line"
                  className="object-contain  "
                  width={480}
                  height={100}
                  priority
                />
              </div>
            </div>
            {/* second row */}
            <div className="flex justify-between space-x-6 ">
              <div className="bg-red-500 h-[11.3rem] w-[20rem] sm:w-[25rem]">
                <Image
                  src="/airsyn-1.jpg"
                  alt="Line"
                  className="object-cover h-[180.8px]"
                  width={480}
                  height={180.8}
                  priority
                />
              </div>
              <div className="bg-blue-500 h-[11.3rem] w-[20rem] sm:w-[15rem]">
                <Image
                  src="/airsyn-2.jpg"
                  alt="Line"
                  className="object-cover h-[180.8px]"
                  width={480}
                  height={180.8}
                  priority
                />
              </div>
              <div className="bg-blue-500 h-[11.3rem] w-[15rem] hidden sm:flex">
                <Image
                  src="/airsyn-3.jpg"
                  alt="Line"
                  className="object-cover h-[180.8px]"
                  width={480}
                  height={180.8}
                  priority
                />
              </div>
            </div>
            {/* third row */}
            <div className="flex justify-between space-x-6 ">
              <div className="bg-gray-400    flex items-center h-[11.3rem] w-[20rem] sm:w-[30rem]">
                <Image
                  src="/OkuPower_product-1.png"
                  alt="Line"
                  className="object-contain h-[140px]"
                  width={480}
                  height={180.8}
                  priority
                />
              </div>
              <div className="bg-white flex items-center h-[11.3rem] w-[20rem] sm:w-[15rem]">
                <Image
                  src="/OkuPower_product-2.png"
                  alt="Line"
                  className="object-contain h-[140.8px]"
                  width={480}
                  height={180.8}
                  priority
                />
              </div>
            </div>
          </div>

          {/* right section */}
          <div className="hidden sm:flex w-[20rem] h-[40rem]">
            <Image
              src="./pattern3.svg"
              alt=""
              className="object-cover h-[640px] w-[480px]"
              width={480}
              height={640}
              priority
            />
          </div>
        </section>
      </section>
      {/* end our accomplishment */}

      {/* start pattern two */}
      <section className="h-[186px] w-full ">
        <Image
          src="./pattern1.svg"
          alt="Girl"
          className="object-cover h-full w-full"
          width={1260}
          height={186}
          priority
        />
      </section>
      {/* end pattern two */}

      {/* start what we do */}
      <section className="px-6 lg:px-[5rem] py-[4rem] space-y-6">
        <h1 className="text-center text-4xl">What We Do</h1>
        <WhatWeDo isMobile={isMobile} />
      </section>
      {/* end what we do */}

      {/* start wait list */}
      <section className="px-6 lg:px-[5rem] py-[4rem] space-y-6">
        <h1 className="text-center text-4xl">Join our waitlist</h1>
        <p className="text-center mx-auto  w-[30rem]">
          Join the train of over 1000 early adopters actively waiting for our
          products. Be the first to know when we hit the market
        </p>
        <div className="w-fit mx-auto">
          <button
            className="w-fit py-4 px-6 mt-4 border border-[#377EAF] text-[#377EAF] rounded-md"
            onClick={() => setToggleWaitlist(!toggleWaitlist)}
          >
            Join Now
          </button>
        </div>
        {/* waitlist form */}
        {toggleWaitlist && (
          <div
            className="mx-auto w-fit
        "
          >
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfYeUIv1XAqO8lHwAcV-dleQO9CxjDZo8iA6Rloswacf_sYMw/viewform?embedded=true"
              width="640"
              height="936"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
            >
              Loading…
            </iframe>
          </div>
        )}
      </section>
      {/* end wait list */}

      {/* start team */}
      <section className="bg-[#EBE9E9] h-[740vh] sm:h-[280vh] px-6 lg:px-[5rem]">
        <h1 className="text-4xl text-[#377EAF] py-9">Meet The Team</h1>
        <div className="grid sm:grid-cols-4 gap-y-6">
          {teams.map((team, index) => (
            <Team
              key={index}
              name={team.name}
              position={team.position}
              image={team.image}
            />
          ))}
        </div>
      </section>
      {/* end team */}

      {/* start footer */}
      {/* NOTE: When ready reset the height back to h-[24rem] sm:h-[25rem] */}
      <footer className="bg-[#EBE9E9] px-6 lg:px-[5rem] h-[30rem] sm:h-[15rem] flex flex-col justify-between py-[4rem] ">
        {/* first section */}
        {/* NOTE: When ready remove hidden  */}
        <div className="sm:hidden flex flex-col sm:flex-row justify-between items-center sm:items-start">
          {/* first column */}
          <div className="sm:space-y-8 flex-1 items-center justify-between sm:block">
            {/* logo */}
            <div className="text-white">
              <Image
                src="/logo.svg"
                alt="Logo"
                width={100}
                height={98}
                priority
              />
            </div>
          </div>

          {/* second column */}
          <div className="flex-1 sm:flex-col sm:space-y-3 sm:space-x-0 space-x-4 mt-6 sm:mt-0">
            <h1 className="text-xl capitalize text-[#377EAF]">Airsyn</h1>
            {/* <div className="hidden sm:flex flex-col sm:flex-row sm:space-x-3">
              Lorem ipsum dolor sit amet consectetur. Sed mi ultrices ferment
            </div> */}
          </div>

          {/* third column */}
          <div className="flex-1 sm:flex-col sm:space-y-3 sm:space-x-0 space-x-4 mt-6 sm:mt-0">
            <h1 className="text-xl text-[#377EAF] capitalize">OkuPower</h1>
            {/* <div className="hidden sm:flex flex-col sm:flex-row sm:space-x-3">
              Lorem ipsum dolor sit amet consectetur. Sed mi ultrices ferment
            </div> */}
          </div>

          {/* fourth column */}
          <div className="flex-1 sm:flex-col sm:space-y-3 sm:space-x-0 space-x-4 mt-6 sm:mt-0">
            <h1 className="text-xl text-[#377EAF] capitalize">Proxie</h1>
            {/* <div className="hidden sm:flex flex-col sm:flex-row sm:space-x-3">
              Lorem ipsum dolor sit amet consectetur. Sed mi ultrices ferment
            </div> */}
          </div>
        </div>

        {/* second section */}
        <div className="flex flex-col sm:flex-row items-center space-y-2 justify-center sm:justify-between sm:border-t border-[#515151] pt-6 pb-6">
          <div className="text-[#377EAF] hidden sm:flex items-center space-x-3">
            <div className="border border-[#377EAF] rounded-full w-5 h-5 flex items-center justify-center p-2">
              C
            </div>
            <div>all copy rights reserved</div>
          </div>
          <div className="flex justify-between items-center w-[10rem] ">
            <div>
              <a
                href="https://www.instagram.com/tronixafrica/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <Image
                  src="/instagram.svg"
                  alt="instagram"
                  className=""
                  width={35}
                  height={35}
                  priority
                />
              </a>
            </div>
            <div>
              <a
                href="https://twitter.com/TronixAfrica"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/twitter.svg"
                  alt="twitter"
                  className=""
                  width={35}
                  height={35}
                  priority
                />
              </a>
            </div>
            <div>
              <a
                href="https://web.facebook.com/TronixAfrica"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/facebook.svg"
                  alt="facebook"
                  className=""
                  width={35}
                  height={35}
                  priority
                />
              </a>
            </div>
          </div>
          <div className="flex text-[#377EAF] sm:text-left text-center mt-[3rem] sm:mt-0">
            Call Us: +234-808-422-2220 <br />| Email Us: hi@amihub.africa <br />{" "}
            Address: No. 9 Rumuogna Road, Rumuogba Estate, <br /> Port Harcourt,
            Nigeria
          </div>
        </div>
      </footer>
      {/* end footer */}
    </main>
  );
}
