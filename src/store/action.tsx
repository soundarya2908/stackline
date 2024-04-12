import { ThunkAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "./store";
import { ActionTypes, MyData, UserActionTypes } from "./types";

export const fetchData = (): ThunkAction<void, RootState, unknown, UserActionTypes> => async (dispatch) => {
  dispatch({ type: ActionTypes.LOAD });
  try {
    const json = await axios.get<MyData[]>("data.json");
    dispatch({
      type: ActionTypes.LOAD_SUCCESS,
      usersData: json.data,
      error: "",
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.LOAD_FAILURE,
      error: "Error fetching users data",
    });
  }
};
