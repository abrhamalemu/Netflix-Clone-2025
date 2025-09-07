// import React, { useEffect, useState } from "react";

// const Movie = () => {
//   const [movieLIst, setMovieList] = useState([]);
//   const getmovie = () => {
//     fetch(
//       "https://api.themoviedb.org/3/discover/movie?api_key=0f9939bf9f9614b73fa02cd6b5a876f4"
//     )
//       .then((res) => res.json())
//       //   .then((json) => console.log(json.results));
//       .then((json) => setMovieList(json.results));
//   };
//   useEffect(() => {
//     getmovie();
//   }, []);
//   console.log(movieLIst);

//   return (
//     <div>
//       {movieLIst.map((Movie) => (
//         <img
//           style={{
//             width: "300px",
//             height: "250px",
//             marginLeft: "30px",
//             marginTop: "25px",
//           }}
//           src={`https://image.tmdb.org/t/p/w500${Movie.poster_path}`}
//         />
//       ))}
//     </div>
//   );
// };

// export default Movie;
// /////////////////////////////////////////////////////////////////////////////

// 3. Basic Fetch Example Using JavaScript
// Create a new JavaScript file (e.g., tmdb-fetch.js):

// javascript
// const axios = require('axios');

// const API_KEY = 'YOUR_API_KEY_HERE'; // Replace with your actual API key
// const BASE_URL = 'https://api.themoviedb.org/3';

// async function fetchMovies() {
//     try {
//         const response = await axios.get(`${BASE_URL}/movie/popular`, {
//             params: {
//                 api_key: API_KEY,
//                 language: 'en-US',
//                 page: 1
//             }
//         });

//         console.log('Popular Movies:');
//         response.data.results.forEach(movie => {
//             console.log(`- ${movie.title} (${movie.release_date})`);
//         });

//         return response.data;
//     } catch (error) {
//         console.error('Error fetching data:', error.message);
//     }
// }

// // Fetch and display data
// fetchMovies();
// ///////////////////////////////////////////////////////////////////////////
