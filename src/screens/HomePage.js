import React from 'react';
import TestList from '../components/Test/TestList'


class HomePage extends React.Component {
    render() {
        return (       
            <div>
                <h1>Dette er forsiden</h1>
                <TestList></TestList>
            </div>
        );
    }
}

export default HomePage;
