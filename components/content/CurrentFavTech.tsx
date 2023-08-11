import AllFavTech from '../icons/AllFavTech';
import AnimationContainer from '../utils/AnimationContainer';
import React from 'react';

const CurrentFavTech = () => {
  return (
    <AnimationContainer customClassName='flex flex-col justify-center items-center lg:items-start mb-5 mx-auto lg:mx-0'>
      <div className='flex flex-col justify-center items-center lg:items-start'>

        <AllFavTech />

      </div>
    </AnimationContainer>
  )
}

export default CurrentFavTech;