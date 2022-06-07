import React from 'react';
import { NavBar } from '../../components/navbar/NavBar';
import { Container, Title} from './styles'

export const Home = () => {
    return(
        <Container>
            <NavBar />
            <Title>Bem vindo</Title>
        </Container>
    )
};