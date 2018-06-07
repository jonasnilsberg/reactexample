import React from 'react';
import Task from '../Task/Task'

class TestView extends React.Component {

    componentDidMount(){
        console.log(this.props.taskid);
    }

    render() {
        const tasks = [{'name': 'Oppgave 1', 'widgets': 2}, {'name': 'Oppgave 2', 'widgets': 4}, {'name': 'Oppgave 3', 'widgets': 1}, {'name': 'Oppgave 4', 'widgets': 6}];
        const tasknr = this.props.tasknr;
        console.log(this.props.taskid);
        return (       
            <div>
                <h1>Testviewer</h1>
                <Task key="{tasks[tasknr].name}" name={tasks[tasknr].name} widgets={tasks[tasknr].widgets}></Task>
            </div>
        );
    }
}

export default TestView;
