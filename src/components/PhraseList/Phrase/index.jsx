import React from 'react';
import clsx from "clsx";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HBox from "../../../common/Box/HorizontalBox";
import GreedyHPadding from "../../../common/Box/HorizontalBox/GreedyPadding";
import Voting from "./Voting";
import VerticalBox from "../../../common/Box/VerticalBox";

import styled from "styled-components";
import {Button} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        fontSize: 16,
    },
    pos: {
        marginBottom: 12,
    },
    button: {
        padding: "0px",
        width: "100%",
        backgroundColor: "inherit",
        outline: "none",
        border: "none",
        boxShadow: 'none',
        "&:hover": {
            backgroundColor: "#efebe9",
            boxShadow: 'none',
        }
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    accordian: {
        width: '100%',
        border: "none"
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
}));

const VotingAndDescContainer = styled(HBox)`
    justify-content: space-between;
`;

const PhraseComponent = ({
    phrase,
    topDescription: {
        description,
        votes
    },
    firstReportDetails: {
        locationDescription
    },


}) => {
    const classes = useStyles();
    const [isExpanded, setIsExpanded] = React.useState(false);
    return (
        <Card className={classes.root}>
            <CardContent>
                <VotingAndDescContainer>
                    <VerticalBox>
                    <Typography variant="h4" className={classes.title} gutterBottom>
                        { phrase }
                    </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            { locationDescription }
                        </Typography>
                    </VerticalBox>
                    <GreedyHPadding/>
                    <Voting {...votes} />
                </VotingAndDescContainer>
                <Typography variant="body2" component="p">
                    { description }
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Button
                    className={classes.button}
                    variant="contained"
                    onClick={() => setIsExpanded(!isExpanded)}
                    startIcon={<ExpandMoreIcon className={clsx(classes.expand, {
                        [classes.expandOpen]: isExpanded,
                    })}/>}
                />
            </CardActions>
            <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>More Stuff</Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}

export default PhraseComponent;