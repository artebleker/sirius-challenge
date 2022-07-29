import React from "react";
import "./search.css";
const Search = ({ q, setQ, setCurrentPage }) => {
  return (
    <div className="search-container">
      <form>
        <svg
          width="33"
          height="33"
          viewBox="0 0 33 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="search-icon"
        >
          <path
            d="M13.6188 26.9829C16.3702 26.9829 18.9486 26.16 21.0944 24.7543L28.6738 32.28C29.1757 32.76 29.8159 33 30.5081 33C31.9444 33 33 31.8857 33 30.48C33 29.8286 32.775 29.1943 32.2905 28.7143L24.763 21.2229C26.3204 19.0286 27.2375 16.3714 27.2375 13.4914C27.2375 6.06857 21.1117 0 13.6188 0C6.14316 0 0 6.06857 0 13.4914C0 20.9143 6.12585 26.9829 13.6188 26.9829ZM13.6188 23.3829C8.13319 23.3829 3.63398 18.9257 3.63398 13.4914C3.63398 8.05714 8.13319 3.6 13.6188 3.6C19.1044 3.6 23.6036 8.05714 23.6036 13.4914C23.6036 18.9257 19.1044 23.3829 13.6188 23.3829Z"
            fill="#00DFDD"
          />
        </svg>
        <input
          type="search"
          placeholder="Search User"
          className="title search-area"
          name="keyword"
          id="keyword"
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            setCurrentPage(1);
          }}
        ></input>
      </form>
    </div>
  );
};

export default Search;
