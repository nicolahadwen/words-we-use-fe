import { ONE, TWO } from "./fakeData";
export const loadPhraseList = async ({
    nextPageToken,
}) => {
    await wait(1500);
    return fakeGetPhrases(nextPageToken);
}

const wait = ms => new Promise(
    (resolve, reject) => setTimeout(resolve, ms)
);

const fakeGetPhrases = (nextPageToken) => {
    console.log("called")
    if (nextPageToken === 2) {
        return TWO;
    }
    return ONE;
}