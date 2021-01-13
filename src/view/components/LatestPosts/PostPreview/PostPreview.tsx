import React from 'react';
import { Link } from 'react-router-dom';
import Article from '../../../../model/Article';
import ZigZag from '../../ZigZag/ZigZag';
import './PostPreview.scss';

interface IPostPreviewProps {
    article : Article
}

const PostPreview : React.FC<IPostPreviewProps> = props => {
    const image = require(`../../Article/${props.article.id}/images/hero-image.jpg`);

    return (
        <Link className={`post-preview`} to={`posts/${props.article.id}`}>
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
        </Link>
    );
}

export default PostPreview;