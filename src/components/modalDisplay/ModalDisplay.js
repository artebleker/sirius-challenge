import React from "react";
import "./modalDisplay.css";

const ModalDisplay = ({ modalState, setModalState, character }) => {
  
  // const [episodes, setEpisodes] = useState([]);
  // useEffect(() => {

  //   const endPointsEpisodes = [];
  //   for (let i = 0; i <= 3; i++) {
  //     endPointsEpisodes.push(`https://rickandmortyapi.com/api/episode/?page=${i}`);
  //   }
    
  //   axios
  //   .all(endPointsEpisodes.map((end) => axios.get(end)))
  //   .then((data) => {
  //     let firstResult = data.map((result) => result.data.results);
  //     let finalResult = firstResult.flatMap((result) => result);
  //     setEpisodes(finalResult);
      
      
  //   })
  //   .catch((err) => console.error(err));
    
  // }, []);
  // let episodeData =  () => { episodes.filter((f) => f.url === character.episode[0])};
  // let sortArray = Array.from(new Set(episodeData.map( a => a.id))).map(id => { return episodeData.find(a => a.id === id)})
  // setEpisodes(epis);

//  console.log(character.episode[0])

  // if(type === 'episodes'){
  // return (
  //   <>
  //     {modalState && (
  //       <div className="over-layer">
  //         <div className="container-modal">
  //           <div className="container-label">
  //             <label className="title ">
  //               Name
  //               <p className="text modal-text">{character.name}</p>
  //             </label>
  //             <label className="title ">
  //               Code
  //               <p className="text modal-text">{episodes[0].episode}</p>
  //             </label>
  //             <label className="title ">
  //               Air Date
  //               <p className="text modal-text">{episodes[0].air_date}</p>
  //             </label>
  //             <label className="title ">
  //               Episodes List
  //               <ol className={`modal-text ${character.episode.length > 7 && 'overflow'}`}>
  //               {character.episode.map((episode, index) => (
  //                 <li key={index} >
  //                   <a href={episode} target='_blank' rel="noreferrer" >
  //                  <p className="text modal-link"> {episode}</p> 
  //                   </a>
  //                 </li>
  //               ))}
  //               </ol>
  //             </label>
  //           </div>
  //           <button
  //             className="text btn-modal-close"
  //             onClick={() => setModalState(!modalState)}
  //           >
  //             Close
  //           </button>
  //         </div>
  //       </div>
  //     )}
  //   </>
  // )}
  // else{
    return(
    <>
    {modalState && (
      <div className="over-layer">
        <div className="container-modal">
          {character.image ?
<img src={character.image} alt={character.name} className="modal-img" />
:
<svg className="modal-img" width="45" height="36" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.98666 35.5H38.9951C42.9256 35.5 45 33.4721 45 29.5973V10.5854C45 6.71055 42.9256 4.68262 38.9951 4.68262H34.0275C32.6082 4.68262 32.1533 4.44723 31.2616 3.5238L29.8241 1.98474C28.8779 0.988877 27.9135 0.5 26.0574 0.5H18.8334C16.9774 0.5 16.0311 0.988877 15.0667 1.98474L13.6292 3.5238C12.7558 4.42913 12.2827 4.68262 10.8633 4.68262H5.98666C2.05621 4.68262 0 6.71055 0 10.5854V29.5973C0 33.4721 2.05621 35.5 5.98666 35.5ZM6.22321 31.8968C4.56733 31.8968 3.62111 31.0277 3.62111 29.2713V10.9113C3.62111 9.17305 4.56733 8.30393 6.22321 8.30393H11.9187C13.5564 8.30393 14.3934 8.01423 15.3215 7.01837L16.7044 5.49741C17.7234 4.39291 18.2693 4.10321 19.8706 4.10321H25.0202C26.6215 4.10321 27.1674 4.39291 28.1682 5.47931L29.5693 7.01837C30.4974 8.01423 31.3344 8.30393 32.9721 8.30393H38.7586C40.4327 8.30393 41.3607 9.17305 41.3607 10.9113V29.2713C41.3607 31.0277 40.4327 31.8968 38.7586 31.8968H6.22321ZM22.4909 29.5067C27.9499 29.5067 32.317 25.1611 32.317 19.7111C32.317 14.261 27.9499 9.91542 22.4909 9.91542C17.0501 9.91542 12.683 14.261 12.683 19.7111C12.683 25.1611 17.0501 29.5067 22.4909 29.5067ZM32.9357 13.2289C32.9357 14.5507 34.0093 15.5828 35.3195 15.5647C36.5932 15.5647 37.6668 14.5326 37.6668 13.2289C37.6668 11.9615 36.575 10.8751 35.3195 10.8751C34.0093 10.8751 32.9357 11.9615 32.9357 13.2289ZM22.4909 26.2113C18.9062 26.2113 15.9765 23.3143 15.9765 19.7111C15.9765 16.0898 18.888 13.2108 22.4909 13.2108C26.112 13.2108 29.0235 16.0898 29.0235 19.7111C29.0235 23.3143 26.112 26.2113 22.4909 26.2113Z" fill="#00DFDD"/>
</svg>
          }
        <div className="container-label">
              <label className="title "> Name
                <p className="text modal-text">{character.name}</p>
              </label>
              {
              character.type &&
              <label className="title ">Type
                <p className="text modal-text">{character.type}</p>
              </label>
              }
              <label className="title ">Gender
                <p className="text modal-text">{character.gender}</p>
              </label>
              <label className="title ">Origin
                <p className="text modal-text">{character.origin.name}</p>
              </label>
              <label className="title ">Location
                <p className="text modal-text">{character.location.name}</p>
              </label>
              </div>
          <button
            className="text btn-modal-close"
            onClick={() => setModalState(!modalState)}
          >
            Close
          </button>
        </div>
      </div>
    )}
  </>
  )}
// };

export default ModalDisplay;
