import Image from 'next/image';
import AnimationContainer from '../utils/AnimationContainer';
import React from 'react';

const DesignHero = () => {
  return (
    <div className="w-full flex justify-between flex-col-reverse lg:flex-row items-center">
      <AnimationContainer customClassName="w-[300px] md:w-[600px] relative mb-6 lg:mb-0">
        <Image
          alt="Silicon Forensics Branded Products"
          height={600}
          width={600}
          src="/siforce/siSpread.png"
          sizes="30vw"
          priority
          className="rounded-[8px] filter grayscale hover:brightness-110 transition ease"
        />
      </AnimationContainer>

      <AnimationContainer customClassName="lg:h-[260px] xl:h-[300px] flex flex-col justify-items-start items-center lg:items-start py-10 lg:pl-20 justify-items-start">
        <h2 className="font-bold text-3xl lg:text-5xl text-center lg:text-start tracking-tight mb-3 text-white mx-auto lg:mx-0 text-orange-400">
        <span>Silicon Forensics </span>
        </h2>

        <h3 className="flex items-center gap-2 text-1xl lg:text-1xl text-gray-200 mb-8 mx-auto lg:mx-0 text-orange-400">
        <span className="font-semibold ">Lightning-fast Solutions</span>
        </h3>
        <p className='w-full text-base text-gray-400 mx-auto'>
          Silicon Forensics supports the computer forensics industry with efficent and powerful tools for investigators.
          <br></br>
          Their SiForce Line of products serves as the flagship brand for the company. Denoting their commitment to no-nonsense quality.
        </p>
      </AnimationContainer>
    </div>
  );
};

export default DesignHero;
