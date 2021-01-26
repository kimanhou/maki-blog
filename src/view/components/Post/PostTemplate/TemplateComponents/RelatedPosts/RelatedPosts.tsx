import React from 'react';
import Post from '../../../../../../model/Post';
import Text from '../../../../../../model/Text';
import FadeIn from '../../../../FadeIn/FadeIn';
import PostPreview from '../../../../PostPreview/PostPreview';
import SectionHeader from '../../../../SectionHeader/SectionHeader';
import './RelatedPosts.scss';

interface IRelatedPostsProps {
    relatedPosts : Post[];
}

const RelatedPosts : React.FC<IRelatedPostsProps> = props => {

    return (
        <div className={`related-posts`}>
            {props.relatedPosts.length > 0 && 
                <FadeIn noDelay>
                    <div className={`title`}>
                        <SectionHeader title={new Text('Related posts', 'En lien')} subtitle={new Text('', 'avec cet article')} />
                    </div>
                    <div className={`posts`}>
                        {props.relatedPosts.map(t => <PostPreview post={t}/>)}
                    </div>
                </FadeIn>
            }
        </div>
    );
}

export default RelatedPosts;