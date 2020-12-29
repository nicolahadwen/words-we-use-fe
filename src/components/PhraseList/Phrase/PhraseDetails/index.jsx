import React from "react";
import VerticalBox from "../../../../common/Box/VerticalBox";
import Map from "./Map";
import Padding from "../../../../common/Box/VerticalBox/Padding";
import LocationsBreakdown from "./LocationsBreakdown";

const PhraseDetails = () => {
    return (
        <VerticalBox>
            <Map />
            <Padding size={20}/>
            <LocationsBreakdown />
        </VerticalBox>
    )
}


export default PhraseDetails;