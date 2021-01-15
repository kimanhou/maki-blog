import React from 'react';
import { Link } from 'react-router-dom';
import BackgroundOnHover from '../BackgroundOnHover/BackgroundOnHover';
import './NavigationLink.scss';

interface INavigationLinkProps {
    text : React.ReactNode;
    to : string;
}

const NavigationLink : React.FC<INavigationLinkProps> = props => {
    return (
        <Link className={`navigation-link`} to={props.to}>
            <BackgroundOnHover className={`navigation-link-background`} />
            {props.text}
        </Link>
    );
}

export default NavigationLink;