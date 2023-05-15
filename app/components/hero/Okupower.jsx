import Image from "next/image";

const Okupower = () => {
    return ( 
        <section className="flex flex-col sm:flex-row px-6 lg:px-[5rem] h-[100vh] sm:h-screen">
        {/* left section */}
        <section className="h-full w-full sm:w-[40rem] flex flex-col justify-center ">
          <h1 className="text-4xl capitalize mt-3 w-[22rem] sm:w-[25rem] leading-[3rem]">
            <a href="https://okupower.amihub.africa/">
              <div className="text-2xl">Tronix</div>
            <Image src="https://res.cloudinary.com/dszhzezvt/image/upload/v1683566537/amihub/okupower_png_1_ufw7yd.png" alt="Logo" width={130} height={98} priority />
            </a>
              <div className=" text-base ">incubated by AMIHUB</div>
          </h1>
          <p className="mt-6">
           OkuPower is a digital prepaid power meter that measures the amount of electricity consumed by a facility. The product is designed to work in real-time showing the amount of power being consumed by the facility at the moment, showing the duration the current meter units will carry, while making meter readings to be visible via a mobile device.
          </p>
        
          <a className="w-fit py-4 px-6 mt-6 border border-[#377EAF] text-[#377EAF] rounded-md" href="https://okupower.amihub.africa/">
            Learn More
          </a>
        </section>

        {/* right section */}
        <section className="w-full sm:w-[40rem] flex items-center justify-center">
          <a href="https://okupower.amihub.africa/" className="w-full sm:w-[40rem]">

            <Image
            src="https://res.cloudinary.com/dszhzezvt/image/upload/v1683565325/amihub/okupower_kbilri.png"
            alt="Girl"
            className="relative z-30 inline object-cover h-full w-full"
            width={1000}
            height={100}
            priority
          />
          </a>
        </section>
      </section>
     );
}
 
export default Okupower;