import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import PostRoot from './view/components/Post/PostRoot';
import Blog from './view/components/Blog/Blog';
import Home from './view/components/Home/Home';
import ScrollToTop from './view/components/ScrollToTop/ScrollToTop';
import LocalContext from './view/components/LocalisationContext/LocalContext';
import About from './view/components/About/About';

const App : React.FunctionComponent = props => {

    return (
        <div className={`App`}>
            <HashRouter>
                <LocalContext>
                    <ScrollToTop />
                    <Switch>
                        <Route exact path={["/about"]}>
                            <About />
                        </Route>
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
                </LocalContext>
            </HashRouter>
        </div>
    )
}
export default App;
