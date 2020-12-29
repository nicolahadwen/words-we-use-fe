import React from "react";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import * as SortTypes from '../../constants/sort/sortTypes';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({

    select: {
        width: "300px",
        border: "none",
        borderBox: "none"
    },
}));

const VoteSort = ({
                      onChange
}) => {
    const classNames = useStyles();
    return (
        <Select className={classNames.select} label={"Sort"}
                defaultValue={SortTypes.NONE}
                onChange={onChange}
        >
            <MenuItem value={SortTypes.NONE}>None</MenuItem>
            <MenuItem value={SortTypes.VOTES_ASC}>Votes: Low to High</MenuItem>
            <MenuItem value={SortTypes.VOTES_DESC}>Votes: High to Low</MenuItem>
        </Select>
    );
}

export default VoteSort;