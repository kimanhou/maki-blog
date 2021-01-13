import React from 'react';
import ArticleModel from '../../../model/Article';
import Article from '../Article/Article';
import './LatestPosts.scss';
import PostPreview from './PostPreview/PostPreview';

interface ILatestPostsProps {

}

const LatestPosts : React.FC<ILatestPostsProps> = props => {
    const posts = ArticleModel.getLatestArticles(3);

    return (
        <div className={`latest-posts`}>
            <div className={`main-wrapper`}>
                <div className={`title`}>
                    Latest on the blog
                </div>
                <div className={`posts`}>
                    {posts.map(t => <PostPreview article={t}/>)}
                </div>
            </div>
        </div>
    );
}

export default LatestPosts;