import React, { lazy } from 'react';
import Footer from '../Footer/Footer';
import './Home.scss';

interface IHomeProps {}

const Home : React.FC<IHomeProps> = props => {
    const Header = React.lazy(() => import('../Header/Header'));
    const InstagramBanner = React.lazy(() => import('../InstagramBanner/InstagramBanner'));
    const LatestPosts = React.lazy(() => import('../LatestPosts/LatestPosts'));
    const HelloWorld = React.lazy(() => import('./HelloWorld/HelloWorld'));

    return (
        <div className={`home`}>
            <section className={`home-screen`}>
                <Header />
                <HelloWorld />
            </section>
            <main>
                <LatestPosts />
                <InstagramBanner />
            </main>
            <Footer />
        </div>
    );
}

export default Home;