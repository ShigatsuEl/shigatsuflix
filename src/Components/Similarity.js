import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Poster from "./Poster";

const Title = styled.h3`
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 1.5rem;
  &:not(:first-child) {
    margin-top: 10px;
  }
`;

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: calc(100vw - 160px);
`;

const Similarity = ({ isMovie, similarity }) => {
  return (
    <>
      <Title>{isMovie ? "Similar Movies" : "Similar TV shows"}</Title>
      <Box>
        {isMovie
          ? similarity && similarity.length > 0
            ? // Movie Detail Tab에서만 보이는 Poster Component
              similarity.map((movie) => (
                <Poster
                  key={movie.id}
                  id={movie.id}
                  info={movie.original_title}
                  imageUrl={movie.poster_path}
                  rating={movie.vote_average}
                  subInfo={movie.release_date.substring(0, 4)}
                  isMovie={true}
                  isFilm={true}
                  isClick={true}
                  isSubInfo={true}
                />
              ))
            : "Not found information"
          : similarity && similarity.length > 0
          ? // show Detail Tab에서만 보이는 Poster Component
            similarity.map((show) => (
              <Poster
                key={show.id}
                id={show.id}
                info={show.original_name}
                imageUrl={show.poster_path}
                rating={show.vote_average}
                subInfo={show.first_air_date.substring(0, 4)}
                isFilm={true}
                isClick={true}
                isSubInfo={true}
              />
            ))
          : "Not found information"}
      </Box>
    </>
  );
};

Similarity.propTypes = {
  similarity: PropTypes.array,
  isMovie: PropTypes.bool.isRequired,
};

export default Similarity;
