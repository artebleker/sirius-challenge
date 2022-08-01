import React, { useEffect, useState } from "react";
import axios from "axios";

const EpisodesModal = ({ modalEpisode, setModalEpisode, character }) => {
  
  const [episodes, setEpisodes] = useState([]);
  useEffect(() => {
    const endPointsEpisodes = [];
    for (let i = 0; i <= 3; i++) {
      endPointsEpisodes.push(
        `https://rickandmortyapi.com/api/episode/?page=${i}`
      );
    }

    axios
      .all(endPointsEpisodes.map((end) => axios.get(end)))
      .then((data) => {
        let firstResult = data.map((result) => result.data.results);
        let finalResult = firstResult.flatMap((result) => result);
        setEpisodes(finalResult);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {modalEpisode && (
        <div className="over-layer">
          <div className="container-modal">
            <div className="container-label">
              <label className="title ">
                Name
                <p className="text modal-text">{character.name}</p>
              </label>
              <label className="title ">
                Code
                <p className="text modal-text">
                  {
                    episodes.filter((f) => f.url === character.episode[0])[0]
                      .episode
                  }
                </p>
              </label>
              <label className="title ">
                Air Date
                <p className="text modal-text">
                  {
                    episodes.filter((f) => f.url === character.episode[0])[0]
                      .air_date
                  }
                </p>
              </label>
              <label className="title ">
                Episodes List
                <ol
                  className={`modal-text ${
                    character.episode.length > 7 && "overflow"
                  }`}
                >
                  {character.episode.map((episode, index) => (
                    <li key={index}>
                      <a href={episode} target="_blank" rel="noreferrer">
                        <p className="text modal-link">
                          {" "}
                          {episodes.filter((f) => f.url === episode)[0].name}
                        </p>
                      </a>
                    </li>
                  ))}
                </ol>
              </label>
            </div>
            <button
              className="text btn-modal-close"
              onClick={() => setModalEpisode(!modalEpisode)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default EpisodesModal;
