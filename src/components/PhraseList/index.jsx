import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Phrase from './Phrase';
import VBox from "../../common/Box/VerticalBox";
import VPadding from "../../common/Box/VerticalBox/Padding";
import HBox from "../../common/Box/HorizontalBox";
import HPadding from "../../common/Box/HorizontalBox/Padding";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'scroll',
    },
}));

const PhraseList = ({
    phraseList
}) => {
    const classes = useStyles();

    return (
        <HBox className={classes.root}>
            <HPadding size={20} />
        <VBox >
            <List component="nav" aria-label="phrase list">
                {phraseList.map(phrase => (
                    <VBox key={phrase.phraseId} height="none">
                        <VPadding size={20}/>
                        <Phrase {...phrase} />
                    </VBox>
                ))}
            </List>

            <VPadding size={200} />
        </VBox>
                <HPadding size={20} />
        </HBox>
    );
}

export default PhraseList;