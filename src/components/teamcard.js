import Image from "next/image";

const TeamCard = ({ picture, name, designation }) => {
  return (
    <div className="flex flex-col items-center gap-[7px]">
      <div className="mb-[20px]">
        <Image
          src={picture}
          alt="team member"
          width={190}
          height={190}
          className="rounded-full"
        />
      </div>

      <div>
        <h5 className="text-[18px] leading-0.25 font-bold text-white uppercase">
          {name}
        </h5>
      </div>

      <div className="leading-0.25 font-medium text-white uppercase">
        {designation}
      </div>
    </div>
  );
};

export default TeamCard;
