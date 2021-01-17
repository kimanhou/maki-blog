import React, { useContext } from 'react';
import Category from '../../../model/Category';
import BackgroundOnHover from '../BackgroundOnHover/BackgroundOnHover';
import { LocalValueContext } from '../LocalisationContext/LocalContext';
import './BlogCategory.scss';

interface IBlogCategoryProps {
    category : Category;
    isSelected : boolean;
    onClick : () => void;
}

const BlogCategory : React.FC<IBlogCategoryProps> = props => {
    const isSelectedClassName = props.isSelected ? 'is-selected' : '';

    var localisation = useContext(LocalValueContext);

    return (
        <div className={`blog-category ${isSelectedClassName}`} onClick={props.onClick}>
            <BackgroundOnHover  className={`blog-category-background`}/>
            {props.category.getDescription(localisation)}
        </div>
    );
}

export default BlogCategory;