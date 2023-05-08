import Image from "next/image";

const Proxie = () => {
    return ( 
        <section className="flex flex-col sm:flex-row px-6 lg:px-[5rem]  h-[100vh] sm:h-screen">
        {/* left section */}
        <section className="h-full w-full sm:w-[40rem] flex flex-col justify-center ">

          <h1 className="text-4xl capitalize mt-3 w-[20rem] sm:w-[25rem] leading-[3rem]">
            <div className="text-2xl">Tronix</div>
             <Image src="https://res.cloudinary.com/dszhzezvt/image/upload/v1683565470/amihub/prxie_1_nfhvvv.png" alt="Logo" width={130} height={98} priority />  <div className=" text-base ">incubated by AMIHUB</div>
          </h1>
          <p className="mt-6">
            Proxie is an innovative IoT enabled smart socket that enable users to extend the coverage range of their Wi-Fi network hotspot, as well as switch on and off appliances connected to it remotely.
          </p>
          <p className="mt-6 hidden sm:flex">
            This device offers a unique solution by enabling users to extend the coverage range of their Wi-Fi network, ensuring a reliable and stable connection throughout their living or working space.
          </p>
          <button className="w-fit py-4 px-6 mt-6 border border-[#377EAF] text-[#377EAF] rounded-md">
            Learn More
          </button>
        </section>

        {/* right section */}
        <section className=" w-full sm:w-[50rem] flex items-center justify-center">
         
             <Image
            src="https://res.cloudinary.com/dszhzezvt/image/upload/v1683565755/amihub/proxie_image_hpdn6r.png"
            alt="Girl"
            className="relative z-30 sm:inline hidden object-contain h-full w-full"
            width={1000}
            height={100}
            priority
          />
             <Image
            src="https://res.cloudinary.com/dszhzezvt/image/upload/v1683565755/amihub/proxie_image_hpdn6r.png"
            alt="Girl"
            className="relative z-30 inline sm:hidden object-contain h-[270px] w-full"
            width={1000}
            height={270}
            priority
          />
        </section>
      </section>
     );
}
 
export default Proxie;