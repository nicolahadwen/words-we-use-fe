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
import HorizontalBox from "../../common/Box/HorizontalBox";
import GreedyPadding from "../../common/Box/HorizontalBox/GreedyPadding";
import Filter from "../../components/Filter";
import VerticalBox from "../../common/Box/VerticalBox";
import VPadding from "../../common/Box/VerticalBox/Padding";
import HPadding from "../../common/Box/HorizontalBox/Padding";

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
    return (
        <VerticalBox height={"90%"}>
            <HorizontalBox height="none">
                <GreedyPadding />
                <Filter />
                <HPadding size={20} />
            </HorizontalBox>
            <HorizontalBox>
                <PhraseList phraseList={phraseList}/>
                <HPadding size={20} />
            </HorizontalBox>
            <VPadding size="200px" />
        </VerticalBox>
    );
}

export default PhraseListPage;