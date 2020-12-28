import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router';
import VerticalBox from "../../../common/Box/VerticalBox";
import HorizontalBox from "../../../common/Box/HorizontalBox";
import HPadding from "../../../common/Box/HorizontalBox/Padding";
import VPadding from "../../../common/Box/VerticalBox/Padding";

const useStyles = makeStyles((theme) => ({

    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        fontSize: 12,
        flexGrow: 1,
    },
}));

const AppBar = ({
                    history
                }) => {
    const classes = useStyles();
    return (
        <VerticalBox height={300}>
            <VPadding size={20}/>
            <HorizontalBox height={300}>
                <HPadding size={20}/>
                <Typography variant="h6" className={classes.title}>
                    Words We Use
                </Typography>
            </HorizontalBox>
        </VerticalBox>
    );
}

export default withRouter(AppBar);