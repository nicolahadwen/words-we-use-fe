import {LOAD_REQUEST, LOAD_SUCCESS, LOAD_ERROR} from "./actionTypes";
import {getErrorCode} from "../../util/request";

export const listRequestAction = () => ({
    type: LOAD_REQUEST,
});

export const loadSuccessAction = payload => {
    const {
        phrases,
        nextPageToken
    } = payload;
    return ({
        type: LOAD_SUCCESS,
        payload: {
            phrases,
            nextPageToken
        }
    });
}

export const loadErrorAction = ({responseCode}) => {
    return ({
        type: LOAD_ERROR,
        payload: {
            errorCode: getErrorCode(responseCode)
        }
    });
}