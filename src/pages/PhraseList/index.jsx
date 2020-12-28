import React, {useEffect, useState} from "react";
import PhraseList from '../../components/PhraseList';
import CircularProgress from '@material-ui/core/CircularProgress';
import CenterBox from '../../common/Box/CenterBox';

import {useDispatch, useSelector} from "react-redux";
import { getPhraseList, getIsPhraseListLoading, getPhraseListErrorCode } from "../../redux/phraseList/selectors";
import {
    listRequestAction,
    loadErrorAction,
    loadSuccessAction,
} from '../../redux/phraseList/actions';
import {loadPhraseList} from "../../api/phraseList";

const PhraseListPage = () => {
    const phraseList = useSelector(getPhraseList);
    console.log(phraseList);
    const isLoading = useSelector(getIsPhraseListLoading);
    const errorCode = useSelector(getPhraseListErrorCode);
    const dispatch = useDispatch();
    const loadWords = () => {
        dispatch(listRequestAction())
        loadPhraseList({ nextPageToken : 1 })
            .then((payload) => {
                return dispatch(loadSuccessAction(payload))
            })
            .catch(({responseCode}) => dispatch(loadErrorAction({responseCode})));
    }
    useEffect(() => {
        loadWords();
    }, [])
    if (isLoading) {
        return (
            <CenterBox>
                <CircularProgress />
            </CenterBox>
        );
    }
    return <PhraseList phraseList={phraseList}/>;
}

export default PhraseListPage;