import { LOAD_REQUEST, LOAD_SUCCESS, LOAD_ERROR } from "./actionTypes";

const initialState = {
    isLoading: false,
    phraseList: null,
    errorCode: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case LOAD_REQUEST: {
            return {
                ...state,
                isLoading: true
            };
        }
        case LOAD_SUCCESS: {
            const { phrases, nextPageToken } = action.payload;
            return {
                ...state,
                isLoading: false,
                phraseList: phrases,
                nextPageToken
            };
        }
        case LOAD_ERROR: {
            const errorCode = action.payload;
            return {
                ...state,
                errorCode,
                isLoading: false

            }
        }
        default:
            return state;
    }
}