import React from 'react';
import styled from 'styled-components'
import {colors} from '../variables'
import Text from '../atoms/Text'

const HomeContainer = styled.div`

`

const Home = () => {
    return (
        <>
        <HomeContainer>
            <Text color={colors.default}>I am Home</Text>
        </HomeContainer>
        </>
    );
};

export default Home
