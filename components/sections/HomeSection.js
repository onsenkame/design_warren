// import AboutMe from '../content/AboutMe';
// import ContactMe from '../content/ContactMe';
import CurrentFavTech from '../content/CurrentFavTech.js';
import CurrentLearning from '../content/CurrentLearning';
// import CurrentTimeLineExp from '../content/CurrentTimeLineExp';
// import FavProjects from '../content/FavProjects';
import Hero from '../content/Hero';
// import ProcessWork from '../content/ProcessWork';

const HomeSection = () => {
  return (
    <section className='w-3/4 lg:max-w-screen-md flex flex-col justify-center items-center lg:items-start lg:mx-auto mt-8 pb-16'>

      <Hero />

      <CurrentFavTech />
      <CurrentLearning />

      <div className='w-full flex flex-col items-start'>

        {/* <AboutMe />

        <CurrentTimeLineExp />

        <FavProjects />

        <ProcessWork />

        <ContactMe /> */}

      </div>

    </section>
  )
}

export default HomeSection;