import Image from 'next/image';
import AnimationContainer from '../utils/AnimationContainer';
import React from 'react';

const DesignMain = () => {
  return (
    <div className="w-full flex justify-between flex-col-reverse lg:flex-row items-center">
      <AnimationContainer customClassName="w-[600px] sm:w-[600px] relative mb-6 lg:mb-0">
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

      <AnimationContainer customClassName="flex flex-col items-center justify-between lg:items-start p-0 lg:pr-8">
        <h1 className="font-bold text-3xl lg:text-5xl text-center lg:text-start tracking-tight mb-3 text-white mx-auto lg:mx-0 text-orange-400">
          Warren Au
        </h1>

        <h2 className="flex items-center gap-2 text-1xl lg:text-1xl text-gray-200 mb-8 mx-auto lg:mx-0 text-orange-400">
          <span className="font-semibold ">Fullstack</span>Developer
        </h2>
      </AnimationContainer>
    </div>
  );
};

export default DesignMain;
