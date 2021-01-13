import React from 'react';
import Article from '../../../../model/Article';
import './PostPreview.scss';

interface IPostPreviewProps {
    article : Article
}

const PostPreview : React.FC<IPostPreviewProps> = props => {
    const image = require(`../../Article/${props.article.id}/images/hero-image.jpg`);

    return (
        <div className={`post-preview`}>
            <div className={`image`} style={{ backgroundImage: `url(${image})` }}></div>
            <div className={`title`}>
                {props.article.english.title}
            </div>
            <div className={`categories`}>
                {props.article.categories.map(t => <p>{t.description}</p>)}
            </div>
            <div className={`date`}>
                {props.article.getDateEN()}
            </div>
        </div>
    );
}

export default PostPreview;