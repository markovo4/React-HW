import React, {Component} from 'react';
import Log from "../Log/index.js";
import {Button} from 'react-bootstrap';

class LogList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            components: []
        };
    }

    handleClick = (e) => {
        this.setState(prevState => {
            const newValue = e.target.name === 'plus' ? prevState.value + 1 : prevState.value - 1;
            return {
                value: newValue,
                components: [newValue, ...prevState.components]
            };
        });
    };

    handleDeleteComponent = (id) => {
        this.setState(prevState => ({
            components: prevState.components.filter((item, index) => index !== id)
        }))
    }


    render() {
        const {components} = this.state;
        return (
            <div>
                <div className="btn-group font-monospace" role="group">
                    <Button
                        name={'plus'}
                        variant="outline-success"
                        onClick={this.handleClick}>
                        +
                    </Button>
                    <Button
                        name={'minus'}
                        variant="outline-danger"
                        onClick={this.handleClick}>
                        -
                    </Button>
                </div>
                <div className="list-group">
                    {components.map((value, i) => (
                        <Log
                            data={value}
                            key={i}
                            id={i}
                            components={components}
                            onDelete={this.handleDeleteComponent}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default LogList;
