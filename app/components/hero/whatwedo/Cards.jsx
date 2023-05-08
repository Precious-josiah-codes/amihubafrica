import Image from "next/image";

const Cards = ({ icon, title }) => {
  return (
    <div className="bg-[#95d3ff] h-[10rem] w-[17rem] flex flex-col items-center justify-center space-y-4">
      <Image
        src={icon}
        alt={title}
        className="object-cover h-[60px] w-[60px]"
        width={60}
        height={60}
        priority
      />
      <h1 className="">{title}</h1>
    </div>
  );
};

export default Cards;
