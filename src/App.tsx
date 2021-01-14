import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import ArticleRoot from './view/components/Article/ArticleRoot';
import Home from './view/components/Home/Home';

const App : React.FunctionComponent = props => {

    return (
        <div className={`App`}>
            <HashRouter>
                    <Switch>
                        <Route exact path={["/", "/posts/"]}>
                            <Home />
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
