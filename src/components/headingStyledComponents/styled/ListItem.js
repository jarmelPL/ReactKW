import React from 'react'
import styled from 'styled-components'

const ListItem = styled.li`
    cursor: pointer;
    text-decoration: underline;
    background-color: ${item => item.active ? "red" : "silver"};
    display: inline;
    margin-left: 10px;
    
    &:hover {
        text-decoration: none;
        background-color: black;
        color: white;
    }
`;

export const BorderListItem = styled(ListItem)`
    border: 2px solid black;
`

export default ListItem