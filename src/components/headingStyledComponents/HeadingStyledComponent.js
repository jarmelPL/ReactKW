import React from 'react'
import ListItem from './styled/ListItem'
import {BorderListItem} from './styled/ListItem'

class HeadingStyledComponent extends React.Component {
    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <ListItem>Home</ListItem>
                        <ListItem active>Articles</ListItem>
                        <ListItem>About</ListItem>
                        <BorderListItem>Last</BorderListItem>
                    </ul>
                </nav>
            </div>
        )
    }
}


export default HeadingStyledComponent