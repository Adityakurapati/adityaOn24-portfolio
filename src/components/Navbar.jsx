import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styles from '../styles'
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets'

const Navbar=() =>
{
        const [ active, setActive ]=useState( "" );
        return (
                <nav className={ `${ styles.paddingX } w-full flex items-center py-5 z-20 fixed top-0 left-0 bg-primary` }>
                        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                                <Link
                                        to='/'
                                        className='flex items-center gap-2'
                                        onClick={ () =>
                                        {
                                                setActive( "" )
                                                window.scrollTo( 0, 0 )
                                        } } >
                                        <img src={ logo } alt="" className='w-9 h-9 object-contain ' />

                                        <p className='ext-white font-bold cursor-pointer text-[18px]'>| Aditya Kurapati</p>
                                </Link>
                                <div className='flex sm:flex-col'></div>
                        </div>
                </nav>
        )
}

export default Navbar