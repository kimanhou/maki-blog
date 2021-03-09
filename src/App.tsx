import React, { Suspense } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import PostRoot from './view/components/Post/PostRoot';
import Blog from './view/components/Blog/Blog';
import Home from './view/components/Home/Home';
import ScrollToTop from './view/components/ScrollToTop/ScrollToTop';
import LocalContext from './view/components/LocalisationContext/LocalContext';
import About from './view/components/About/About';
import Contact from './view/components/Contact/Contact';
import SectionHeader from './view/components/SectionHeader/SectionHeader';
import Text from './model/Text';

const App : React.FunctionComponent = props => {

    return (
    <Suspense fallback={<SectionHeader title={new Text('Loading', 'En cours de chargement')} subtitle={new Text('', '')} ></SectionHeader>}>
        <div className={`App`}>
            <HashRouter>
                <LocalContext>
                    <ScrollToTop />
                    <Switch>
                        <Route exact path={["/about"]}>
                            <About />
                        </Route>
                        <Route exact path={["/contact"]}>
                            <Contact />
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
    </Suspense>
    )
}
export default App;
