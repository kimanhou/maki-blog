import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import Filters from '../../../business/Filters';
import Category from '../../../model/Category';
import { useQueryParams } from '../../hooks/UseQueryParams';
import FadeIn from '../FadeIn/FadeIn';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import PostPreview from '../PostPreview/PostPreview';
import SectionHeader from '../SectionHeader/SectionHeader';
import './Blog.scss';
import BlogCategory from './BlogCategory';

interface IBlogProps {}

const Blog : React.FC<IBlogProps> = props => {
    const queryParams = useQueryParams();
    let categoriesString = queryParams['categories'];
    let categories : Category[] = [];
    if (categoriesString != undefined) {
        categories = (JSON.parse(categoriesString) as string[]).map(Category.deserialize);
    }
    let displayedPosts = Filters.getPosts(categories);
    
    const isCategorySelected = (category : Category) => {
        return categories.includes(category);
    }

    const history = useHistory();
    const location = useLocation();
    const setSelectedCategories = (categories : Category[]) => {
        const {categories : tagsParams, ...otherQueryParams} = queryParams;
        const search = Object.keys(otherQueryParams).map(key => `${key}=${encodeURIComponent(queryParams[key]!)}`);
        history.push(`${location.pathname}?${Category.toQueryParam(categories)}${search}`)
    }

    const allCategories = Category.getAllCategories();

    const postsColumn1 = displayedPosts.filter((t , index) => index % 3 == 0);
    const postsColumn2 = displayedPosts.filter((t , index) => index % 3 == 1);
    const postsColumn3 = displayedPosts.filter((t , index) => index % 3 == 2);

    const [isInvisible, setIsInvisible] = useState(false);
    const isInvisibleClassname = isInvisible ? 'is-invisible' : '';

    const onCategoryClick = (category : Category) => {
        setIsInvisible(true);
        const timer = setTimeout(() => {
            setSelectedCategories([ category ]);
            setIsInvisible(false);
        }, 1000);
        return () => clearTimeout(timer);
    }

   

    return (
        <div className={`blog`}>
            <Header />
            <div className={`main-wrapper`}>
                <SectionHeader englishTitle='The blog' englishSubtitle='' frenchTitle='Le blog' frenchSubtitle='' />
                <div className={`blog-categories`}>
                    <div className={`blog-categories-container`}>
                        {allCategories.map(t => <BlogCategory category={t} isSelected={isCategorySelected(t)} onClick={() => onCategoryClick(t)}/>)}
                    </div>
                </div>
                <div className={`posts ${isInvisibleClassname}`}>
                    <div className={`posts-column`}>
                        {postsColumn1.map(t => 
                            <FadeIn noDelay>
                                <PostPreview article={t}/>
                            </FadeIn>)}
                    </div>
                    <div className={`posts-column`}>
                        {postsColumn2.map(t => 
                            <FadeIn noDelay>
                                <PostPreview article={t}/>
                            </FadeIn>)}
                    </div>
                    <div className={`posts-column`}>
                        {postsColumn3.map(t => 
                            <FadeIn noDelay>
                                <PostPreview article={t}/>
                            </FadeIn>)}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Blog;