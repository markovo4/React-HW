import {Component, Fragment} from 'react';
import {Button, Form} from 'react-bootstrap';
import TodoItem from "../TodoItem/index.js";
import {cloneDeep} from 'lodash';

class TodoBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            notes: []
        };
    }

    handleDelete = (index) => () => {
        this.setState(prevState => ({
            notes: prevState.notes.filter((item, i) => i !== index)
        }));
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const prevState = cloneDeep(this.state);

        if (this.state.value.trim() === '') return;
        
        this.setState({
            value: '',
            notes: [prevState.value, ...prevState.notes]
        });
    };

    handleChange = (e) => {
        this.setState({value: e.target.value});
    };

    render() {
        const {value, notes} = this.state;
        return (
            <Fragment>
                <div className={'mb-3'}>
                    <Form className={'d-flex'} onSubmit={this.handleSubmit}>
                        <div className={'me-3'}>
                            <Form.Control
                                type={'text'}
                                value={value}
                                className={'form-control'}
                                placeholder={'I am going...'}
                                onChange={this.handleChange}
                            />
                        </div>
                        <Button type={'submit'} className={'btn btn-primary'}>Add</Button>
                    </Form>
                </div>
                {notes.map((item, index) => (
                    <TodoItem key={index} task={item} id={index} onRemove={this.handleDelete(index)}/>
                ))}
            </Fragment>
        );
    }
}

export default TodoBox;
