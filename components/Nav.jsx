'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
const Nav = () => {
    const isUserLoggedIn = true
    return (
        <nav className='flex-between w-full mb-16 pt-3 '>
            <Link href={'/'} className='flex gap-2 flex-center'>
                <Image src={'/assets/images/logo.svg'}
                    alt='Promtopia image'
                    width={30}
                    height={30}
                    className='object-contain'
                />
                <p className='logo_text'>Promptopia</p>
            </Link>
            <div className='sm:flex hidden'>
                {isUserLoggedIn ? (<div className='flex gap-3 md:gap-6'>
                    <Link href={"/create-prompt"} className='black_btn'>
                        Create Post

                    </Link>
                    <button type='button' onClick={signOut} className='outline_btn'>
                        Signout
                    </button>
                    <Link href={"/profile"}>
                        <Image src={'/assets/images/logo.svg'}
                            alt='Promtopia image'
                            width={30}
                            height={30}
                            className='object-contain'></Image>
                    </Link>
                </div>) : (<></>)}

            </div>
        </nav >



    )
}

export default Nav