import React, {useState} from 'react';
import FilterListIcon from '@material-ui/icons/FilterList';
import MuiDrawer from '@material-ui/core/Drawer';
import { IconButton } from "@material-ui/core";
import HPadding from "../../common/Box/HorizontalBox/Padding";
import HorizontalBox from "../../common/Box/HorizontalBox";
import GreedyPadding from "../../common/Box/HorizontalBox/GreedyPadding";

import VoteSort from "../VoteSort";
import DrawerComponent from "./Drawer";

const Filter = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <HorizontalBox>
            <HPadding size={20}/>
            <VoteSort />
            <GreedyPadding />
            <IconButton onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
                <FilterListIcon />
            </IconButton>
            <MuiDrawer anchor={"right"} open={isDrawerOpen} onClose={() => setIsDrawerOpen(!isDrawerOpen)}>
                <DrawerComponent onApply={() => setIsDrawerOpen(!isDrawerOpen)}/>
            </MuiDrawer>
        </HorizontalBox>

    )
}
export default Filter;