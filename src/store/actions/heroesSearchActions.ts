import { Dispatch } from "redux";
import api from "../../services/api";
import md5 from 'md5';
const { PRIVATE_KEY } = process.env
const { PUBLIC_KEY } = process.env;

export const heroesSearchActionTypes = {
  FETCH_HEROES_SEARCH: 'FETCH_HEROES_SEARCH',
  FETCH_HEROES_SEARCH_SUCCESS: 'FETCH_HEROES_SEARCH_SUCCESS',
  FETCH_HEROES_SEARCH_ERROR: 'FETCH_HEROES_SEARCH_ERROR',
  RESET: 'RESET'
}

export const fetchSearchHeroes = (search: string, offset: number) => async (dispatch: Dispatch) => {
  dispatch({
    type: heroesSearchActionTypes.FETCH_HEROES_SEARCH,
    payload: search
  });
  const ts = String(new Date().getTime());
  const hashMD5 = (md5(
    `${ts}${PRIVATE_KEY}${PUBLIC_KEY}`
  ));
  const searchQuery = `?nameStartsWith=${search}&limit=10&offset=${offset}&ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hashMD5}`;
  try {
    let { data } = await api.get(`/characters${searchQuery}`);
    dispatch({
      type: heroesSearchActionTypes.FETCH_HEROES_SEARCH_SUCCESS,
      payload: data?.data?.results
    });
  } catch (e) {
    dispatch({ type: heroesSearchActionTypes.FETCH_HEROES_SEARCH_ERROR, payload: e });
  }
};

export const reset = () => async (dispatch: Dispatch) => {
  dispatch({ type: heroesSearchActionTypes.RESET });
}