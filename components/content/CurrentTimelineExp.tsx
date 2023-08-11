'use client';

import { Timeline, TimelineEvent } from './TimelineExp';

const CurrentTimelineExp = () => {
  return (
    <Timeline>

      <TimelineEvent active>

        <TimelineEvent.Title>Freelance | Sept. 2022 - Currently</TimelineEvent.Title>

        <TimelineEvent.Description>
        Design and complete development of web pages/applications in a freelancer way applying agile methodologies, clean architecture, SOLID principles and pixel perfect in the projects I have done, I have developed almost all types of projects from Landing pages, Manageable stores with registration and login, Manageable blogs, dashboards, web pages with a variety of sections and more from prototyping, design using Excalidraw, Adobe Photoshop and Figma, also from the design to the programming and migration.
        </TimelineEvent.Description>

      </TimelineEvent>

      <TimelineEvent>

        <TimelineEvent.Title>Scribble Me This | Aug. 2022 - Sept. 2022</TimelineEvent.Title>

        <TimelineEvent.Description>
          Design and complete development of web pages/applications in a freelancer way applying agile methodologies, clean architecture, SOLID principles and pixel perfect in the projects I have done, I have developed almost all types of projects from Landing pages, Manageable stores with registration and login, Manageable blogs, dashboards, web pages with a variety of sections and more from prototyping, design using Balsamiq Wireframes, Adobe Photoshop and Figma, also from the design to the programming and migration.
        </TimelineEvent.Description>

      </TimelineEvent>

      <TimelineEvent >

<TimelineEvent.Title>Fullstack Academy | Apr. 2022 - Sept. 2022</TimelineEvent.Title>

<TimelineEvent.Description>
  Web designer and responsive web designer and frontend programmer on projects using Figma, HTML, CSS, SCSS, SASS, Bootstrap, JavaScript, jQuery implementing SCRUM, pixel perfect and clean code.
</TimelineEvent.Description>

</TimelineEvent>

      <TimelineEvent last>

        <TimelineEvent.Title> <a href='https://siliconforensics.com/' target='_blank' rel='noopener noreferrer' className='hover:text-white hover:underline transition-all ease'>Silicon Forensics Inc.</a> | Webmaster/Graphics Designer | Apr. 2022 - Sept. 2022</TimelineEvent.Title>

        <TimelineEvent.Description>
            - Regulated and managed access rights of website users as a server administrator bridging expectations of strict security and ease of access between company and clients in law enforcement and U.S. Government Agencies  
            <br></br>
            - Optimized client satisfaction and provide concise, timely customer service on orders ranging upwards of $50,000
            <br></br>
            - Designed and revised website banners, product fliers, product photos, and company logo

        </TimelineEvent.Description>

      </TimelineEvent>

    </Timeline>
  )
}

export default CurrentTimelineExp;