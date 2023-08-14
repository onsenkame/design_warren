import React from 'react';
import '../styles/globals.css';

import Link from 'next/link';

setTimeout(function() {
  // redirect to the new page
  window.location.href = "/";
}, 5000);

const PageNotFound = () => {
  return (
    <div className='grid h-screen px-4 bg-gray-900 place-content-center'>

      <div className='text-center'>

        <h1 className='text-white tracking-tight text-9xl'>404</h1>

        <p className='text-2xl font-bold tracking-tight text-gray-400 sm:text-4xl mt-3'>
          Oya, how'd you get here?
        </p>

        <p className='mt-4 text-gray-400'>We can't find that page.</p>

        <Link
          href='/'
          className='inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-gray-900 rounded hover:bg-black outline-none transition-all ease delay-75'
        >
          Sending you home shortly...
        </Link>

      </div>

    </div>

  )
}

export default PageNotFound;