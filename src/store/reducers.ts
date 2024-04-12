import { combineReducers } from 'redux';
import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from './actions';

interface DataState {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialDataState: DataState = {
  data: null,
  loading: false,
  error: null,
};

const dataReducer = (state = initialDataState, action: any) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export interface RootState {
  data: DataState;
}

export const rootReducer = combineReducers({
  data: dataReducer,
});
