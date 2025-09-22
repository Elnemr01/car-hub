import React from 'react'
import './hero.css'
import Image from 'next/image'
import { assets } from '@/public/assets'
import Link from 'next/link'

const Hero = () => {
    return (
        <div className='hero relative overflow-hidden'>
            <Image src={assets.layout} loading='lazy' alt='hero photo'/>
            <div className="container gridSection">
                <div className="leftSec">
                    <h1>
                        Find, book, rent a car - quickly and easily!
                    </h1>
                    <p className="description">
                        Streamline you car rental experience with our effortless booking process.
                    </p>
                    <Link href={'/'}>explore cars</Link>
                </div>
                <div className="rightSec relative">
                    <Image src={assets.hero} loading='lazy' alt='hero photo'/>
                </div>
            </div>
        </div>
    )
}

export default Hero
