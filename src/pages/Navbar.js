import React from 'react';
import styled from 'styled-components'
import {colors} from '../variables'

import Image from '../atoms/Image'
import Text from '../atoms/Text'

import sunset from '../assets/sunset_navbar.jpg'
import logo from '../assets/logo_FAKE.png'

const Nav = styled.div`
    position: relative;
    height: 40vh;
    background-image: url(${sunset});
    background-size: cover;
    background-position: 0% 40%;
    
    display: grid;
    grid-template-columns: 10vw repeat(2, 40vw) 10vw;
    grid-template-rows: auto;
    grid-template-areas: '. logo menu .';
    
    @media (max-width: 600px) {
        height: 60vh;
        grid-template-columns: auto;
        grid-template-rows: 10vw repeat(2, 40vw) 10vw;
        grid-template-areas: '.'
                             'logo'
                             'menu'
                             '.';
    }
`

const Logo = styled.div`
    grid-area: logo;
    justify-self: start;
    margin-top: 20px;
    img {
        height: 130px;
    }
    @media (max-width: 600px) {
        margin: 0;
       align-self: start;
       justify-self: center;
    }
`

const Menu = styled.div`
    grid-area: menu;
    justify-self: end;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    margin: 20px;
    p {
        margin: 5px;
    }
    
    @media (max-width: 600px) {
        margin: 0;
       align-self: end;
       justify-self: center;       
       align-items: center;
       p {
          text-align: center;
          font-weight: bold;
       }
    }
`

const Navbar = () => {
    return (
        <Nav>
            <Logo>
                <Image src={`${logo}`}/>
            </Logo>
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
