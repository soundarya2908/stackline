import { Dispatch } from 'redux';
// import { fetchDataFromApi } from './mockApi';

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const fetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST,
});

export const fetchDataSuccess = (data: []) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailure = (error: string) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});

export const fetchData = () => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchDataRequest());

    // try {
    //   const data = await fetchDataFromApi();
    //   dispatch(fetchDataSuccess(data));
    // } catch (error) {
    //   dispatch(fetchDataFailure(error.message));
    // }
  };
};
