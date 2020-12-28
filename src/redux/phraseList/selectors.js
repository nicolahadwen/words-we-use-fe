export const getState = store => store.phrases

export const getPhraseList = store =>
    getState(store) && getState(store).phraseList ? getState(store).phraseList : []

export const getIsPhraseListLoading = (store) =>
    getState(store) ? getState(store).isLoading : false

export const getPhraseListErrorCode = (store) =>
    getState(store) ? getState(store).errorCode : null