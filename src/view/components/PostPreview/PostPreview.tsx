import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Post from '../../../model/Post';
import BackgroundOnHover from '../BackgroundOnHover/BackgroundOnHover';
import { LocalValueContext } from '../LocalisationContext/LocalContext';
import Text from '../LocalisationContext/Text';
import ZigZag from '../ZigZag/ZigZag';
import './PostPreview.scss';

interface IPostPreviewProps {
    post : Post;
}

const PostPreview : React.FC<IPostPreviewProps> = props => {
    const image = !props.post.isHeroVideo ? require(`../Post/${props.post.id}/images/hero-image.jpg`) : undefined;
    const video = props.post.isHeroVideo ? require(`../Post/${props.post.id}/images/hero-video.mp4`) : undefined;

    var localisation = useContext(LocalValueContext);

    return (
        <Link className={`post-preview`} to={props.post.getLink()} replace>
            <div className={`image`}>
                <div className={`hover-shadow`}></div>
                <div className={`read-more`}>
                    <Text english='Read more' french="Lire l'article" />
                    <BackgroundOnHover className={`read-more-background`} />
                </div>
                {!props.post.isHeroVideo && <img src={image} />}
                {props.post.isHeroVideo && <video width="100%" autoPlay playsInline loop muted>
                        <source src={video} type="video/mp4" />
                    </video>}
            </div>
            <div className={`text`}>
                <div className={`date`}>
                    {props.post.getDateFormat(localisation)}
                </div>
                <div className={`title`}>
                    {props.post.getTitle(localisation)}
                </div>
                <div className={`categories`}>
                    {props.post.getCategories(localisation)}
                </div>
                <ZigZag />
            </div>
        </Link>
    );
}

export default PostPreview;