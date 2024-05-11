import React from 'react';
import Modal from "./Modal.jsx";

class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
        }
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal,
        });
    }

    render() {
        return (
            <div>
                <button type="button" className="modal-open-button btn btn-danger" onClick={this.toggle}>Open</button>
                <Modal isOpen={this.state.modal}>
                    <Modal.Header toggle={this.toggle}>Modal Window</Modal.Header>
                    <Modal.Body>
                        This is the modal window that was created by react components
                    </Modal.Body>
                    <Modal.Footer>
                        <button type="button" className="modal-close-button btn btn-secondary"
                                onClick={this.toggle}>Cancel
                        </button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default Component;