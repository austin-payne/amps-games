import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.primary};
`;

export const Header: React.FC = () => <Container>Amps Games</Container>;
