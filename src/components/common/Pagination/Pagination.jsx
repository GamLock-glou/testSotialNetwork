import React, {useState, useEffect,useMemo} from 'react';
import styles from "./Pagination.module.css";

let Pagination = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNumber, setPortionNumber] = useState(1);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rigthPortionPageNumber = portionNumber * portionSize;
    useMemo(()=>{
        setPortionNumber(Math.ceil(currentPage/portionSize));
    }, [currentPage])
    return <div>
        {
            portionNumber > 1 &&
            <button onClick={()=>{setPortionNumber(portionNumber-1)}}>&lt;</button>
        }
        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rigthPortionPageNumber)
            .map(p => {
            return <span key={p} className={ currentPage === p && styles.selectedPage}
                onClick={(e) => {
                    onPageChanged(p);
                }}>{p}</span>
        })}
        {
            portionNumber < portionCount &&
            <button onClick={()=>{setPortionNumber(portionNumber+1)}}>&gt;</button>
        }
    </div>
}

export default Pagination;