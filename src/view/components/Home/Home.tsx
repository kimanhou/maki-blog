import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import InstagramBanner from '../InstagramBanner/InstagramBanner';
import LatestPosts from '../LatestPosts/LatestPosts';
import HelloWorld from './HelloWorld/HelloWorld';
import './Home.scss';

interface IHomeProps {}

const Home : React.FC<IHomeProps> = props => {
    return (
        <div className={`home`}>
            <div className={`home-screen`}>
                <Header />
                <HelloWorld />
            </div>
            
            <LatestPosts />
            <InstagramBanner />
            <Footer />
        </div>
    );
}

export default Home;