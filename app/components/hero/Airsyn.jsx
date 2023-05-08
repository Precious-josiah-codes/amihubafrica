import Image from "next/image";

const Airsyn = () => {
    return ( 
        <section className="flex flex-col sm:flex-row px-6 lg:px-[5rem] h-[100vh] sm:h-screen">
        {/* left section */}
        <section className="h-full w-full sm:w-[40rem] flex flex-col justify-center ">
          <h1 className="text-4xl capitalize mt-3 w-[20rem] sm:w-[25rem] leading-[3rem]">
          <div className="text-2xl">Tronix</div>
           <Image src="https://res.cloudinary.com/dszhzezvt/image/upload/v1683565437/amihub/airsyn_logo_x2tuco.png" alt="Logo" width={130} height={98} priority />  <div className=" text-base ">incubated by AMIHUB</div>
          </h1>
          <p className="mt-6">
           This safety device is a groundbreaking innovation that offers real-time measurement of pollutant levels in the surrounding air. By utilizing advanced sensors and algorithms, it accurately detects various pollutants using UN/WHO standards. 
          </p>
          <p className="mt-6 hidden sm:flex">
            With this device, individuals can make informed decisions to protect their health and take necessary actions to mitigate the impact of pollutants on their surroundings.
          </p>
          <a className="w-fit py-4 px-6 mt-6 border border-[#377EAF] text-[#377EAF] rounded-md" href="http://tronix.africa/AirSyn.html">
            Learn More
          </a>
        </section>

        {/* right section */}
        <section className=" w-full sm:w-[50rem] flex items-center justify-center ">
          <div className="relative h-[30rem] w-[95%] text-center flex justify-between ">
            <Image
            src="https://res.cloudinary.com/dszhzezvt/image/upload/v1683565089/amihub/airsyn-mockup_lwckww.png"
            alt="Girl"
            className="relative z-30 sm:inline object-cover  h-full w-full hidden"
            width={1260}
            height={750}
            priority
          />
            <Image
            src="https://res.cloudinary.com/dszhzezvt/image/upload/v1683565089/amihub/airsyn-mockup_lwckww.png"
            alt="Girl"
            className="relative z-30 inline -ml-6 sm:hidden object-cover h-[350px] w-full"
            width={1260}
            height={350}
            priority
          />
          </div>
        </section>
      </section>
     );
}
 
export default Airsyn;