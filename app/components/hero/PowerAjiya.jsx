import Image from "next/image";

const PowerAjiya = () => {
    return ( 
        <section className="flex flex-col sm:flex-row px-6 lg:px-[5rem] h-[100vh] sm:h-screen">
        {/* left section */}
        <section className="h-full w-full sm:w-[40rem] flex flex-col justify-center ">
          <h1 className="text-4xl capitalize mt-3 w-[20rem] sm:w-[25rem] leading-[3rem]">
              <div className="text-2xl">Tronix</div>
              <Image src="https://res.cloudinary.com/dszhzezvt/image/upload/v1689008578/amihub/power_ajiya_logo_mark_png_vfn6xk.png" alt="Logo" width={130} height={98} priority />  
          <div className="text-base">incubated by AMIHUB</div>
          </h1>
          <p className="mt-6">
          Our power bank is available in models of 10,000maH, 15,000maH and 30,000maH. The power bank incorporates advanced features such as protection functions (OTP, OVP, OCP, VBUS, and Output Short Protection) to ensure safety during charging and dscharging. it also utilizes a smart algorithm for efficient charging and discharging at the same time, along with DPM Function for dynamic power management and Thermal regulation to prevent overheating.
          </p>
          <p className="mt-6 hidden sm:flex">
            The power bank supports dual USB output, providing a total output current of up to 2.5A. it can be controlled both automatically and through a button interface, and it includes Sync-Boost technology for enhanced charging speed.
          </p>
          {/* <a className="w-fit py-4 px-6 mt-6 border border-[#377EAF] text-[#377EAF] rounded-md" href="http://tronix.africa/AirSyn.html">
            Learn More
          </a> */}
        </section>

        {/* right section */}
        <section className=" w-full sm:w-[50rem] flex items-center justify-center ">
          <div className="relative h-[30rem] w-[95%] text-center flex justify-between ">
            <a href="http://tronix.africa/AirSyn.html">
            <Image
            src="https://res.cloudinary.com/dszhzezvt/image/upload/v1689007877/amihub/POWER_AGIYA_vrxh0e.png"
            alt="Girl"
            className="relative z-30 sm:inline object-contain  h-full w-full hidden"
            width={1260}
            height={750}
            priority
          />
            <Image
            src="https://res.cloudinary.com/dszhzezvt/image/upload/v1689007877/amihub/POWER_AGIYA_vrxh0e.png"
            alt="Girl"
            className="relative z-30 inline -ml-6 sm:hidden object-contain h-[250px] w-full"
            width={1260}
            height={350}
            priority
          />
            </a>
          </div>
        </section>
      </section>
     );
}
 
export default PowerAjiya;