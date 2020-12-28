import React from "react";
import styled from "styled-components";


const Box = styled.div`
    height: ${props => {
    if (!props.height) {
        return '100%';
    } else if (typeof props.height === 'number') {
        return `${props.height} px`;
    } else {
        return props.height !== "none" ? props.height : null;
    }
}};
    width: ${props => {
        console.log('width: ', props.width);
    if (!props.width) {
        return '100%';
    } else if (typeof props.width === 'number') {
        return `${props.width} px`;
    } else {
        return props.width !== "none" ? props.width : null;
    }
}};
}};
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default Box;