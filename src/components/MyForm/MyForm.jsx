import {Component} from 'react';
import {Button, Form} from 'react-bootstrap';
import {cloneDeep} from "lodash";
import Input from "../UI/Input/index.js";
import PropTypes from "prop-types";

const formDefaultState = {
    email: '',
    password: '',
    address: '',
    city: '',
    country: '',
    rules: 'off'
}

const fields = [
    {
        label: 'Email address',
        type: 'email',
        name: 'email',
    },
    {
        label: 'Password',
        type: 'password',
        name: 'password',
    },
    {
        label: 'City',
        type: 'text',
        name: 'city',
    },
]

class MyForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formData: props.formData ? props.formData : {...formDefaultState}
        }
    }

    handleChange = (e) => {
        const previousData = cloneDeep(this.state.formData)

        if (e.target.name === 'rules' && previousData[e.target.name] === 'on') {
            previousData[e.target.name] = 'off';
        } else if (e.target.name === 'rules' && previousData[e.target.name] === 'off') {
            previousData[e.target.name] = 'on';
        } else {
            previousData[e.target.name] = e.target.value
        }

        this.setState({formData: previousData})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.formData)
        this.setState({formData: {...formDefaultState}})
    }

    render() {

        const {address} = this.state.formData;

        return (

            <Form onSubmit={this.handleSubmit}>
                <h4 className={`text-center`}>Form</h4>
                {fields.map((item, i) => {
                    const value = this.state.formData[item.name];
                    return <Input
                        key={i}
                        label={item.label}
                        placeholder={item.label}
                        type={item.type}
                        name={item.name}
                        value={value}
                        onChange={this.handleChange}
                    />
                })}

                <Input
                    label={'Address'}
                    type={'text'}
                    name={'address'}
                    value={address}
                    onChange={this.handleChange}
                    as={'textarea'}
                />

                <Form.Label>Country</Form.Label>
                <Form.Select
                    className={'mb-3'}
                    aria-label={'Country'}
                    name={'country'}
                    onChange={this.handleChange}
                >
                    <option value=''>Choose</option>
                    <option value="Argentina">Argentina</option>
                    <option value="Ukraine">Ukraine</option>
                    <option value="China">China</option>
                </Form.Select>

                <Form.Check
                    className={'mb-3'}
                    type={'switch'}
                    label={'I have read Terms & Conditions'}
                    id={'disabled-custom-switch'}
                    name={'rules'}
                    onClick={this.handleChange}
                />

                <Button type='submit'>Submit Form</Button>
            </Form>
        )
    }
}

MyForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    formData: PropTypes.object
}

export default MyForm;