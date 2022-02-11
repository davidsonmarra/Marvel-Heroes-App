import { heroesActionTypes } from "../actions/heroesActions";

interface Props {
  loading_fetch_heroes: boolean;
  error_fetch_heroes: string;
  heroes: string[];
}

interface ActionProps extends Props {
  type: string;
  payload: any;
}

const INITIAL_STATE: Props = {
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