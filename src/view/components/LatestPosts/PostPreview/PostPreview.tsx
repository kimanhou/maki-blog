import React from 'react';
import Article from '../../../../model/Article';
import ZigZag from '../../ZigZag/ZigZag';
import './PostPreview.scss';

interface IPostPreviewProps {
    article : Article
}

const PostPreview : React.FC<IPostPreviewProps> = props => {
    const image = require(`../../Article/${props.article.id}/images/hero-image.jpg`);

    return (
        <div className={`post-preview`}>
            <div className={`image`}>
                <img src={image} />
            </div>
            <div className={`text`}>
                <div className={`date`}>
                    {props.article.getDateEN()}
                </div>
                <div className={`title`}>
                    {props.article.english.title}
                </div>
                <div className={`categories`}>
                    {props.article.getCategories()}
                </div>
                <ZigZag />
            </div>
        </div>
    );
}

export default PostPreview;