import React from 'react'
import { NavLink } from 'react-router-dom'
import CardHomePage from '../../utils/cardHomePage'
import animePic from '../../../assets/homepage/anime.jpg'
import peoplePic from '../../../assets/homepage/people.jpg'
import mangaPic from '../../../assets/homepage/manga.jpg'
import lnPic from '../../../assets/homepage/ln.jpg'

const Homepage = () => {
    return (
        <div className='h-screen flex justify-center overflow-hidden'>
            <div className='grid grid-cols-3 place-content-center align-content-center'>
                <div className='flex items-center justify-end'>
                    <NavLink to={"/Anime"}>
                        <CardHomePage src={animePic} title={"Anime"} />
                    </NavLink>
                </div>
                <div className='lg:mx-8 sm:mx-6'>
                    <NavLink to={"/People"}>
                        <CardHomePage src={peoplePic} title={"People"} />
                    </NavLink>
                    <NavLink to={"/Manga"}>
                        <CardHomePage src={mangaPic} title={"Manga"} />
                    </NavLink>
                </div>
                <div className='flex items-center justify-start'>
                    <NavLink to={"/Light-novel"}>
                        <CardHomePage src={lnPic} title={"Light Novel"} />
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Homepage