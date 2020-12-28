import styled from "styled-components";

const HorizontalBox = styled.div`
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
    if (!props.width) {
        return '100%';
    } else if (typeof props.width === 'number') {
        return `${props.width} px`;
    } else {
        return props.width !== "none" ? props.height : null;
    }
}};
    display: flex;
    flex-direction: row;
`;

export default HorizontalBox;