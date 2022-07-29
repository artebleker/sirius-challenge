import React from "react";
import "./pagination.css";
const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((currentPage += 1));
    }
  };
  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((currentPage -= 1));
    }
  };
  return (
    <div className="pagination-container">
      {currentPage > 1 && 
      <button
        className="text pagination-btn"
        type="button"
        onClick={()=>setCurrentPage(1)}
      >
        <strong>{"<<<"}</strong>
      </button>
 } 
      <button
        className="text pagination-btn"
        type="button"
        onClick={previousPage}
      >
        {"<<"}
      </button>
      <div className="current-page">
        <p className="text">{currentPage}</p>
      </div>
      <button
        className="pagination-btn"
        type="button"
        onClick={() => currentPage < (totalPages-2) && setCurrentPage(currentPage + 1)}
      >
        <p className="text">{currentPage < totalPages && currentPage + 1}</p>
      </button>
      <button
        className="pagination-btn"
        type="button"
        onClick={() => currentPage < (totalPages-1) && setCurrentPage(currentPage + 2)}
      >
        <p className="text">
          {currentPage < (totalPages-1) && currentPage + 1 < totalPages && currentPage + 2}
        </p>
      </button>
      <button
        className="pagination-btn"
        type="button"
        onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 3)}
      >
        <p className="text">
          {currentPage < (totalPages-2) && currentPage + 2 < totalPages && currentPage + 3}
        </p>
      </button>
      <button className="text pagination-btn" type="button" onClick={nextPage}>
        {">>"}
      </button>
    </div>
  );
};

export default Pagination;
