import MarkdownEditor from "./components/MarkdownEditor";
import React from "react";

class App extends React.Component {

    render() {
        return (
            <>
                <MarkdownEditor onContentChange={console.log}/>
            </>
        )
    }

}

export default App
