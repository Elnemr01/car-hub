import React from 'react'
import './footer.css'
import Image from 'next/image'
import { assets } from '@/public/assets'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                {/* part 1 */}
                <div className="part1">
                    <div className="logo">
                        <Image src={assets.logo} alt='footer logo' loading={'lazy'}/>
                    </div>
                    <p>Carhub 2025</p>
                    <p>all rights reserved</p>
                </div>
                {/* part 2 */}
                <div className="part2 part">
                    <h1>about</h1>
                    <ul className='info'>
                        <li>how it works</li>
                        <li>featured</li>
                        <li>partnership</li>
                        <li>business relation</li>
                    </ul>
                </div>
                {/* part 3 */}
                <div className="part3 part">
                    <h1>company</h1>
                    <ul className='company'>
                        <li>events</li>
                        <li>blogs</li>
                        <li>podcast</li>
                        <li>invite a friend</li>
                    </ul>
                </div>
            </div>
            <div className="copyRight">
                <p>@2025 CarHub all rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer
