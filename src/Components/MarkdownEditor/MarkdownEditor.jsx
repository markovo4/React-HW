import {useEffect, useRef} from 'react';
import {Editor} from "@toast-ui/editor";
import PropTypes from "prop-types";

const MarkdownEditor = ({onChange}) => {
    const editorRef = useRef(null)

    useEffect(() => {
        const editor = new Editor({
            el: editorRef.current,
            hideModeSwitch: true,
            initialValue: ' ',
            events: {
                change() {
                    const newContent = editor.getMarkdown();
                    onChange(newContent);
                }
            }
        })
    })

    return (
        <div ref={editorRef}></div>
    )
}

MarkdownEditor.propTypes = {
    onChange: PropTypes.func.isRequired
}

export default MarkdownEditor;