import React from "react";
import "./styles.css";

function Result({ result, searchGif, showResult, valueInput, clearInput }) {
  return (
    <div className="content-gallery">
      {!!searchGif && <h2 className="title-gallery loading">loading...</h2>}
      {!!result.length && !!showResult ? (
        <h1 className="title-gallery">
          {"Resultados de tu busqueda para " + valueInput}
        </h1>
      ) : (
        result.length === 0 &&
        !!showResult &&
        !searchGif &&
        !clearInput && (
          <p className="suggest">
            {" "}
            No se encontraron resultados... Intenta nuevamente!{" "}
          </p>
        )
      )}
      {!result.length && (
        <h2 className="title-gallery" id="suggest-search">
          Realiza tu búsqueda
        </h2>
      )}
      {!result.length && !!showResult && !searchGif && !!clearInput && (
        <p className="suggest">
          Ingrese el nombre de un Gif sobre la barra de busqueda!
        </p>
      )}
      <div className="result">
        {result.map((gif) => {
          return (
            <a href={gif.url} key={gif.id}>
              <img
                className="gifs"
                src={gif.images.original.url}
                alt={gif.title}
              />
            </a>
          );
        })}
      </div>
    </div>
  );
}
export default Result;
