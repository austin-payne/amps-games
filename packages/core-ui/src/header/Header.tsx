import React from 'react';
import styled from 'styled-components';
import Nav from 'rsuite/Nav';
import Navbar from 'rsuite/Navbar';
import { Icon } from '@rsuite/icons';
import { FaHome } from 'react-icons/fa';

const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.primary};
`;

export const Header: React.FC = () => (
    <Navbar>
        <Navbar.Brand>Amps Games</Navbar.Brand>
        <Nav>
            {/* @ts-ignore */}
            <Nav.Item icon={<Icon as={FaHome} />}>Home</Nav.Item>
        </Nav>
    </Navbar>
);
