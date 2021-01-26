import React from 'react'
import styled from 'styled-components'
import {colors} from '../variables'

const TextComponent = styled.p`
    margin: 0;
    padding: 0;
    font-size: 15px;
    color: ${props => props.color ? props.color : colors.default};
`

const Text = ({color, children}) => {

    return (
        <TextComponent color={color}>
            {children}
        </TextComponent>
    )
}

export default Text
