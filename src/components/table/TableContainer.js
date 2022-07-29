import React, { useState, useEffect } from "react";
import axios from "axios";
import "./tableContainer.css";
import { Navigate } from "react-router-dom";
import Pagination from "../pagination/Pagination";
import ModalDisplay from "../modalDisplay/ModalDisplay";
import Search from "../search/Search";
import EpisodesModal from "../EpisodesModal";

const TableContainer = () => {
  let token = sessionStorage.getItem("token");

  const [modalState, setModalState] = useState(false);
  const [modalEpisode, setModalEpisode] = useState(false);
  const [modalCharacter, setModalCharacter] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  const [characters, setCharacters] = useState([]);

  const [sortSpecies, setSortSpecies] = useState(false);

  const [q, setQ] = useState("");
  const [searchParam] = useState(["name"]);

  useEffect(() => {
    const endPointsCharacters = [];
    for (let i = 0; i <= 42; i++) {
      endPointsCharacters.push(
        `https://rickandmortyapi.com/api/character/?page=${i}`
      );
    }

    axios
      .all(endPointsCharacters.map((end) => axios.get(end)))
      .then((data) => {
        let firstResult = data.map((result) => result.data.results);
        let finalResult = firstResult.flatMap((result) => result);
        let sortArray = Array.from(new Set(finalResult.map((a) => a.id))).map(
          (id) => {
            return finalResult.find((a) => a.id === id);
          }
        );
        setCharacters(sortArray);
      })
      .catch((err) => console.error(err));
  }, []);

  function search(items) {
    return items.filter((item) => {
      return searchParam.some((newItem) => {
        return (
          item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
        );
      });
    });
  }

  return (
    <>
      {!token ? (
        <Navigate to={"/"} replace />
      ) : (
        <>
          <div className="logout-container">
            <button
              onClick={() => {
                sessionStorage.clear();
                window.location.href = "/";
              }}
              className="text btn-logout "
            >
              Log out
            </button>
          </div>
          <div className="search-position">
            <Search q={q} setQ={setQ} setCurrentPage={setCurrentPage} />
          </div>
          {search(characters).length === 0 ? (
            <div className="table-container not-found">
              <h2 className="title">Characters Not found</h2>
              <img
                className="error-img"
                src={`https://rickandmortyapi.com/api/character/avatar/118.jpeg`}
                alt="not found"
              />
            </div>
          ) : (
            <>
              <div className="table-container">
                <table className="table">
                  <thead>
                    <tr className="title tr-th">
                      <th>Name</th>
                      <th className="responsive-column">Status</th>
                      <th className="responsive-column-specie">
                        <button
                          className={`btn-modal-close text ${
                            sortSpecies && "btn-sort"
                          }`}
                          onClick={(e) => {
                            e.preventDefault();
                            setSortSpecies(!sortSpecies);
                          }}
                        >
                          Specie
                        </button>
                      </th>
                      <th className="responsive-column">Gender</th>
                      <th className="responsive-column">Episodes</th>
                      <th>Detail</th>
                    </tr>
                  </thead>
                  <tbody>
                    {search(characters)
                      .sort((a, b) => {
                        if (!sortSpecies) {
                          if (a.name > b.name) {
                            return 1;
                          }
                          if (a.name < b.name) {
                            return -1;
                          }
                          return 0;
                        } else {
                          if (a.species > b.species) {
                            return 1;
                          }
                          if (a.species < b.species) {
                            return -1;
                          }
                          return 0;
                        }
                      })
                      .slice(
                        currentPage === 1 ? 0 : currentPage * 20,
                        (currentPage + 1) * 20
                      )
                      .map((character, index) => {
                        return (
                          index < currentPage * 20 && (
                            <tr
                              key={index}
                              className={
                                index % 2 === 0 ? "text tr-odd" : "text tr-even"
                              }
                            >
                              <td>{character.name}</td>
                              <td className="responsive-column">
                                {character.status}
                              </td>
                              <td className="responsive-column-specie">
                                {character.species}
                              </td>
                              <td className="responsive-column">
                                {character.gender}
                              </td>
                              <td className="responsive-column">
                                <button
                                  className="btn-detail text"
                                  onClick={() => {
                                    setModalEpisode(!modalEpisode);
                                    setModalCharacter(character);
                                  }}
                                >
                                  {character.episode.length} episodes
                                </button>
                              </td>
                              <td className="detail-eye">
                                <button
                                  className="btn-detail"
                                  onClick={() => {
                                    setModalState(!modalState);
                                    setModalCharacter(character);
                                  }}
                                >
                                  <svg
                                    width="25"
                                    height="16"
                                    viewBox="0 0 25 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M12.085 15.2314C19.3008 15.2314 24.1523 9.41309 24.1523 7.61133C24.1523 5.80957 19.2832 0 12.085 0C4.97461 0 0 5.80957 0 7.61133C0 9.41309 4.95703 15.2314 12.085 15.2314ZM12.085 13.5088C6.47754 13.5088 2.03906 8.8418 2.03906 7.61133C2.03906 6.58301 6.47754 1.72266 12.085 1.72266C17.666 1.72266 22.1133 6.58301 22.1133 7.61133C22.1133 8.8418 17.666 13.5088 12.085 13.5088ZM12.085 12.3311C14.7041 12.3311 16.8047 10.1777 16.8047 7.61133C16.8047 4.9834 14.7041 2.90039 12.085 2.90039C9.44824 2.90039 7.33887 4.9834 7.34766 7.61133C7.36523 10.1777 9.44824 12.3311 12.085 12.3311ZM12.0762 9.13184C11.2324 9.13184 10.5469 8.44629 10.5469 7.61133C10.5469 6.77637 11.2324 6.09082 12.0762 6.09082C12.9199 6.09082 13.6055 6.77637 13.6055 7.61133C13.6055 8.44629 12.9199 9.13184 12.0762 9.13184Z"
                                      fill="white"
                                    />
                                  </svg>
                                </button>
                              </td>
                            </tr>
                          )
                        );
                      })}
                  </tbody>
                </table>

                <ModalDisplay
                  modalState={modalState}
                  setModalState={setModalState}
                  character={modalCharacter}
                />
                <EpisodesModal
                  modalEpisode={modalEpisode}
                  setModalEpisode={setModalEpisode}
                  character={modalCharacter}
                />
              </div>
              <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPages={Math.floor(search(characters).length / 20)}
              />
            </>
          )}
        </>
      )}
    </>
  );
};

export default TableContainer;
