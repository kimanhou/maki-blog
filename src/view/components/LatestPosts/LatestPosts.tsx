import React from 'react';
import Post from '../../../model/Post';
import SectionHeader from '../SectionHeader/SectionHeader';
import './LatestPosts.scss';
import PostPreview from '../PostPreview/PostPreview';
import FadeIn from '../FadeIn/FadeIn';
import Text from '../../../model/Text';

const LatestPosts : React.FC = props => {
    const posts = Post.getLatestposts(3);

    return (
        <section className={`latest-posts`}>
            <FadeIn noDelay>
                <div className={`main-wrapper`}>
                    <div className={`title`}>
                        <SectionHeader title={new Text('Latest', 'Les nouveautés')} subtitle={new Text('on the blog', 'sur le blog')} />
                    </div>
                    <div className={`posts`}>
                        {posts.map(t => <PostPreview post={t}/>)}
                    </div>
                </div>
            </FadeIn>
        </section>
    );
}

export default LatestPosts;