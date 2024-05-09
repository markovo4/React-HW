import {Component, Fragment} from 'react';
import {Button, Table} from 'react-bootstrap';
import PropTypes from "prop-types";


class DataTable extends Component {

    constructor(props) {
        super(props);
    }


    render() {

        const {data, onClickBack} = this.props;
        return (
            <Fragment>
                <Table striped bordered hover variant={'light'}>
                    <tbody>
                    {Object.keys(data).map((item, i) => {
                        return (
                            <tr key={i}>
                                <td>{item}</td>
                                <td>{data[item]}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </Table>

                <Button onClick={onClickBack}>Go Back</Button>
            </Fragment>
        )
    }
}

DataTable.propTypes = {
    data: PropTypes.object.isRequired,
    onClickBack: PropTypes.func.isRequired
}

export default DataTable;