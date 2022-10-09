import React, {useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as fas from '@fortawesome/free-solid-svg-icons'
import { useQueryState } from '../../hooks/useQueryState'

function generateUseQueryState (fn){
    return (data)=>fn(data);
}

const FilterButton = ({filterBy}) => {
    const [filterData, setFilterData] = generateUseQueryState(useQueryState)('order_by');

    const dropdown = useRef();
    const selectedFilter = filterData ? filterData : "favorites";
    clickOutside(dropdown);
    const filters = filterBy.map((data)=> 
    (<li key={data} className='flex justify-between items-center cursor-pointer hover:bg-gray-300 px-2 rounded dropdown' onClick={()=>{
        setFilterData(data.toLowerCase());
    }}>{data}{selectedFilter == data.toLowerCase() && <FontAwesomeIcon className='text-green-400' icon={fas.faCheck} />}</li>)
        )
    return (
        <nav className='relative w-fit dropdown'>
            <button className='text-white dropdown' onClick={() => {
                if (dropdown.current.matches(".hidden")) {
                    dropdown.current.className = dropdown.current.className.replace("hidden", '')
                } else {
                    dropdown.current.className += 'hidden';
                }
            }}>Filter by <FontAwesomeIcon icon={fas.faFilter} /></button>
            <ul ref={dropdown} className='bg-white absolute z-10 right-0 bottom-100 rounded mt-2 dropdown w-28 drop-shadow-lg hidden'>
               {filters}
            </ul>
        </nav>
    )
}

export default FilterButton

function clickOutside(dropdown) {
    window.onclick = (event) => {
        if(dropdown.current){
            if (!event.target.matches('.dropdown') && !dropdown.current?.matches('.hidden')) {
                dropdown.current.className += 'hidden';
            }
        }
    }
}
