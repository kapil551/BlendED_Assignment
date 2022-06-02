import React from 'react';
import { useRouter } from 'next/router';

function NavBar() {
    const router = useRouter();
  return (
    <div className='fixed top-0 bg-blue-400 w-screen p-2 text-white font-semibold flex justify-between items-start px-4'>
        <p onClick={() => router.push('/')}>Home</p>
    </div>
  )
}

export default NavBar;