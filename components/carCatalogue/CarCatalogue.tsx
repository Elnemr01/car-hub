"use client"
import './catalogue.css'
import Image from 'next/image'
import { assets, manufactures } from '@/public/assets'
import { useEffect, useState } from 'react'
import { getCars, getYears } from '@/utlis'
import CatalogueCard from '../catalogueCard/CatalogueCard'
import Loading from '../loading/Loading'

const CarCatalogue = () => {
    let [manufacturesMenu,setManufacturesMenu]=useState(manufactures);
    let [manufactureValue,setManufactureValue]=useState('');
    let [showManufacturesMenu,setShowManufacturesMenu]=useState(false);
    let [all_years,setYears]=useState([]);
    let [all_cars,setCars]=useState([]);


    useEffect(()=> {
        getData();
    },[])

    let getData = async ()=> {
        setYears(await getYears());
        setCars(await getCars());
    }


    // handle Filter Manufactures Menu
    let handle_Filter_Manufactures_Menu = (e :React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;
        setManufactureValue(value);
        setShowManufacturesMenu(true);
        setManufacturesMenu(manufactures.filter((m) => m.toLowerCase().includes(value.toLowerCase())));
        if(value==='' || manufactures.length===0) {
            setShowManufacturesMenu(false);
        }
    };


    if(all_years.length===0 || all_cars.length===0) return <Loading/>
    return (
        <div className='catalogue' id='carCatalogue'>
            <div className="container">
                <h1>car catalogue</h1>
                <p>explore out cars you might like</p>
                <div className="search">
                    <div className="searchInputs">
                        {/* -------------inputs------------- */}
                        <div className="manufacture relative">
                            <Image src={assets.carLogo} alt='icon' loading='lazy'/>
                            <input type="text" name='search' id=''
                            placeholder='Volgswagen'
                            value={manufactureValue}
                            onChange={(ev)=> handle_Filter_Manufactures_Menu(ev)}/>
                            {showManufacturesMenu && <ul className="showManufacturesMenu absolute">
                                {
                                    manufacturesMenu.map((e,i)=> <li key={i} onClick={()=> {setManufactureValue(e);setShowManufacturesMenu(false)}} >{e}</li>)
                                }
                            </ul>}
                        </div>
                        <div className="model">
                            <Image src={assets.modelIcon} alt='icon' loading='lazy' />
                            <input type="text" name='search' id='d' placeholder='Fuel'/>
                        </div>
                    </div>
                    {/* -------------search selections------------- */}
                    <div className="searchSelections">
                        <div className="feul select-div">
                            <select name="fuelSelect" id="fuelSelect">
                                <option value="Fuel">Fuel</option>
                                <option value="option">option</option>
                                <option value="option">option</option>
                                <option value="option">option</option>
                                <option value="option">option</option>
                                <option value="option">option</option>
                            </select>
                        </div>

                        <div className="year select-div">
                            <select name="yearSelect" id="yearSelect">
                                <option value="Year">Year</option>
                                {
                                    all_years.map((year,i)=> <option key={i}
                                    value={year}>{year}</option>)
                                }
                            </select>
                        </div>
                    </div>
                </div>
                {/* show all cars */}
                <div className="cars">
                    {
                        all_cars.map((car,i)=> <CatalogueCard key={i} car={car}/>)
                    }
                    {
                        all_cars.map((car,i)=> <CatalogueCard key={i} car={car}/>)
                    }
                    {
                        all_cars.map((car,i)=> <CatalogueCard key={i} car={car}/>)
                    }
                    {
                        all_cars.map((car,i)=> <CatalogueCard key={i} car={car}/>)
                    }
                    {
                        all_cars.map((car,i)=> <CatalogueCard key={i} car={car}/>)
                    }
                    {
                        all_cars.map((car,i)=> <CatalogueCard key={i} car={car}/>)
                    }
                    {
                        all_cars.map((car,i)=> <CatalogueCard key={i} car={car}/>)
                    }
                    {
                        all_cars.map((car,i)=> <CatalogueCard key={i} car={car}/>)
                    }
                </div>
                
            </div>
        </div>
    )
}

export default CarCatalogue
