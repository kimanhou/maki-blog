import Post from "../model/Post";
import Category from "../model/Category";


class Filters {
    getPosts = (categories : Category[]) => {
        const allPosts = Post.getAllSortedPosts();

        if (categories.includes(Category.ALL)) {
            return allPosts;
        }
        
        return allPosts.filter(t => Category.intersects(t.categories, categories));
    }
}

export default new Filters();