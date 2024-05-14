import {Component} from 'react';
import {ListGroup} from 'react-bootstrap';
import Post from "../Post";

class PostCatalog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    componentDidMount = async () => {
        return this.handleContent();
    }

    handleContent = async () => {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const posts = await res.json();
            this.setState({posts: posts})
        } catch (error) {
            throw new Error()
        }
    }

    render() {
        const {posts} = this.state;
        return (
            <div className="posts">
                <ListGroup className="posts__list">
                    {posts.map((post) => {
                        return (<Post title={post.title} id={post.id} body={post.body} key={post.id}></Post>)
                    })}

                </ListGroup>
            </div>
        )
    }
}

export default PostCatalog;