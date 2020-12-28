import React, {useState} from 'react';

import VBox from "../../../common/Box/VerticalBox";
import HBox from "../../../common/Box/HorizontalBox";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { Button } from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {VoteType} from "../../../constants/phrases/voteType";
import {registerVote} from "../../../api/phrase";

const useStyles = makeStyles((theme) => ({
    button: {
        backgroundColor: "inherit",
        border: "none",
        outline: "none",
        color: "black",
        padding: "3px"
    },
}));

const Voting = ({
    positive,
    negative
}) => {
    const [voteType, setVoteType] = useState(null);
    const classes = useStyles();
    const onUpVote = () => {
        if (voteType === VoteType.UPVOTE) {
            registerVote({
                voteDelta: -1
            }).then(() => setVoteType(VoteType.NEUTRAL))
        } else {
            setVoteType(VoteType.UPVOTE)
            registerVote({
                voteDelta: 1
            }).then(() => setVoteType(VoteType.UPVOTE))
        }
    }
    const onDownVote = () => {
        if (voteType === VoteType.DOWNVOTE) {
            registerVote({
                voteDelta: 1
            }).then(() => setVoteType(VoteType.NEUTRAL))
        } else {
            registerVote({
                voteDelta: -1
            }).then(() => setVoteType(VoteType.DOWNVOTE))
        }
    }
    return (
        <VBox width={"none"}>
            <HBox>
                <Button
                    variant="contained"
                    className={classes.button}
                    aria-selected={voteType === VoteType.UPVOTE}
                    startIcon={<AddIcon color="primary"/>}
                    onClick={onUpVote}
                >
                    {voteType === VoteType.UPVOTE ? positive + 1: positive}
                </Button>
            </HBox>
            <HBox>
                <Button
                    className={classes.button}
                    aria-selected={voteType === VoteType.DOWNVOTE}
                    variant="contained"
                    startIcon={<RemoveIcon color="secondary"/>}
                    onClick={onDownVote}
                >
                    {voteType === VoteType.DOWNVOTE ? negative + 1: negative}
                </Button>
            </HBox>
        </VBox>
    )
}

export default Voting;