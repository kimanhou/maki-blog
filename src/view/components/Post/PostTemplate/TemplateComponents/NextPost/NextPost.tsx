import React from 'react';
import Post from '../../../../../../model/Post';
import Text from '../../../../../../model/Text';
import FadeIn from '../../../../FadeIn/FadeIn';
import PostPreview from '../../../../PostPreview/PostPreview';
import SectionHeader from '../../../../SectionHeader/SectionHeader';
import './NextPost.scss';

interface INextPostProps {
    post ?: Post;
}

const NextPost : React.FC<INextPostProps> = props => {

    return (
        <div className={`next-post`}>
            {props.post != null && 
                <FadeIn noDelay>
                    <div className={`title`}>
                        <SectionHeader title={new Text('Next', "Lire l'article")} subtitle={new Text('post', 'suivant')} />
                    </div>
                    <PostPreview post={props.post}/>
                </FadeIn>
            }
        </div>
    );
}

export default NextPost;