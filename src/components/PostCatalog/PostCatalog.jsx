import {useEffect, useState} from "react";
import {Container, ListGroup} from "react-bootstrap";
import Post from "../Post";

const PostCatalog = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        loadPosts();
    })
    const loadPosts = async function () {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const posts = await res.json();
            setPosts(posts)
        } catch (e) {
            throw new Error(`Unsuccessful fetching of posts: ${e}`)
        }
    }

    return (
        <Container className="posts">
            <ListGroup className="posts__list">
                {posts.map((post, index) => {
                    return (
                        <Post
                            key={index}
                            id={index}
                            title={post.title}
                            body={post.body}/>
                    )
                })}
            </ListGroup>
        </Container>
    )

}

export default PostCatalog;