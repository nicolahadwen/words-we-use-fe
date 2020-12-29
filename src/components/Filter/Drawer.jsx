import React, {useState} from "react";
import HPadding from "../../common/Box/HorizontalBox/Padding";
import GreedyPadding from "../../common/Box/HorizontalBox/GreedyPadding";
import {Button, makeStyles} from "@material-ui/core";
import VBox from "../../common/Box/VerticalBox";
import CountrySelect from "../CountrySelect";
import VPadding from "../../common/Box/VerticalBox/Padding";
import HBox from "../../common/Box/HorizontalBox";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import SelectInput from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import * as LastReportedTypes from "../../constants/filter/lastReportedType";

const useStyles = makeStyles((theme) => ({
    drawerContainer: {
        [theme.breakpoints.down('sm')]: {
            width: '300px',
        },
        [theme.breakpoints.up('md')]: {
            width: '400px',
        },
        [theme.breakpoints.up('lg')]: {
            width: '400px',
        },
        height: "100%",
        padding: '20px'
    },
}));

const DrawerComponent = () => {
    const [minVotes, setMinVotes] = useState("");
    const [maxVotes, setMaxVotes] = useState("");
    const [maxVotesError, setMaxVotesError] = useState(false);
    const classNames = useStyles();

    const onMaxVotesChange = (event) => {
        const value = event.target.value;
        setMaxVotes(value || "");
        const maxVal = parseInt(value);
        if (minVotes && minVotes > maxVal) {
            setMaxVotesError(true);
        } else {
            setMaxVotesError(false);
        }
    }

    const onCountryChange = (e, value) => {
        console.log("onCountryChange: ", value);
    }

    const onMinVotesChange = (event) => {
        const value = event.target.value;
        setMinVotes(value || "");
        if (maxVotes && value > parseInt(maxVotes)) {
            setMaxVotesError(true);
        } else {
            setMaxVotesError(false);
        }
    }
    return (
        <div className={classNames.drawerContainer}>
            <VBox>
                <CountrySelect  onChange={onCountryChange}/>
                <VPadding size={10} />
                <HBox height="none">
                    <TextField label={"Min Votes"}
                               type="number"
                               value={minVotes}
                               onChange={onMinVotesChange}/>
                    <HPadding size={10} />
                    <TextField label={"Max Votes"}
                               type="number"
                               value={maxVotes}
                               onChange={onMaxVotesChange}
                               error={maxVotesError}
                    />
                </HBox>
                <GreedyPadding />
                <Button variant="contained">
                    Apply
                </Button>
            </VBox>
        </div>

    )
}
export default DrawerComponent;