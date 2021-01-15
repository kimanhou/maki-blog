import React from 'react';
import Category from '../../../model/Category';
import './BlogCategory.scss';

interface IBlogCategoryProps {
    category : Category;
}

const BlogCategory : React.FC<IBlogCategoryProps> = props => {

    return (
        <div className={`blog-category`}>
            {props.category.description}
        </div>
    );
}

export default BlogCategory;