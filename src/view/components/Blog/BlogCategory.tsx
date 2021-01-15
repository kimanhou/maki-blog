import React from 'react';
import Category from '../../../model/Category';
import BackgroundOnHover from '../BackgroundOnHover/BackgroundOnHover';
import './BlogCategory.scss';

interface IBlogCategoryProps {
    category : Category;
    isSelected : boolean;
    onClick : () => void;
}

const BlogCategory : React.FC<IBlogCategoryProps> = props => {
    const isSelectedClassName = props.isSelected ? 'is-selected' : '';

    return (
        <div className={`blog-category ${isSelectedClassName}`} onClick={props.onClick}>
            <BackgroundOnHover  className={`blog-category-background`}/>
            {props.category.description}
        </div>
    );
}

export default BlogCategory;