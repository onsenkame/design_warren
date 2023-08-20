'use client';

import { useState } from 'react';
import CardProject from './CardProject';
import AnimationContainer from '../utils/AnimationContainer';
import { CardProjectProps } from '../../types';
import React from 'react';

const allProjectsInfo = [
  {
    id: '1',
    title: 'HuaXuan Art Gallery',
    des: 'Portfolio and web store for an artist.',
    category: 'javascript - react - nextjs - tailwindcss - vercel - mongodb',
    repo: '',
    link: 'https://huaxuann.com/'
  },
  {
    id: '2',
    title: 'Personal Portfolio Website',
    des: 'Personal web portfolio using Typescript.',
    category: 'typescript - nextjs - tailwindcss - vercel',
    repo: 'https://github.com/onsenkame/design_warren',
    link: 'https://warrenau.dev/'
  },
  {
    id: '3',
    title: 'Scribble Me This game',
    des: 'Machine learning enabled multiplayer drawing game.',
    category: 'javascript - react - socket.io - ML5',
    repo: 'https://github.com/Scribble-Me-This',
    link: 'https://www.youtube.com/watch?v=eNn01r9uogw'
  },
  {
    id: '4',
    title: 'The Lazy Redditor - Chrome Extension',
    des: 'Machine learning enabled motion base Reddit accessability plugin.',
    category: 'javascript - node.js - react-webcam - google handpose model',
    repo: 'https://github.com/onsenkame/theLazyRedditor',
    link: ''
  },
  {
    id: '5',
    title: 'Pokemon Trading Card Game Store',
    des: 'Fully functional Pokemon TCG store with shopping cart and checkout.',
    category: 'javascript - react - redux - postgresql - node.js - express - stripe - heroku',
    repo: 'https://github.com/GS-Pokemon-TCG-Store',
    link: ''
  },
  {
    id: '6',
    title: 'Water Tracker App',
    des: 'Mobile-ready responsive water tracking app.',
    category: 'javascript - react-native - redux - postgresql - node.js',
    repo: 'https://github.com/mscherryxu/react-native-water-app',
    link: ''
  },
];

const SearchAllProjects = () => {

  const [projectSearch, setProjectSearch] = useState<string>('');

  const resultSearch: CardProjectProps[] = allProjectsInfo.filter(project => project.category.includes(projectSearch.toLowerCase()))

  return (
    <>
      <AnimationContainer customClassName='w-full group flex flex-col justify-center items-center mb-8'>

        <div className='w-full flex items-center lg:w-3/6 h-12 rounded shadow-lg bg-black border border-gray-800 group-hover:border-gray-500 transition-all ease'>

          <div className='grid place-items-center h-full w-12 text-gray-500'>
            <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='1' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
            </svg>
          </div>

          <input
            className='peer h-full w-full outline-none rounded text-sm text-white bg-black px-2 group-hover:border-gray-500 transition-all ease'
            type='text'
            id='search'
            placeholder='Languages, frameworks, libraries, etc...'
            onChange={e => setProjectSearch(e.target.value)} />
        </div>

      </AnimationContainer>

      <article className='w-full flex justify-center items-center content-center flex-wrap gap-6 mx-auto'>
        {
          resultSearch.map(({ id, title, des, category, repo, link }) => <CardProject key={id} title={title} des={des} category={category} repo={repo} link={link} />)
        }
      </article>
    </>
  )

}

export default SearchAllProjects;
