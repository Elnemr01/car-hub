import React, { Fragment } from 'react'
import './details.css'
import { carProps } from '@/index'
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react'
import Image from 'next/image'
import { assets } from '@/public/assets'

interface carDetailsTypes {
    car: carProps,
    isOpen: boolean,
    closeModel : ()=> void
}

interface temp {
    key : string,
    value : string,
}

const CarDetails = ({car,isOpen,closeModel}: carDetailsTypes) => {


    const carInfo = [
        {
            key: "city mpg",
            value: 23,
        },
        {
            key: "class",
            value: car.class,
        },
        {
            key: "combination mpg",
            value: 25,
        },
        {
            key: "cylinders",
            value: car.cylinders,
        },
        {
            key: "displacement",
            value: car.displacement,
        },
        {
            key: "drive",
            value: car.drive,
        },
        {
            key: "fuel type",
            value: car.fuel_type,
        },
        ,
        {
            key: "highway mpg",
            value: 30,
        },
        {
            key: "make",
            value: car.make,
        },
        {
            key: "transmission",
            value: car.transmission,
        },
        {
            key: "model",
            value: car.model,
        },
        {
            key: "year",
            value: car.year,
        },
    ]
    return (
        <div className='carDetails'>
            <Transition appear show={isOpen} as={Fragment} >
                <Dialog onClose={closeModel} as='div' className="relative z-10">
                    <TransitionChild as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                    >
                        <div className='fixed bg-black/25 inset-0'/>
                    </TransitionChild>
                    <div className='fixed bg-black/25 inset-0'>
                        <div className='flex min-h-full items-center
                        justify-center p-4 text-center'>
                            <TransitionChild as={Fragment}
                                enter='ease-out duration-300'
                                enterFrom='opacity-0 scale-95'
                                enterTo='opacity-100  scale-100'
                                leave='ease-in duration-200'
                                leaveFrom='opacity-100 scale-100'
                                leaveTo='opacity-0 scale-95'
                            >
                                <DialogPanel className="relative w-full overflow-y-auto bg-white 
                                rounded-2xl max-w-lg max-h-[90vh] shadow-xsl transition-all
                                flex flex-col gap-1
                                ">
                                    <button type='button' className=" top-2 right-[10px] z-10 absolute
                                    p-2 bg-primary-blue-100 rounded-full flex items-center justify-end
                                    "
                                    onClick={closeModel}
                                    >
                                        <Image src={assets.closeIcon}
                                        alt='CLOSE'
                                        width={'20'}
                                        height={'20'}
                                        loading='lazy'
                                        className='cursor-pointer'
                                        />
                                    </button>
                                    {/* car info */}
                                    <div className="info">
                                        <div className="image">
                                            <Image src={assets.hero} alt='cat photo' loading='lazy'/>
                                        </div>
                                        <h2 className="name">{car.make} {car.model}</h2>
                                        <div className="mainInfo">
                                            {
                                                carInfo.map((obj,i)=> 
                                                    <p key={i}>
                                                        <span>{obj?.key}</span>
                                                        <span>{obj?.value}</span>
                                                    </p>
                                                )
                                            }
                                        </div>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    )
}

export default CarDetails
