import React from 'react';
import Article from '../../../model/Article';
import Category from '../../../model/Category';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import PostPreview from '../PostPreview/PostPreview';
import SectionHeader from '../SectionHeader/SectionHeader';
import './Blog.scss';
import BlogCategory from './BlogCategory';

interface IBlogProps {}

const Blog : React.FC<IBlogProps> = props => {
    const posts = Article.getAllSortedArticles();
    const categories = Category.getAllCategories();

    return (
        <div className={`blog`}>
            <Header />
            <div className={`main-wrapper`}>
                <SectionHeader englishTitle='Blog' englishSubtitle='' frenchTitle='Le blog' frenchSubtitle='' />
                <div className={`blog-categories`}>
                    {categories.map(t => <BlogCategory category={t} />)}
                </div>
                <div className={`posts`}>
                    {posts.map(t => <PostPreview article={t}/>)}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Blog;