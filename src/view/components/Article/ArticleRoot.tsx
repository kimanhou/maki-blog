import React from 'react';
import { useParams } from 'react-router';
import Article from './Article';
import ArticleModel from '../../../model/Article';

const ArticleRoot : React.FC = props => {
    let { postId } = useParams<{postId ?: string}>();
    var foundArticle = ArticleModel.getAllArticles().find(t => t.id.toString() == postId);
    const article = foundArticle == undefined ? ArticleModel.ONE : foundArticle;

    return(<Article article={article} />);
}

export default ArticleRoot;