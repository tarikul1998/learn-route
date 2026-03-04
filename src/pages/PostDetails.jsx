import { useEffect, useState } from "react";
import { useParams } from "react-router";

const PostDetails = () => {
    const { postId } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])

    return (
        <div>
            <h1>PostDetails of {post?.id}</h1>
            <hr />
            <h4>Post Title - {post?.title}</h4>
            <h4>Post Details - {post?.body}</h4>
        </div>
    );
};

export default PostDetails;