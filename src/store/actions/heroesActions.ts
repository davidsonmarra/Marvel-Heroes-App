import { Dispatch } from "redux";
import api from "../../services/api";
import md5 from 'md5';
const { PRIVATE_KEY } = process.env
const { PUBLIC_KEY } = process.env;

export const heroesActionTypes = {
  FETCH_HEROES: 'FETCH_HEROES',
  FETCH_HEROES_SUCCESS: 'FETCH_HEROES_SUCCESS',
  FETCH_HEROES_ERROR: 'FETCH_HEROES_ERROR'
}

export const fetchHeroes = (offset: number) => async (dispatch: Dispatch) => {
  dispatch({
    type: heroesActionTypes.FETCH_HEROES
  });
  const ts = String(new Date().getTime());
  const hashMD5 = (md5(
    `${ts}${PRIVATE_KEY}${PUBLIC_KEY}`
  ));
  const searchQuery = `?limit=30&offset=${offset}&ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hashMD5}`;
  try {
    let { data } = await api.get(`/characters${searchQuery}`);
    dispatch({
      type: heroesActionTypes.FETCH_HEROES_SUCCESS,
      payload: data?.data?.results
    });
  } catch (e) {
    dispatch({ type: heroesActionTypes.FETCH_HEROES_ERROR, payload: e });
  }
};