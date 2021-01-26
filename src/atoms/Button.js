import React from 'react';
import styled from 'styled-components'
import {colors} from '../variables'

const ButtonAtom = styled.button`
    border-radius: 10px;
    background-color: rgba(45, 45, 45, 1);
    border: none;
    color: ${colors.white};
    padding: 5px 15px 5px 15px;
    &:hover {
        cursor: pointer;
    }
`


const Button = ({onClick, children})  => {
    return (
        <ButtonAtom onClick={onClick}>
            {children}
        </ButtonAtom>
    );
}

export default Button;
