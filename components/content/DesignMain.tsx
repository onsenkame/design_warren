import Image from 'next/image';
import AnimationContainer from '../utils/AnimationContainer';
import React from 'react';

const DesignMain = () => {
  return (
    <div className="w-full flex flex-col items-start">
      <div className="w-full flex justify-between flex-col-reverse lg:flex-row items-center">
        <AnimationContainer customClassName="lg:h-[600px] lg:w-[550px] flex flex-col justify-items-start items-center lg:items-start py-10 justify-items-start">
          <h2 className="font-bold text-3xl lg:text-5xl text-center lg:text-start tracking-tight mb-3 text-white mx-auto lg:mx-0 text-orange-400">
            SiForce Vision
          </h2>

          <h3 className="flex items-center gap-1 text-1xl lg:text-1xl text-gray-200 mb-4 mx-auto lg:mx-0 text-orange-400">
            <span className="font-semibold ">Power and Speed at a Glance</span>
          </h3>
          <p className='w-full text-base text-gray-400 mx-auto'>
          SiForce&apos;s branding mission was to balance brand recognition with an adaptable and simple design.
          <br></br>
        </p>

          <h4 className="flex items-center text-1xl lg:text-1xl pt-6 text-gray-200 mb-4 mx-auto lg:mx-0 text-orange-400">
            <span className="font-semibold ">Adaptable</span>
          </h4>

          <p className='w-full text-base text-gray-400 mx-auto'>
          The SiForce Lighting Logo must have good symmetry and visibility at different angles and sizes.
          <br></br>
          It should be recognizable at a glance, and be able to be used in different contexts and in combination with the text logo.
        </p>

        <h4 className="flex items-center text-1xl lg:text-1xl pt-6 text-gray-200 mb-4 mx-auto lg:mx-0 text-orange-400">
            <span className="font-semibold ">Universal</span>
          </h4>

          <p className='w-full text-base text-gray-400 mx-auto'>
          The SiForce Lighting Logo&apos;s success has allowed the company to expand its use in other products.
          <br></br>
          Fitting and iconic, the logo has established itself in the digital forensics industry.
        </p>
        </AnimationContainer>

        <AnimationContainer customClassName="flex flex-col items-center w-[320x] sm:w-[600px] lg:items-end relative mb-6 lg:mb-0 ">
          <Image
            alt="Silicon Forensics Branded Chair"
            height={400}
            width={330}
            src="/siforce/siChairSide.png"
            className="rounded-[8px] filter hover:brightness-110 transition ease object-contain"
          />
        </AnimationContainer>
      </div>

      <div className="w-full flex flex-col lg:flex-row py-10">

        <AnimationContainer customClassName="flex md:w-[600px] relative mb-6 lg:mb-0 justify-center items-center">
          <Image
            alt="Silicon Forensics SiForce Logo"
            height={600}
            width={300}
            src="/siforce/lightning_logo_white_red.png"
            sizes="30vw"
            className="rounded-[8px] filter hover:brightness-110 transition ease"
          />
        </AnimationContainer>

        <AnimationContainer customClassName="flex md:w-[600px] relative mb-6 lg:mb-0  justify-center items-center">
          <Image
            alt="Silicon Forensics Siforce Text Logo"
            height={600}
            width={300}
            src="/siforce/siforce.PNG"
            sizes="30vw"
            className="rounded-[8px] filter hover:brightness-110 transition ease"
          />
        </AnimationContainer>
      </div>
    </div>
  );
};

export default DesignMain;
