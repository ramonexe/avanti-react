import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
    return <StyledContainer>{children}</StyledContainer>;
};

export default Container;