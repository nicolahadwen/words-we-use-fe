import styled from "styled-components";

const Padding = styled.div`
    height: 100%;
    width: ${props => typeof props.size === 'number' ? `${props.size}px` : props.size};
`;

export default Padding;