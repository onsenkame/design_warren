'use client';

import { Timeline, TimelineEvent } from './TimelineExp';

const CurrentTimelineExp = () => {
  return (
    <Timeline>
      <TimelineEvent active>
        <TimelineEvent.Title>
          Freelance | Sept. 2022 - Currently
        </TimelineEvent.Title>

        <TimelineEvent.Description>
          Work closely with clients to design and complete the development of
          web pages/applications while applying agile methodologies. In the
          projects completed, I have developed web apps and components from
          landing pages, manageable stores with registration and login,
          manageable blogs, administrative dashboards, web pages with a variety
          of sections and more. From prototyping to backend architecture, I
          communicate my designs using Excalidraw and Figma to best create my
          clients dream websites.
        </TimelineEvent.Description>
      </TimelineEvent>

      <TimelineEvent>
        <TimelineEvent.Title>
          Scribble Me This | Aug. 2022 - Sept. 2022
        </TimelineEvent.Title>

        <TimelineEvent.Description>
          Built an online multiplayer game where players draw against each other
          to have a custom built and trained neural net using TensorFlow/ML5
          using Google QuickDraw&apos;s dataset to guess their drawings. The host
          system is built using Socket.io and the site as a whole was built in
          JavaScript using React and Redux. I designed the Socket.io framework
          and game logic to handle player data across client devices and
          lobbies.
        </TimelineEvent.Description>
      </TimelineEvent>

      <TimelineEvent>
        <TimelineEvent.Title>
          Fullstack Academy | Apr. 2022 - Sept. 2022
        </TimelineEvent.Title>

        <TimelineEvent.Description>
          Learned and developed full-stack JavaScript web applications and
          methodologies in an 16 week full time accelerated coding bootcamp.
          Program frameworks formally covered key concepts of frontend design
          with CSS and HTML5 as well as applications of JavaScript and APIs.
          Primary back-end tech stacks involved React, React Router, React
          Hooks, Redux, and Express. These were tied in with SQL database
          knowledge for designing large industrial scale projects. All concepts
          were tested in cooperative developments utilizing
          Test-Driven-Development (TDD), prototyping, and agile development
          methodologies to simulate real-world development cycles.
        </TimelineEvent.Description>
      </TimelineEvent>

      <TimelineEvent last>
        <TimelineEvent.Title>
          {' '}
          <a
            href="https://siliconforensics.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:underline transition-all ease"
          >
            Silicon Forensics Inc.
          </a>{' '}
          | Webmaster/Graphics Designer | Apr. 2022 - Sept. 2022
        </TimelineEvent.Title>

        <TimelineEvent.Description>
          Regulated and managed access rights of website users as a server
          administrator bridging expectations of strict security and ease of
          access between company and clients in law enforcement and U.S.
          Government Agencies. Optimized client satisfaction and provide concise, timely
          customer service on orders ranging upwards of $50,000.
          Designed and revised website banners, product fliers,
          product photos, and company logo
        </TimelineEvent.Description>
      </TimelineEvent>
    </Timeline>
  );
};

export default CurrentTimelineExp;
