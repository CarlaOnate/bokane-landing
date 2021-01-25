import React from 'react'
import styled from 'styled-components'
import {colors} from '../variables'


const Heading1 = styled.h1`
    color: ${props => props.color};
    font-size: 30px;
    margin: 0;
    width: 100%;
`

const Heading2 = styled.h2`
    color: ${props => props.color};
    font-size: 20px;
    margin: 0;
    width: 100%;
`

const Heading4 = styled.h4`
    color: ${props => props.color};
    font-size: 15px;
    margin: 0;
    width: 100%;
`

const Heading = ({color, type, children}) => {
    if(type === 'h1') return <Heading1 color={color}>{children}</Heading1>
    if(type === 'h2') return <Heading2 color={color}>{children}</Heading2>
    if(type === 'h4') return <Heading4 color={color}>{children}</Heading4>

    return (
        <Heading4 color={colors.default}>{children}</Heading4>
    )

}

export default Heading
