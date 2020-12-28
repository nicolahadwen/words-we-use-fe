import styled from "styled-components";

const Padding = styled.div`
    width: 100%;
    height: ${props => typeof props.size === 'number' ? `${props.size}px` : props.size};
`;

export default Padding;