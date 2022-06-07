import React from "react";

import { Nav, UL, List } from "./navBar-styles"

export const NavBar = () => {
    return (
        <Nav>
            <UL>
                <List>Home</List>
                <List>Sobre</List>
                <List>Login</List>
                <List>Cadastro</List>
            </UL>
        </Nav>
    )
}