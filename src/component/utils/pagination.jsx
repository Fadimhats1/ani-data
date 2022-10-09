import React from 'react'
import { useQueryState } from '../../hooks/useQueryState';

function generateButtonPagination(current, maxPage, pageHandle) {
    let buttons = [];
    let max = 5;
    let min = 1;
    if (maxPage >= 5) {
        if (current + 2 <= maxPage) {
            max = current + 2;
        } else {
            max = maxPage;
        }
        if (current - 2 >= 1) {
            if (max == maxPage) {
                min = max - 4;
            } else {
                min = current - 2;
            }
        } else {
            min = 1;
            max = 5;
        }
    } else if (maxPage < 5) {
        max = maxPage;
        min = 1;
    }

    if (min >= 10) {
        buttons.push(<ButtonPagination key={"first"} number={1} tag={"First"} pageHandle={pageHandle} />)
    }

    for (let i = min; i <= max; i++) {
        buttons.push(
            <ButtonPagination key={i} number={i} pageHandle={pageHandle} />
        )
    }
    if (maxPage >= 15 && current < maxPage - 4) {
        buttons.push(<ButtonPagination key={"last"} number={maxPage} tag={"Last"} pageHandle={pageHandle} />)
    }
    return buttons;
}



const Pagination = ({ maxPage }) => {
    const [page, setPage] = useQueryState('page');

    let currentPage = page ? ((page > 1 && page <= maxPage) ? Number(page) : 1) : 1;

    const pageHandle = (pageNumber) => {
        setPage(pageNumber)
    }    
      
    const buttons = generateButtonPagination(currentPage, maxPage, pageHandle);

    return (
        <div className='flex gap-3 my-8 justify-end items-center'>
            {buttons}
        </div>
    );
}

export default Pagination

const ButtonPagination = ({ number, tag, pageHandle }) => {
    return (
        <button className='px-4 py-2 bg-slate-600 rounded text-white font-bold hover:bg-slate-500' onClick={() => pageHandle(number)}>{tag ? tag : number}</button>
    );
}