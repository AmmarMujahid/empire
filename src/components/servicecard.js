import Image from "next/image";

const ServiceCard = ({ picture, title, description }) => {
  return (
    <div className="relative flex flex-col items-center shadow-xl">
      <div className="absolute top-[-97px]">
        <Image src={picture} alt="labelling" width={334} height={217} />
      </div>

      <div className="w-[362px] h-[380px] rounded-lg bg-white pt-[140px] px-[26px] pb-[26px] flex flex-col gap-[20px] items-center">
        <h4 className="text-[24px] leading-0.21 font-bold">{title}</h4>

        <p className="text-center">{description}</p>

        <span className="uppercase text-[14px] leading-0.21 font-semibold text-primaryColor underline">
          Read More
        </span>
      </div>
    </div>
  );
};

export default ServiceCard;
