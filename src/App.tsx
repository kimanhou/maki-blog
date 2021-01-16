import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import PostRoot from './view/components/Post/PostRoot';
import Blog from './view/components/Blog/Blog';
import Home from './view/components/Home/Home';
import ScrollToTop from './view/components/ScrollToTop/ScrollToTop';

const App : React.FunctionComponent = props => {

    return (
        <div className={`App`}>
            <HashRouter>
                <ScrollToTop />
                <Switch>
                    <Route exact path={["/"]}>
                        <Home />
                    </Route>
                    <Route exact path={["/posts/"]}>
                        <Blog />
                    </Route>
                    <Route path={["/posts/:postId"]}>
                        <PostRoot />
                    </Route>
                </Switch>
            </HashRouter>
        </div>
    )
}
export default App;
