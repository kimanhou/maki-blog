import React from 'react';
import Footer from '../Footer/Footer';
import LatestPosts from '../LatestPosts/LatestPosts';
import './Home.scss';

interface IHomeProps {}

const Home : React.FC<IHomeProps> = props => {
    return (
        <div className={`home`}>
            <LatestPosts />
            <Footer />
        </div>
    );
}

export default Home;