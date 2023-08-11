'use client';

import { usePathname } from 'next/navigation';
import React from 'react';

const Head = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const pathname = usePathname() as string;

  const titleFixedToShow = pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2);

  const meta = {
    title: `Warren Au ${pathname === '/' ? '' : '· ' + titleFixedToShow}`,
    description: `Hi! My name is Warren Au. I'm a San Diego based, full-stack Javascript developer with a year and counting of experience. I'm a lover of page design or other things and whenever I can I try to learn new technologies since I discovered programming at 16. I love what I do and I help others with what I can, I also use in web, mobile and desktop development Next.js, Angular, Ionic and Electron implementing good practices, clean architecture, pixel perfect and agile methodologies.`,
    keywords: 'Warren Au, onsenkame, Warren Au portfolio, onsenkame portfolio, onsenkame github, Warren Au github, onsenkame LinkedIn, Warren Au LinkedIn, Web, Web designer, fullstack engineer, frontend developer, backend developer, archer, teacher, cyclist, ebike, Japan, HTML, CSS, Javascript, Typescript, React, Next.js, postgresql',
    type: 'website'
  };

  return (
    <>
      <title>{meta.title}</title>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='robots' content='follow, index' />
      <meta content={meta.description} name='description' />
      <meta name='keywords' content={meta.keywords} />
      <meta property='og:url' content={`https://warrenau.dev${pathname}`} />
      <link rel='canonical' href={`https://warrenau.dev${pathname}`} />
      <link rel='me' href='mailto:aukwarren@gmail.com' />
      <link rel="icon" href="/ico.png" />
      <meta property='og:type' content={meta.type} />
      <meta property='og:site_name' content='Warren Au' />
      <meta property='og:description' content={meta.description} />
      <meta property='og:title' content={meta.title} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@onyumesen' />
      <meta name='twitter:title' content={meta.title} />
      <meta name='twitter:description' content={meta.description} />
    </>
  )
}

export default Head;