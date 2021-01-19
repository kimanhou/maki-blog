import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import InstagramBanner from '../InstagramBanner/InstagramBanner';
import LatestPosts from '../LatestPosts/LatestPosts';
import './Home.scss';

interface IHomeProps {}

const Home : React.FC<IHomeProps> = props => {
    return (
        <div className={`home`}>
            <Header />
            <LatestPosts />
            <InstagramBanner />
            <Footer />
        </div>
    );
}

export default Home;