import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as fas from '@fortawesome/free-solid-svg-icons'
import { useDebounce } from '../../hooks/useDebounce';
import { useQueryState } from '../../hooks/useQueryState';

const SearchBar = () => {
    const [search, setSearch] = useQueryState('q', {isClearAll: true});
    const [searchInput, setSearchInput] = useState(()=> search ? search : '');

    useDebounce(()=> setSearch(searchInput), 2000, searchInput);

    return (
        <div className='flex justify-center gap-1 my-10'>
            <div className='bg-white pl-2 rounded flex items-center gap-3'>
                <label htmlFor="search" className='cursor-pointer'><FontAwesomeIcon className='text-xl' icon={fas.faSearch} /></label>
                <input className='rounded py-2 outline-none w-96' placeholder='Type it for search...' value={searchInput} type="text" name='search' id='search' onChange={(e)=>{setSearchInput(e.currentTarget.value)}} />
            </div>

        </div>
    )
}

export default SearchBar