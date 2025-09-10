import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "../../../utils/axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const base_url = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    (async () => {
      try {
        console.log(fetchUrl);
        const request = await axios.get(fetchUrl);
        console.log(request);
        setMovie(request.data.results);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, [fetchUrl]);
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name).then(
        (url) => {
          console.log(url);
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(urlParams);
          console.log(urlParams.get("v"));
          setTrailerUrl(urlParams.get("v"));
        }
      );
    }
  };
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row_posters">
        {movies?.map((movie, index) => (
          <img
            onClick={() => handleClick(movie)}
            key={index}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
          />
        ))}
      </div>
      <div style={{ padding: "40px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
};

export default Row;

// ////////////////////////////////////////////////////////

// import React, { useEffect, useState } from "react";
// import "./Row.css";
// import axios from "../../../utils/axios";
// import movieTrailer from "movie-trailer"; // Fixed: removed space before package name
// import YouTube from "react-youtube";

// const Row = ({ title, fetchUrl, isLargeRow }) => {
//   const [movies, setMovies] = useState([]); // Fixed: changed setMovie to setMovies for consistency
//   const [trailerUrl, setTrailerUrl] = useState(""); // Fixed: changed setTrailer to setTrailerUrl for consistency
//   const base_url = "https://image.tmdb.org/t/p/original";

//   useEffect(() => {
//     (async () => {
//       try {
//         console.log(fetchUrl);
//         const request = await axios.get(fetchUrl);
//         console.log(request);
//         setMovies(request.data.results); // Fixed: changed setMovie to setMovies
//       } catch (error) {
//         console.log("error", error);
//       }
//     })();
//   }, [fetchUrl]);

//   const handleClick = (movie) => {
//     if (trailerUrl) {
//       setTrailerUrl("");
//     } else {
//       movieTrailer(movie?.title || movie?.name || movie?.original_name || "") // Added fallback for undefined
//         .then((url) => {
//           console.log(url);
//           // Add error handling for invalid URLs
//           try {
//             const urlParams = new URLSearchParams(new URL(url).search);
//             console.log(urlParams);
//             console.log(urlParams.get("v"));
//             setTrailerUrl(urlParams.get("v"));
//           } catch (error) {
//             console.log("Error parsing URL:", error);
//             // Optional: search for movie trailer by name as fallback
//           }
//         })
//         .catch((error) => {
//           console.log("Error fetching trailer:", error);
//         });
//     }
//   };

//   const opts = {
//     height: "390",
//     width: "100%", // Changed to responsive width
//     playerVars: {
//       autoplay: 1,
//     },
//   };

//   return (
//     <div className="row">
//       <h1>{title}</h1>
//       <div className="row_posters">
//         {movies?.map((movie, index) => (
//           <img
//             onClick={() => handleClick(movie)}
//             key={movie.id || index} // Better to use movie.id if available
//             src={`${base_url}${
//               isLargeRow ? movie.poster_path : movie.backdrop_path
//             }`}
//             alt={movie.name || movie.title}
//             className={`row_poster ${isLargeRow && "row_posterLarge"}`}
//           />
//         ))}
//       </div>
//       <div style={{ padding: "40px" }}>
//         {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
//         {/* Added opts prop */}
//       </div>
//     </div>
//   );
// };

// export default Row;
// //////////////////////////////////////////////////////////
// import React, { useEffect, useState } from "react";
// import "./Row.css";
// import axios from "../../../utils/axios";
// import movieTrailer from "movie-trailer";
// import YouTube from "react-youtube";

// const Row = ({ title, fetchUrl, isLargeRow }) => {
//   const [movies, setMovie] = useState([]);
//   const [trailerUrl, setTrailerUrl] = useState("");

//   const base_url = "https://image.tmdb.org/t/p/original";

//   useEffect(() => {
//     (async () => {
//       try {
//         console.log(fetchUrl);
//         const request = await axios.get(fetchUrl);
//         console.log(request);
//         setMovie(request.data.results);
//       } catch (error) {
//         console.log("error");
//       }
//     })();
//   }, [fetchUrl]);

//   const handleClick = (movie) => {
//     if (trailerUrl) {
//       setTrailerUrl("");
//     } else {
//       movieTrailer(movie?.title || movie?.name || movie?.original_name).then(
//         (url) => {
//           console.log(url);
//           const urlParams = new URLSearchParams(new URL(url).search);
//           console.log(urlParams);
//           console.log(urlParams.get("v"));
//           setTrailerUrl(urlParams.get("v"));
//         }
//       );
//     }
//   };

//   const opts = {
//     height: "390",
//     width: "100%",
//     playerVars: {
//       autoplay: 1,
//     },
//   };

//   return (
//     <div className="row">
//       <h1>{title}</h1>

//       <div className="row__posters">
//         {movies?.map((movie, index) => (
//           <img
//             onClick={() => handleClick(movie)}
//             key={index}
//             src={`${base_url}${
//               isLargeRow ? movie.poster_path : movie.backdrop_path
//             }`}
//             alt={movie.name}
//             className={`row__poster ${isLargeRow && "row_posterLarge"}`}
//           />
//         ))}
//       </div>
//       <div style={{ padding: "40px" }}>
//         {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
//       </div>
//     </div>
//   );
// };

// export default Row;
