import Image from "next/image";

const Amihub = () => {
    return ( 
        <section className="flex flex-col sm:flex-row px-6 lg:px-[5rem] h-[100vh] sm:h-screen">
        {/* left section */}
        <section className="h-full w-full sm:w-[40rem] flex flex-col justify-center ">
          <h1 className="text-4xl capitalize mt-3 leading-[3rem] text-[#377EAF]">
            africa manufacturing innovation  hub
          </h1>
          <p className="mt-6">
            Africa Manufacturing Innovation Hub (AMI Hub) is a technology driven business incubator that is established to create a platform for new and existing businesses, entrepreneurs, inventors and innovators to connect and create business solutions by providing enabling technologies, business advisory and networking.
          </p>
          <p className="mt-6 hidden sm:flex">
            Entrepreneurs and businesses can receive support in refining their business models, creating effective marketing strategies, optimizing operations, and accessing funding opportunities.
          </p>
          
        </section>

        {/* right section */}
        <section className="w-full sm:w-[50rem] flex items-center justify-center ">
          <div className="relative h-[15rem] w-[95%] sm:h-[30rem] sm:w-[95%] text-center flex justify-between rotate-[-32.31deg] sm:rotate-[-52.31deg] ">
            {/* first image */}
            <div className="h-[136.92px] w-[ 81.58px] sm:h-[280.07px] sm:w-[177.46px] bg-yellow-700 rounded-[150px]  overflow-hidden self-start">
              <Image
              src="https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Girl"
              className="relative z-30 inline object-cover h-full w-full "
              width={1260}
              height={750}
              priority
          />
            </div>

            {/* second image */}
            <div className=" h-[200.26px] w-[97px] sm:h-[505.22px] sm:w-[243.47px] bg-red-700 rounded-[150px] overflow-hidden self-center">
              <Image
            src="https://images.pexels.com/photos/1472443/pexels-photo-1472443.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Girl"
            className="relative z-30 inline object-cover h-full w-full"
            width={1260}
            height={750}
            priority
          />
            </div>

            {/* third image */}
            <div className="h-[136.92px] w-[81.58px] sm:h-[280.07px] sm:w-[177.46px] bg-blue-700 rounded-[150px] self-end overflow-hidden">
              <Image
            src="https://images.pexels.com/photos/6636463/pexels-photo-6636463.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Girl"
            className="relative z-30 inline object-cover h-full w-full"
            width={1260}
            height={750}
            priority
          />
          </div>
          </div>
          
          {/* <div className="relative h-[30rem] w-full bg-purple-700 text-center">
            <div className="h-[280.07px] w-[177.46px] bg-yellow-700 rounded-[150px] rotate-[-52.31deg] absolute"></div>
            <div className="h-[505.22px] w-[243.47px] bg-red-700 rounded-[150px] rotate-[-52.31deg] absolute right-[7rem] top-0"></div>
            <div className="h-[280.07px] w-[177.46px] bg-blue-700 rounded-[150px] rotate-[-52.31deg] absolute right-[2.8rem] top-0"></div>
          </div> */}
          
        </section>
      </section>
    );
}
 
export default Amihub;