import React from 'react';
import { useParams } from 'react-router';
import PostPage from './PostPage';
import postModel from '../../../model/Post';
import Footer from '../Footer/Footer';

const PostRoot : React.FC = props => {
    let { postId } = useParams<{postId ?: string}>();
    var foundpost = postModel.getAllPosts().find(t => t.id.toString() == postId);
    const post = foundpost == undefined ? postModel.ONE : foundpost;

    return(
        <>
            <PostPage post={post} />
            <Footer />
        </>
    );
}

export default PostRoot;