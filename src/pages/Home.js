import React from 'react';
import styled from 'styled-components'
import {colors} from '../variables'

import Text from '../atoms/Text'
import Heading from '../atoms/Heading'
import Image from "../atoms/Image";
import Button from "../atoms/Button";

import sunsetFake from '../assets/fake_2.JPG'

const HomeContainer = styled.div`

`

const Section1 = styled.section`
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    div {
        margin: 20px;
    }
    div:first-child {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 30vw;
        h2 {
            text-align: right;
        }
    }
    div:nth-child(2) {
        width: 60vw;
        p {
            text-align: center;
        }
    }
    div:nth-child(3) {
        width: 40vw;
        display: flex;
        flex-direction: row;
        justify-content: center;
        p {
            margin: 10px;
        }
    }
    div:nth-child(4) {
        width: 100vw;
        img {
            width: 100%;
        }
    }
    
    @media (max-width: 600px) {
        div:first-child {
            width: 50vw;
        }
        div:nth-child(2) {
            width: 60vw;
        }
        div:nth-child(3) {
            width: 60vw;
            flex-direction: column;
            align-items: center;
        }
    }
`


const Home = () => {
    return (
        <>
        <HomeContainer>
            <Section1>
                <div>
                    <Heading color={colors.default} type='h1'>Ecotourism</Heading>
                    <Heading color={colors.default} type='h2'>As never before</Heading>
                </div>
                <div>
                    <Text>Experience this amazing land in the south of Chiapas, México.</Text>
                    <Text>You can camp, stay at one of our cabins or even book for a work-from-home cabin for a long stay in paradise.</Text>
                </div>
                <div>
                    <Button>Book</Button>
                    <Text>or scroll to know more</Text>
                </div>
                <div>
                    <Image src={`${sunsetFake}`}/>
                </div>
            </Section1>
        </HomeContainer>
        </>
    );
};

export default Home
