import AnimationContainer from '../utils/AnimationContainer';
import SectionContainer from '../utils/SectionContainer';
import DesignHero from '../content/DesignHero';
import TitleSectionPageContainer from '../utils/TitleSectionPageContainer';
import DesignMain from '../content/DesignMain';

const myGithub = 'https://github.com/onsenkame';

const DesignSection = () => {
  return (
    <SectionContainer>

      <div className='w-full flex flex-col gap-6'>

        <TitleSectionPageContainer title='Design' />

        <AnimationContainer customClassName='w-full flex flex-col gap-5 mb-8'>

          <p className='w-full text-base text-gray-400'>
            Choosing a logo and brand identity should be a point of pride and a compass for your organization.
          </p>

        </AnimationContainer>

      </div>

      <DesignHero />
      <DesignMain />

    </SectionContainer>
  )
}

export default DesignSection;