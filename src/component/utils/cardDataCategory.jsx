import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as fas from '@fortawesome/free-solid-svg-icons'

const colors = ["gold", "silver", "bronze"]

const CardDataCategory = ({data, popularity}) => {
    let color = "transparent";
    if(popularity != undefined){
        color = colors[popularity - 1];
    }
    return (
        <div className='group bg-white h-56 rounded-md drop-shadow-lg overflow-hidden hover:scale-105 ease-in-out duration-100 cursor-pointer relative'>
            <div className='w-full blur-sm group-hover:blur-none '>
                <img src={data.images.jpg.image_url} className='h-56 mx-auto' alt="" />
            </div>
            <div className="absolute bottom-8 flex justify-center w-full left-0 bg-slate-500/[0.5] py-1 items-center">
                <h3 className="text-2xl font-bold text-center px-4 text-white">{data.name}</h3>
            </div>
            {popularity && <div className={`absolute top-2 left-2 text-${color}`}>
                <div className='relative'>
                    <FontAwesomeIcon className='text-6xl' icon={fas.faAward}/>
                    <p className={`absolute top-[9.5px] left-[18.5px]`}>{popularity}</p>
                </div>
            </div>
            }
        </div>
    )
}

export default CardDataCategory