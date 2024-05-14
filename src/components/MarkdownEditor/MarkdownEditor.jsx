import React from "react";
import {Editor} from "@toast-ui/editor";
import PropTypes from "prop-types";

class MarkdownEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: ''
        }
        this.editorRef = React.createRef();
    }

    componentDidMount() {
        this.initEditor();
    }

    initEditor = () => {
        const {onContentChange} = this.props;

        this.editor = new Editor({
            el: this.editorRef.current,
            hideModeSwitch: true,
            height: '500px',
            events: {
                change: () => {
                    const content = this.editor.getMarkdown()
                    onContentChange(content)
                }
            }
        })
    }

    render() {
        return (<div ref={this.editorRef}></div>)
    }
}

MarkdownEditor.propTypes = {
    onContentChange: PropTypes.func.isRequired,
}
export default MarkdownEditor;