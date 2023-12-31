import Link from 'next/link';
import React from 'react';

const LinksMenu = [
  {
    name: 'Home',
    path: '/',
    delay: '150ms'
  },
  {
    name: 'About',
    path: '/about',
    delay: '175ms'
  },
  {
    name: 'Projects',
    path: '/projects',
    delay: '200ms'
  },
  {
    name: 'Design',
    path: '/design',
    delay: '224ms'
  },
  {
    name: 'Blog',
    path: '/blog',
    delay: '250ms'
  },
]

const LinksMenuNav = () => {
  return (
    <>
      {
        LinksMenu.map(({ name, path, delay }) => (
          <li
            key={name}
            className='border-gray-700 text-gray-100 text-lg font-semibold'
            style={{ transitionDelay: delay }}>
            <Link href={path} className='pb-4'>
              {name}
            </Link>
          </li>
        ))
      }
    </>
  )
}

export default LinksMenuNav;