import { assets } from '@/public/assets'
import Link from 'next/link'
import React from 'react'
import './header.css'
import Image from 'next/image'

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="logo">
                    <Link href={'/'}> <Image src={assets.logo} alt='logo photo' loading={'lazy'}/></Link>
                </div>
                <Link href={'/'}>sign in</Link>
            </div>
        </header>
    )
}

export default Header
