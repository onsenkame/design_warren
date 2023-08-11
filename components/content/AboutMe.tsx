import AnimationContainer from '../utils/AnimationContainer';
import React from 'react';

const AboutMe = () => {
  return (
    <AnimationContainer customClassName='w-full mb-16'>

      <h2 className='font-bold text-2xl tracking-tight mb-8 text-white text-center lg:text-start'>
        About me
      </h2>

      <p className='text-base text-gray-400'>
      I started web developement in 2022 after returning from an extended teaching experience in Japan as the COVID-19 pandemic started to normalize. Witnessing the importance of web usability and accessibility in the face of a global pandemic, I decided to pursue a career in web development. <a href="#contact" className='font-semibold hover:text-white ease delay-100'><u>Contact me</u></a> if you are interested in working with me on a project or if you have any general questions about me :)
      </p>

    </AnimationContainer>
  )
}

export default AboutMe;