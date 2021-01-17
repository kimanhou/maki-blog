import React from 'react';
import { useParams } from 'react-router';
import PostPage from './PostPage';
import Footer from '../Footer/Footer';
import Post from '../../../model/Post';

const PostRoot : React.FC = props => {
    let { postId } = useParams<{postId ?: string}>();
    var foundpost = Post.getAllPosts().find(t => t.id.toString() == postId);
    const post = foundpost == undefined ? Post.ONE : foundpost;

    return(
        <>
            <PostPage post={post} />
            <Footer />
        </>
    );
}

export default PostRoot;