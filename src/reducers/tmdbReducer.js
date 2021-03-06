import {
  NOWPLAYING,
  UPCOMING,
  POPULAR,
  TOPRATED,
  AIRING_TODAY,
  MATCH_MOBILE,
} from "actions/tmdbAction";

export const tmdbReducer = (state, action) => {
  switch (action.type) {
    case NOWPLAYING:
      return {
        ...state,
        nowPlaying: [...action.payload],
      };
    case UPCOMING:
      return {
        ...state,
        upComing: [...action.payload],
      };
    case POPULAR:
      return {
        ...state,
        popular: [...action.payload],
      };
    case TOPRATED:
      return {
        ...state,
        topRated: [...action.payload],
      };
    case AIRING_TODAY:
      return {
        ...state,
        airingToday: [...action.payload],
      };
    case MATCH_MOBILE:
      const matchMobile = window.matchMedia("(max-width:720px)");
      return {
        ...state,
        matchMobile: matchMobile.matches,
      };
    default:
      return;
  }
};
