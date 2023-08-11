import AllLearningTech from '../icons/AllLearnTech';
import AnimationContainer from '../utils/AnimationContainer';
import React from 'react';

const CurrentLearning = () => {
  return (
    <AnimationContainer customClassName='flex flex-col justify-center items-center lg:items-start mb-16 mx-auto lg:mx-0'>
      <div className='flex flex-col justify-center items-center lg:items-start'>
        <AllLearningTech />
      </div>
    </AnimationContainer>
  )
}

export default CurrentLearning;