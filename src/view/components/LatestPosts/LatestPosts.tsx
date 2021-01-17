import React from 'react';
import Post from '../../../model/Post';
import SectionHeader from '../SectionHeader/SectionHeader';
import './LatestPosts.scss';
import PostPreview from '../PostPreview/PostPreview';
import FadeIn from '../FadeIn/FadeIn';

interface ILatestPostsProps {

}

const LatestPosts : React.FC<ILatestPostsProps> = props => {
    const posts = Post.getLatestposts(3);

    return (
        <div className={`latest-posts`}>
            <FadeIn noDelay>
                <div className={`main-wrapper`}>
                    <div className={`title`}>
                        <SectionHeader englishTitle='Latest' englishSubtitle='on the blog' frenchTitle='Les derniers articles' frenchSubtitle='sur le blog' />
                    </div>
                    <div className={`posts`}>
                        {posts.map(t => <PostPreview post={t}/>)}
                    </div>
                </div>
            </FadeIn>
        </div>
    );
}

export default LatestPosts;