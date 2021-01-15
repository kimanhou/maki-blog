import Article from "../model/Article";
import Category from "../model/Category";


class Filters {
    getPosts = (categories : Category[]) => {
        const allPosts = Article.getAllSortedArticles();

        if (categories.includes(Category.ALL)) {
            return allPosts;
        }
        
        return allPosts.filter(t => Category.intersects(t.categories, categories));
    }
}

export default new Filters();