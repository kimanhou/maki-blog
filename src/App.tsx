import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import ArticleModel from './model/Article';
import Article from './view/components/Article/Article';
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
                        <Article article={ArticleModel.ONE} />
                    </Route>
                </Switch>
        </HashRouter>
    </div>
  )
}
export default App;
