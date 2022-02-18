import { HeroDTO } from "../../DTOs/HeroDTO";
import { heroesActionTypes } from "../actions/heroesActions";

interface Props {
  is_end: boolean;
  loading_fetch_heroes: boolean;
  error_fetch_heroes: string;
  heroes: HeroDTO[];
}

interface ActionProps extends Props {
  type: string;
  payload: any;
}

const INITIAL_STATE: Props = {
  is_end: false,
  loading_fetch_heroes: false,
  error_fetch_heroes: '',
  heroes: []
}

export default (state = INITIAL_STATE, action: ActionProps) => {
  switch (action.type) {
    case heroesActionTypes.FETCH_HEROES:
      return {
        ...state,
        loading_fetch_heroes: true,
        error_fetch_heroes: ''
      };
    case heroesActionTypes.FETCH_HEROES_SUCCESS:
      return {
        ...state,
        is_end: action.payload?.length < 30 ? true : false,
        loading_fetch_heroes: false,
        error_fetch_heroes: '',
        heroes: state.heroes.concat(action.payload)
      };
    case heroesActionTypes.FETCH_HEROES_ERROR:
      return {
        ...state,
        loading_fetch_heroes: false,
        error_fetch_heroes: action.payload
      };
    default:
      return state;
  }
};