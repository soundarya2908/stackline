import { ActionTypes, MyData } from './types';

interface InitialState {
    data: MyData[]; 
    isLoading: boolean;
    isError: boolean;
}

const initialState: InitialState = {
    data: [],
    isLoading: false,
    isError: false
};

const reducer = (state = initialState, action: any) => { 
    switch (action.type) {
        case ActionTypes.LOAD:
            return {
                ...state,
                isLoading: true,
                isError: false,
            };
        case ActionTypes.LOAD_SUCCESS:
            return {
                ...state,
                data: action.usersData,
                isLoading: false,
            };
        case ActionTypes.LOAD_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        default:
            return state;
    }
}; 

export default reducer;
