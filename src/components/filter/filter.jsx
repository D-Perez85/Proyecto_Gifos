import React from "react";
import "./styles.css";
import gifo from "../../images/gifo.svg";
import searchLogo from "../../images/searchLogo.svg";
function Filter({
  search,
  setSearch,
  setSearchGif,
  complete,
  setComplete,
  setShowResult,
  setClearInput,
}) {
  return (
    <div className="content-filter">
      <h2 className="content-title">
        ¡Inspirate y busca los mejores <span>GIFS!</span>
      </h2>
      <img className="gifo" src={gifo} alt="logo-gifo" />
      <div className="content-search">
        <input
          className="input-search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          onClick={(e) => {
            setShowResult(true);
            setClearInput(true);
          }}
          type="text"
          name=""
          id=""
        />
        <button
          className="search-btn"
          onClick={() => {
            setSearchGif(true);
          }}
        >
          <img src={searchLogo} alt="icon-search" />
        </button>
      </div>
      <div>
        {complete.map((data, i) => (
          <p
            className="text-complete"
            key={i}
            onClick={() => {
              setSearch(data.name);
              setSearchGif(true);
              setComplete([]);
            }}
          >
            {data.name}
          </p>
        ))}
      </div>
    </div>
  );
}
export default Filter;
