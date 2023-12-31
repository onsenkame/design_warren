import React from 'react'

const SectionContainer = ({ children }: { children: React.ReactNode; }) => {
    return (
      <section className='w-3/4 xl:max-w-screen-lg flex flex-col justify-center items-center lg:items-start lg:mx-auto mt-8 pb-16'>
  
        {children}
  
      </section>
    )
  }
  
  export default SectionContainer;