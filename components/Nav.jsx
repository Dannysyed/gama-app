'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
const Nav = () => {
    const isUserLoggedIn = true
    const [providers, setProvider] = useState(null)
    const [toggleDropDown, setToggleDropDown] = useState(false)
    useEffect(() => {

        const setProviders = async () => {
            const response = await getProviders();
            console.log(response)
            setProvider(response)

        }
        setProviders()
    }, [])



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
                            className='object-contain' />
                    </Link>
                </div>) : (<>
                    {providers && Object.values(providers).map(val =>
                    (<button type='button'
                        key={providers.name}
                        onClick={() => signIn(val.id)}
                        className='black_btn'
                    >
                        Sign In
                    </button>))}



                </>)}


            </div>
            {/* Mobile Navigation  */}
            <div className='sm:hidden flex relative'>
                {
                    isUserLoggedIn ? (<div>
                        <Image src={'/assets/images/logo.svg'}
                            alt='profile'
                            width={37}
                            height={37}
                            className='rounded-full'
                            onClick={() => { setToggleDropDown(prev => !prev) }}
                        />

                        {toggleDropDown && <div className='dropdown'>
                            <Link href={"/Profile"}
                                className='dropdown_link'
                                onClick={() => { setToggleDropDown(false) }}>

                                Myprofile
                            </Link>
                            <Link href={"/create-prompt"}
                                className='dropdown_link'
                                onClick={() => { setToggleDropDown(false) }}>

                                Create Prompt
                            </Link>
                            <button type='button' className='mt-5 w-full black_btn ' onClick={() => {
                                setToggleDropDown(false)
                                signOut()

                            }}>
                                Sign Out
                            </button>
                        </div>}
                    </div>

                    ) : <></>}

            </div>
        </nav >



    )
}

export default Nav