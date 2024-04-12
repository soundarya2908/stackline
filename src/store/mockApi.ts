import { Dispatch } from 'redux';
import { fetchDataRequest, fetchDataSuccess, fetchDataFailure } from './actions';

export const fetchDataFromAPI = (jsonData: [], error: String) => {
    return async (dispatch: Dispatch) => {
      dispatch(fetchDataRequest()); // Dispatch request action
  
      try {
        // Simulate asynchronous behavior with setTimeout
        setTimeout(() => {
          dispatch(fetchDataSuccess(jsonData)); // Dispatch success action with JSON data
        }, 1000);
      } catch (error) {
        dispatch(fetchDataFailure(String(error))); // Dispatch failure action with error message
      }
    };
  };
