import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";
import Slide from "Components/Slide";
import Card from "Components/Card";

const Container = styled.div``;

const HomePresenter = ({ nowPlaying, topRated, loading, error }) => (
  <>
    <Helmet>
      <title>Home | ShigatsuFlix</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        <Slide>
          {nowPlaying &&
            nowPlaying.length > 0 &&
            nowPlaying.map((movie, index) => (
              <Card
                key={movie.id}
                id={movie.id}
                index={index}
                bgImage={movie.backdrop_path}
                title={movie.original_title}
                overview={movie.overview}
              />
            ))}
        </Slide>
        {topRated && topRated.length > 0 && (
          <Section title="Popular">
            {topRated.map((show) => (
              <Poster
                key={show.id}
                id={show.id}
                title={show.original_name}
                imageUrl={show.poster_path}
                rating={show.vote_average}
                year={show.first_air_date.substring(0, 4)}
              />
            ))}
          </Section>
        )}
        {error && <Message text={error} color="#e74c3c" />}
      </Container>
    )}
  </>
);

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  topRated: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default HomePresenter;
