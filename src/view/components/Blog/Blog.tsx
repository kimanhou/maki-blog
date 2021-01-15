import React from 'react';
import Article from '../../../model/Article';
import Category from '../../../model/Category';
import FadeIn from '../FadeIn/FadeIn';
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

    const postsColumn1 = posts.filter((t , index) => index % 3 == 0);
    const postsColumn2 = posts.filter((t , index) => index % 3 == 1);
    const postsColumn3 = posts.filter((t , index) => index % 3 == 2);

    return (
        <div className={`blog`}>
            <Header />
            <div className={`main-wrapper`}>
                <SectionHeader englishTitle='The blog' englishSubtitle='' frenchTitle='Le blog' frenchSubtitle='' />
                <div className={`blog-categories`}>
                    <div className={`blog-categories-container`}>
                        {categories.map(t => <BlogCategory category={t} />)}
                    </div>
                </div>
                <div className={`posts`}>
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