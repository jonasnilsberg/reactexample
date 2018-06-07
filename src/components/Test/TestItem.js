import React from 'react';
import { Link } from 'react-router-dom';


class TestItem extends React.Component {
    render() {
        const title = this.props.title;  
        const id = this.props.id;    
        return (
            <h4 key={id}>
                <Link to={`/test/${title}`}>
                    {title}
                </Link>
            </h4>
        );
    }
}

export default TestItem;