import React from 'react';
import Text from '../LocalisationContext/Text';
import './Navigation.scss';
import NavigationLink from './NavigationLink';

interface INavigationProps {}

const Navigation : React.FC<INavigationProps> = props => {
    return (
        <div className={`navigation`}>
            <NavigationLink text={<Text english='Blog' french='Le blog' />} to='/posts?categories=["all"]' />
            <NavigationLink text={<Text english='About' french='À propos' />} to='/about' />
            <NavigationLink text={<Text english='Contact' french='Contact' />} to='/contact' />
        </div>
    );
}

export default Navigation;