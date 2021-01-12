import React, { useContext } from 'react';
import Local from '../LocalisationContext/Local';
import { LocalValueContext } from '../LocalisationContext/LocalContext';
import './Article.scss';
import English from './English/English';
import French from './French/French';

interface IArticleProps {

}

const Article : React.FC<IArticleProps> = props => {
    var localisation = useContext(LocalValueContext);

    switch (localisation) {
        case Local.FR:
            return <French />;
        break;

        case Local.EN:
            return <English />;
        break;

        default:
            return <English />;
    }
}

export default Article;