import React from "react";
import HomePresenter from "./HomePresenter";
import { moviesApi, tvApi } from "api";

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends React.Component {
  state = {
    nowPlaying: null,
    topRated: null,
    loading: true,
    error: null,
  };

  async componentDidMount() {
    try {
      const {
        data: { results: nowPlaying },
      } = await moviesApi.nowPlaying();
      const {
        data: { results: topRated },
      } = await tvApi.topRated();
      this.setState({
        nowPlaying,
        topRated,
      });
    } catch {
      this.setState({
        error: "Can't find movie information.",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const { nowPlaying, topRated, error, loading } = this.state;
    console.log(this.state);
    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        topRated={topRated}
        loading={loading}
        error={error}
      />
    );
  }
}
