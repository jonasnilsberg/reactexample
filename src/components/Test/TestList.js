import React from 'react';
import TestItem from './TestItem'
import TestApi from '../../api/TestApi'


class TestList extends React.Component {
    constructor(){
        super();
        this.state = {
            tests: []
        }
    }

    componentDidMount(){
        let test = TestApi.getAllTests().then(tests => {
            this.setState({
                tests: tests
            });
        });
        this.setState(test);
    }

    render() {
        const tests = this.state.tests;
        return (       
            <div>
                <h1>Testliste:</h1>
                {tests.map(test => 
                    <TestItem key={test.id} id={test.id} title={test.name}></TestItem>
                )}
                
            </div>
        );
    }
}

export default TestList;