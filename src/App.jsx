import {useCreatePostMutation} from "./store/postAPI.js";
import {useEffect} from "react";

function App() {
    // const post = useGetPostsQuery();
    // const [getPosts, postsResult] = useLazyGetPostsQuery();
    // useEffect(() => {
    //     console.log(postsResult)
    // }, [])
    //
    // const getPostsRequest = () => {
    //     getPosts();
    // }

    // const post1 = useGetPostByIdQuery(20)

    const [createPost, {isLoading}] = useCreatePostMutation();

    useEffect(() => {
        setTimeout(() => {
            createPost();
        }, 1000)
    }, [])
    return (
        <>
            <div>Hello World {isLoading + ''}</div>

            {/*<button onClick={getPostsRequest}>Get Request</button>*/}
        </>
    )

}

export default App
