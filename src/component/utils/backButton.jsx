import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as fa from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const BackButton = () => {
    const back = useNavigate();
    return (
        <button className='text-3xl' onClick={() => back(-1)}>
            <FontAwesomeIcon icon={fa.faChevronLeft} />
        </button>
    )
}

export default BackButton