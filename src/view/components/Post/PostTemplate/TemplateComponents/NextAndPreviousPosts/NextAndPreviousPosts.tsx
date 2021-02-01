import React from 'react';
import Post from '../../../../../../model/Post';
import NextPost from '../NextPost/NextPost';
import PreviousPost from '../PreviousPost/PreviousPost';
import './NextAndPreviousPosts.scss';

interface INextAndPreviousPostsProps {
    nextPost ?: Post;
    previousPost ?: Post;
}

const NextAndPreviousPosts : React.FC<INextAndPreviousPostsProps> = props => {

    return (
        <div className={`next-and-previous-posts`}>
            <NextPost post={props.nextPost}/>
            <PreviousPost post={props.previousPost}/>
        </div>
    );
}

export default NextAndPreviousPosts;