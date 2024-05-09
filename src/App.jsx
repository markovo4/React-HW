import MyForm from "./components/MyForm";
import {Container} from 'react-bootstrap';
import DataTable from "./components/DataTable/index.js";
import {Component} from "react";
import {cloneDeep} from "lodash";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            showTable: false
        }
    }

    onSubmitHandler = (formData) => {
        const previousData = cloneDeep(formData);
        this.setState({data: previousData, showTable: true});
    }

    handleClick = (e) => {
        this.setState({showTable: false});
    }


    render() {
        const {data, showTable} = this.state;
        return (
            <>
                <Container>
                    {!showTable && <MyForm onSubmit={this.onSubmitHandler} form={data}/>}
                    {showTable && <DataTable data={data} onClickBack={this.handleClick}/>}
                </Container>
            </>
        )
    }


}

export default App
