import React from 'react';
import '../styles/pagination.css';

//props: activePage, totalPages
function Pagination({activePage, maxPages, setCurrent, current}){

    const showPageNum = (position) => {
        if(position === 'previous'){
            if(activePage > 1){
                return activePage - 1;
            }else{
                return '-';
            }
        }else if(position === 'current'){
            return activePage;
        }else if(position === 'next'){
            if(activePage < maxPages){
                return activePage + 1;
            }else{
                return '-';
            }
        }
    }

    const prevPage = () => {
        if(activePage > 1){
            setCurrent({...current, activePage: activePage - 1});
        }
    }

    const nextPage = () => {
        if(activePage < maxPages){
            setCurrent({...current, activePage: activePage + 1});
        }
    }

    const backToFirst = () => {
        if(activePage > 1) setCurrent({...current, activePage: 1});
    }

    const forwardToLast = () => {
        if(activePage < maxPages) setCurrent({...current, activePage: maxPages});
    }

    return (
        <div className='pages-section'>
            <button onClick={() => backToFirst()} className='page-btn'><i className="fas fa-angle-double-left"></i></button>
            <button onClick={() => prevPage()} className='prev-btn page-btn'><i className="fas fa-chevron-left"></i></button>
            <button onClick={() => prevPage()} className='prev page-btn'>{showPageNum('previous')}</button>
            <button className='current page-btn'>{showPageNum('current')}</button>
            <button onClick={() => nextPage()} className='next page-btn'>{showPageNum('next')}</button>
            <button onClick={() => nextPage()} className='next-btn page-btn'><i className="fas fa-chevron-right"></i></button>
            <button onClick={() => forwardToLast()} className='page-btn'><i className="fas fa-angle-double-right"></i></button>
        </div>
    );
}

export default Pagination;