import React from "react";
import Row from "../Row/Row";
import requests from "../../../utils/requests";

const RowList = () => {
  return (
    <div>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginal}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated Movies" fetchUrl={requests.fetchTopRatedMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romatic Movies" fetchUrl={requests.fetchRomaticMovies} />
      <Row title="Documen taries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Tv Show" fetchUrl={requests.fetchTvShow} />
    </div>
  );
};

export default RowList;
