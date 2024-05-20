import {Card, ListGroup} from 'react-bootstrap';
import PropTypes from "prop-types";


const Post = ({title, body, id}) => {
    return (
        <ListGroup.Item className="posts_single-post" data-post-id={id}>
            <Card.Title className="posts__post-title">{title}</Card.Title>
            <Card.Subtitle className="posts__post-description">{body}</Card.Subtitle>
        </ListGroup.Item>
    )
}

Post.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
}

export default Post;