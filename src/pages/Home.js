import React from 'react';
import styled from 'styled-components'
import {colors} from '../variables'

import Text from '../atoms/Text'
import Heading from '../atoms/Heading'
import Image from "../atoms/Image";
import Button from "../atoms/Button";

import sunsetFake from '../assets/fake_2.JPG'


const Section1 = styled.section`
    margin-top: 30px;    
    display: flex;
    flex-direction: column;
    align-items: center;
    div {
        margin: 15px;
    }
    div:first-child {
        margin: 0;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 40vw;
        height: 80px;
        h1 {
            font-weight: 900;
            position: absolute;
            top: 0;
            left: 0;
            color: rgba(37, 153, 141, 1);
        }
        h2 {
            z-index: 2;
            font-family: 'Lovers Quarrel', cursive;
            font-size: 50px;
            font-weight: 100;
            text-align: right;
            position: absolute;
            left: 5%;
            bottom: 5%;
            right: 0;
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
            width: 60vw;
        }
        div:nth-child(2) {
            width: 70vw;
        }
        div:nth-child(3) {
            width: 60vw;
            flex-direction: column;
            align-items: center;
            button {
                padding: 10px 15px 10px 15px;
            }
        }
    }
`


const Home = () => {
    return (
        <div>
            <Section1>
                <div>
                    <Heading color={colors.default} type='h1'>Ecotourism</Heading>
                    <Heading color={colors.default} type='h2'>as never before</Heading>
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
        </div>
    );
};

export default Home
