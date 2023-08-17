import CurrentTimeLineExp from '../content/CurrentTimelineExp';
import AnimationContainer from '../utils/AnimationContainer';
import SectionContainer from '../utils/SectionContainer';
import ShowSkills from '../utils/ShowSkills';
import TitleSectionPageContainer from '../utils/TitleSectionPageContainer';

const skills = [
    {
        title: 'Languages',
        techs: ['HTML', 'CSS', 'JavaScript', 'TypeScript']
      },
      {
        title: 'Frameworks and libraries',
        techs: ['React', 'Next.js']
      },
      {
        title: 'JavaScript libraries',
        techs: ['Redux', 'Socket.IO', 'React-Redux']
      },
      {
        title: 'Preprocessors, css style, component and motion libraries',
        techs: ['Bootstrap', 'Tailwind', 'MaterialUI', 'NextUI', 'Framer Motion']
      },
      {
        title: 'Backend stack',
        techs: ['noSQL', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Postman', 'Firebase', 'PostgreSQL']
      },
      {
        title: 'Softwares and tools',
        techs: ['VS Code', 'Git', 'GitHub', 'Bitbucket', 'ESLint', 'Figma', 'Photoshop', 'WordPress']
      },
      {
        title: 'Agile methodologies and coding principles',
        techs: ['GitFlow', 'SCRUM', 'Clean Code', 'SOLID', 'Clean Architecture', 'Kanban']
      },
      {
        title: 'Currently or interest in learning...',
        techs: ['SQL', 'Scss', 'Sass', 'GraphQL', 'Linux', 'AWS', 'Docker', 'Kubernetes', 'Blender']
      }
];

const ResumeSection = () => {
  return (
    <SectionContainer>

      <div className='w-full flex flex-col gap-6'>

        <TitleSectionPageContainer title='About me' />

        <AnimationContainer customClassName='w-full flex flex-col gap-5 mb-8'>

          <p className='text-base text-gray-400'>
            I`&apos;`m a passionate developer with +1 year of work experience in JavaScript/TypeScript, I`&apos;`m a lover of accessable page design which drives my desire to learn new technologies and develop fun an intuitive websites. I love what I do and I am always looking to help others with what I can.
          </p>

          <p className='text-base text-gray-400'>
            For web, mobile and desktop frontend development is use React and Next.js. For backend technologies I am well aquanited with Node, PostgreSQL, and React-redux. Merging these technologies while implementing good practices in prototyping and coding, clean architecture, and agile methodologies is a cornerstone of my coding success.
          </p>

          <p className='text-base text-gray-400'>
            Beyond coding I bring a host of other varied skills from my past experiences. As a biochemist, I have a strong understanding of the scientific process and how to apply it to problem solving. From my time teaching in Japan, I grew a passion for learning and teaching others, while reaching across cultural boundaries to understand and better success across diversity. These skills help me in jumping in and meshing with any team I have the pleasure of participating in.
          </p>

        </AnimationContainer>

        <CurrentTimeLineExp />

        <AnimationContainer customClassName='w-full flex flex-col gap-5 mb-8 xl:max-w-screen-md'>

          <h2 className='font-bold text-2xl md:text-2xl tracking-tight mb-2 text-white text-start'>Programming Skills & Tools</h2>

          <p className='text-base text-gray-400'>
            A look at all the programming languages, libraries, and tools I`&apos;`ve worked with, I started programming about 3 years ago. As a trained full stack developer, I have tried a few programming languages and technology stacks, both backend and frontend.
          </p>

          <p className='text-base text-gray-400'>
            My focus is normally function first then form, but I`&apos;`ve been challenging myself to more appealing and accessable designs.
          </p>

          <div className='flex flex-col items-start gap-3 mt-3'>

            {
              skills.map(({ title, techs }) => (
                <div key={title}>

                  <h3 className='font-bold text-1xl md:text-1xl tracking-tight mb-5 text-white text-start'>{title}</h3>

                  <AnimationContainer customClassName='flex items-center flex-wrap gap-3 mb-5'>
                    <ShowSkills skills={techs} />
                  </AnimationContainer>

                </div>
              ))
            }

          </div>

        </AnimationContainer>

        <AnimationContainer customClassName='w-full flex flex-col gap-5'>

          <h2 className='font-bold text-2xl md:text-2xl tracking-tight mb-2 text-white text-start'>Interests & Goals</h2>

          <p className='text-base text-gray-400'>
            I am interested in learning better fullstack web architecture and the needs of business level programming infrastructure. 
          </p>

          <p className='text-base text-gray-400'>
            Currently I`&apos;`m learning how to make applications with better API integrations allowing for enhancing websites with generative AI technologies and accessablity add-ons.
          </p>

          <p className='text-base text-gray-400'>
            I am also interested in learning other things besides programming such as 3D design with Blender and animation.
          </p>

        </AnimationContainer>

      </div>

    </SectionContainer>
  )
}

export default ResumeSection;