import Image from "next/image";

const GazMeter = () => {
    return ( 
        <section className="flex flex-col sm:flex-row px-6 lg:px-[5rem] h-[100vh] sm:h-screen">
        {/* left section */}
        <section className="h-full w-full sm:w-[40rem] flex flex-col justify-center ">
          <h1 className="text-4xl capitalize mt-3 w-[20rem] sm:w-[25rem] leading-[3rem]">
              <div className="text-2xl">Tronix</div>
              <Image src="https://res.cloudinary.com/dszhzezvt/image/upload/v1689008533/amihub/gaz_logo_PNG_ghq5an.png" alt="Logo" width={130} height={98} priority />  
          <div className="text-base">incubated by AMIHUB</div>
          </h1>
          <p className="mt-6">
          Gaz Meter is a wireless digital gas metering system. This advanced device offers precise gas consumption monitoring, high accuracy, easy installation, strong and durable build designed to withstand different environmental conditions and resistant to factors such as dust, moisture, and other external elements.
          
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
            src="https://res.cloudinary.com/dszhzezvt/image/upload/v1689007877/amihub/GAZ_nwv7c2.png"
            alt="Girl"
            className="relative z-30 sm:inline object-cover  h-full w-full hidden"
            width={1260}
            height={750}
            priority
          />
            <Image
            src="https://res.cloudinary.com/dszhzezvt/image/upload/v1689007877/amihub/GAZ_nwv7c2.png"
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
 
export default GazMeter;