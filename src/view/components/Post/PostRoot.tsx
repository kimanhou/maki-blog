import React from 'react';
import { useParams } from 'react-router';
import PostPage from './PostPage';
import ArticleModel from '../../../model/Post';
import Footer from '../Footer/Footer';

const PostRoot : React.FC = props => {
    let { postId } = useParams<{postId ?: string}>();
    var foundArticle = ArticleModel.getAllPosts().find(t => t.id.toString() == postId);
    const article = foundArticle == undefined ? ArticleModel.ONE : foundArticle;

    return(
        <>
            <PostPage article={article} />
            <Footer />
        </>
    );
}

export default PostRoot;