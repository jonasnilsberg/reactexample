import React from 'react';
import Widget from './Widget'

class Task extends React.Component {
    render() {
        const taskname = this.props.name;
        const widgets = ['1', '2', '3'];
        return (
            <div id={taskname}>
                <h2>{taskname}</h2>
                {widgets.map(widget =>
                    <Widget id={widget}></Widget>
                )}
            </div>
        );
    }
}

export default Task;