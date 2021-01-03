import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "components/Loader";
import Message from "components/Message";
import PostData from "system/PostData";
import Slide from "components/Slide";
import { useState } from "contexts/tmdbContext";

const Container = styled.div``;

const HomePresenter = () => {
  const { nowPlaying, topRated, match, error, loading } = useState();
  return (
    <>
      <Helmet>
        <title>Home | ShigatsuFlix</title>
      </Helmet>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <PostData>
            {nowPlaying &&
              nowPlaying.length > 0 &&
              nowPlaying.map((movie, index) => (
                <Slide
                  key={movie.id}
                  id={movie.id}
                  index={index}
                  bgImage={match ? movie.poster_path : movie.backdrop_path}
                  title={movie.original_title}
                  overview={movie.overview}
                  isMovie={true}
                />
              ))}
          </PostData>
          <PostData bottom={true}>
            {topRated &&
              topRated.length > 0 &&
              topRated.map((show, index) => (
                <Slide
                  key={show.id}
                  id={show.id}
                  index={index}
                  bgImage={match ? show.poster_path : show.backdrop_path}
                  title={show.original_name}
                  overview={show.overview}
                />
              ))}
          </PostData>
          {error && <Message text={error} color="#e74c3c" />}
        </Container>
      )}
    </>
  );
};

export default HomePresenter;
