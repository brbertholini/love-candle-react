import { CartIcon, BoxIcon, Container, Navigation, LeafIcon, ClientsIcon, IconArea } from "./styles.js"
import LOVECANDLEcenter from '../../assets/images/LOVECANDLEcenter.svg';
import React, { useState } from "react";

export function Sidebar({ activeIcon, setActiveIcon }) {

    const handleIconClick = (icon) => {
        setActiveIcon(icon);
    };

    return(
        <Container>
            <img href="/" src={LOVECANDLEcenter} alt="Logo" />
            <Navigation>
                <IconArea onClick={() => handleIconClick('orders')}>
                <CartIcon />
                </IconArea>
                <IconArea onClick={() => handleIconClick('products')}>
                <BoxIcon />
                </IconArea>
                <IconArea onClick={() => handleIconClick('materials')}>
                <LeafIcon />
                </IconArea>
                <IconArea onClick={() => handleIconClick('clients')}>
                <ClientsIcon />
                </IconArea>
            </Navigation>
        </Container>
    )
}