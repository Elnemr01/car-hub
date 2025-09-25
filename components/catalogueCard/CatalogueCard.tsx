"use client";
import { modelInterface } from '@/index'
import { assets } from '@/public/assets'
import Image from 'next/image'
import React, { useActionState, useState } from 'react'
import './card.css'
import Link from 'next/link';
import CarDetails from '../carDetails/CarDetails';



const CatalogueCard = ({car} : modelInterface) => {
    let [showDetailsBtn,setShowBtn]=useState(false);
    let [isOpen,setOpen]=useState(false);

    let carInfo=[
        {
            photo : assets.wheel,
            text : 'automatic',
        },
        {
            photo : assets.tire,
            text : 'AWD',
        },
        {
            photo :  assets.fuelPh,
            text : '21 MPG',
        },
    ]
    return (
        <div className='catalogueCard relative' onMouseEnter={()=> setShowBtn(true)} 
        onMouseLeave={()=> setShowBtn(false)}>
            <div className={`${showDetailsBtn ? 'opacity-30' : 'opacity-100'}`}>
                <h1 className="name">{car.make} {car.model}</h1>
                <p className="price">
                    <span>$</span>
                    <span className='priceNum'>53</span>
                    <span>/day</span>
                </p>
                <div className="carPhoto">
                    <Image src={assets.hero} alt='car photo' loading='lazy'/>
                </div>
            </div>
            <div className="info">
                {
                    carInfo.map((info,i)=> (
                        <div className="part" key={i}>
                            <div className="image">
                                <Image src={info.photo} alt='car photo' loading='lazy'/>
                            </div>
                            <div className="text">{info.text}</div>
                        </div>
                    ))
                }
            </div>

            {/* button */}
            <div className={`btnDiv absolute ${showDetailsBtn && !isOpen ? 'shown' : ''}`}>
                <button onClick={()=> setOpen(true)}>more details</button>
            </div>

            {/* car details */}
            <CarDetails car={car} isOpen={isOpen} closeModel={()=> {setOpen(false); setShowBtn(false)}} />
        </div>
    )
}

export default CatalogueCard
