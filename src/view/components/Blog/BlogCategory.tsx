import React from 'react';
import Category from '../../../model/Category';
import BackgroundOnHover from '../BackgroundOnHover/BackgroundOnHover';
import './BlogCategory.scss';

interface IBlogCategoryProps {
    category : Category;
}

const BlogCategory : React.FC<IBlogCategoryProps> = props => {

    return (
        <div className={`blog-category`}>
            <BackgroundOnHover  className={`blog-category-background`}/>
            {props.category.description}
        </div>
    );
}

export default BlogCategory;