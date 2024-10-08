import React from "react";

interface StatProps {
  number: string;
  description: string;
}

const Stat: React.FC<StatProps> = ({ number, description }) => (
  <div className="flex flex-col self-stretch px-7 my-auto w-[228px] max-md:px-5">
    <div className="self-center text-6xl font-bold tracking-tighter leading-none text-zinc-800 max-md:text-4xl">
      {number}
    </div>
    <div className="z-10 text-sm font-medium leading-6 text-zinc-600">{description}</div>
  </div>
);

const WhyUseSkill3: React.FC = () => {
  return (
    <section className="flex items-start px-52 w-full text-center bg-teal-50 h-[600 px] max-md:px-5">
      <div className="flex flex-col pt-28 pb-52 min-w-[240px] w-[1024px] max-md:py-24 max-md:max-w-full">
        <h2 className="self-center text-6xl font-bold tracking-tighter leading-[76px] text-zinc-800 max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
          Why use Skill 3? <br /> It <span className="text-teal-600">works</span> like crazy.
        </h2>
        <div className="flex gap-10 items-center mt-14 max-md:mt-10 max-md:max-w-full">
          <Stat
            number="28X"
            description="Higher response rate than another website and it's transparent!"
          />
          <div className="flex flex-col items-end self-stretch pr-px pl-20 my-auto min-w-[240px] w-[883px] max-md:pl-5 max-md:max-w-full">
            <Stat
              number="17 Days"
              description="Empowering Dreams Faster: Streamlined certificate for Immediate Impact."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUseSkill3;