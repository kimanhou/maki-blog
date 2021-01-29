import React from 'react';
import Post from '../../../../../../model/Post';
import Text from '../../../../../../model/Text';
import FadeIn from '../../../../FadeIn/FadeIn';
import PostPreview from '../../../../PostPreview/PostPreview';
import SectionHeader from '../../../../SectionHeader/SectionHeader';
import './PreviousPost.scss';

interface IPreviousPostProps {
    post ?: Post;
}

const PreviousPost : React.FC<IPreviousPostProps> = props => {

    return (
        <div className={`previous-post`}>
            {props.post != null && 
                <FadeIn noDelay>
                    <div className={`title`}>
                        <SectionHeader title={new Text('Previous', "Lire l'article")} subtitle={new Text('post', 'précédent')} />
                    </div>
                    <PostPreview post={props.post}/>
                </FadeIn>
            }
        </div>
    );
}

export default PreviousPost;