import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import ArticleRoot from './view/components/Article/ArticleRoot';
import LatestPosts from './view/components/LatestPosts/LatestPosts';

const App : React.FunctionComponent = props => {

    return (
        <div className={`App`}>
            <HashRouter>
                    <Switch>
                        <Route exact path={["/", "/posts/"]}>
                            <LatestPosts />
                        </Route>
                        <Route path={["/posts/:postId"]}>
                            <ArticleRoot />
                        </Route>
                    </Switch>
            </HashRouter>
        </div>
    )
}
export default App;
