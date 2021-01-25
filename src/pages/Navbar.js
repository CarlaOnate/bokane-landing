import React from 'react';
import styled from 'styled-components'
import {colors} from '../variables'

import Text from '../atoms/Text'

import sunset from '../assets/sunset_navbar.jpg'
import logo from '../assets/logo_FAKE.png'

const Nav = styled.div`
    position: relative;
    height: 300px;
    background-image: url(${sunset});
    background-size: cover;
    background-position: 0% 40%;
    
    display: grid;
    grid-template-columns: 10vw repeat(2, 40vw) 10vw;
    grid-template-rows: auto;
    grid-template-areas: '. logo menu .';
    
    // &::before {    
    //   content: "";
    //   background-image: url(${sunset});
    //   background-size: cover;
    //   background-position: 0% 40%;
    //   position: absolute;
    //   top: 0px;
    //   right: 0px;
    //   bottom: 0px;
    //   left: 0px;
    //   opacity: 0.8;
    // }
`

const Logo = styled.div`
    grid-area: logo;
    width: 100px;
    height: 100px;
    justify-self: start;
    background: url(${logo}) no-repeat;
    margin: 20px;
`

const Menu = styled.div`
    grid-area: menu;
    justify-self: end;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 20px;
`

const Navbar = () => {
    return (
        <Nav>
            <Logo />
            <Menu>
                <Text color={colors.white}>Book</Text>
                <Text color={colors.white}>Leisure Travelling</Text>
                <Text color={colors.white}>Work from Bokané</Text>
                <Text color={colors.white}>Activities</Text>
            </Menu>
        </Nav>
    );
}

export default Navbar;
