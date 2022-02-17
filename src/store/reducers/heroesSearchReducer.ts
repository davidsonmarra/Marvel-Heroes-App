import { HeroDTO } from "../../DTOs/HeroDTO";
import { heroesSearchActionTypes } from "../actions/heroesSearchActions";

interface Props {
  search: string;
  loading_fetch_heroes_search: boolean;
  error_fetch_heroes_search: string;
  heroes_search: HeroDTO[];
}

interface ActionProps extends Props {
  type: string;
  payload: any;
}

const INITIAL_STATE: Props = {
  search: '',
  loading_fetch_heroes_search: false,
  error_fetch_heroes_search: '',
  heroes_search: []
}

export default (state = INITIAL_STATE, action: ActionProps) => {
  switch (action.type) {
    case heroesSearchActionTypes.FETCH_HEROES_SEARCH:
      return {
        ...state,
        search: action.payload,
        loading_fetch_heroes_search: true,
        error_fetch_heroes_search: ''
      };
    case heroesSearchActionTypes.FETCH_HEROES_SEARCH_SUCCESS:
      return {
        ...state,
        loading_fetch_heroes_search: false,
        error_fetch_heroes_search: '',
        heroes_search: state.heroes_search.concat(action.payload)
      };
    case heroesSearchActionTypes.FETCH_HEROES_SEARCH_ERROR:
      return {
        ...state,
        search: '',
        heroes_search: [],
        loading_fetch_heroes_search: false,
        error_fetch_heroes_search: action.payload
      };
    case heroesSearchActionTypes.RESET:
      return {
        ...state,
        heroes_search: [],
        search: '',
      }
    default:
      return state;
  }
};