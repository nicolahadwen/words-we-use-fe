import React from "react";
import VerticalBox from "../../common/Box/VerticalBox";
import AppBar from "./AppBar";

const AppContainer = ({
    children
}) => {
    return (
        <VerticalBox>
            <AppBar />
            { children }
        </VerticalBox>
    )
}

export default AppContainer;