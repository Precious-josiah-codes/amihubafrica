import Image from "next/image";

const Team = ({name, position, image}) => {
    return ( 
        <div className="text-center w-[18rem]">
            {/* image container */}
            <div className="h-[20rem] w-full pt-9 rounded-tl-[5rem] rounded-tr-[5rem] bg-[#377EAF] mb-5">
                <Image
                src={image}
                alt={name}
                className="object-contain h-full w-full"
                width={160}
                height={160}
                priority
                />
            </div>
            <h1 className="font-bold capitalize">{name}</h1>
            <h2 className="capitalize">{position}</h2>
        </div>
     );
}
 
export default Team;