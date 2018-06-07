import Header from '../components/Nav/Header'
import Footer from '../components/Nav/Footer'
import React from 'react';
import TestView from '../components/Test/TestView'


class TestPage extends React.Component {
    constructor(){
        super();
        this.state = {
            tasknr: 0,
            taskIDs: []
        }

    }

    componentDidMount(){
        this.setState({
            taskIDs: ['1', '2']
        });
    }

    handleTaskChange(change){
        if(this.state.tasknr+1 <= 1 && change === -1){
            return null;
        }
        this.setState((prevState, props) => {
            let tasknr = prevState.tasknr + change;
            return {tasknr: tasknr};            
        })
    }

    render() {
        const testtitle = this.props.match.params.testtitle;
        let title = `Oppgave ${this.state.tasknr + 1}`
        return (       
            <div>
                <Header title={title} spacing="0" size="12"></Header>
                <TestView tasknr={this.state.tasknr} taskid={this.state.taskIDs[this.state.tasknr]}></TestView>
                <Footer changeTask={this.handleTaskChange.bind(this)}></Footer>
            </div>
        );
    }
}

export default TestPage;
