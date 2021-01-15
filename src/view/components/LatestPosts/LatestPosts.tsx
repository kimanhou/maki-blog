import React from 'react';
import Article from '../../../model/Article';
import SectionHeader from '../SectionHeader/SectionHeader';
import './LatestPosts.scss';
import PostPreview from '../PostPreview/PostPreview';

interface ILatestPostsProps {

}

const LatestPosts : React.FC<ILatestPostsProps> = props => {
    const posts = Article.getLatestArticles(3);

    return (
        <div className={`latest-posts`}>
            <div className={`main-wrapper`}>
                <div className={`title`}>
                    <SectionHeader englishTitle='Latest' englishSubtitle='on the blog' frenchTitle='Les derniers articles' frenchSubtitle='sur le blog' />
                </div>
                <div className={`posts`}>
                    {posts.map(t => <PostPreview article={t}/>)}
                </div>
            </div>
        </div>
    );
}

export default LatestPosts;