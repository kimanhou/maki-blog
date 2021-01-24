import { SSL_OP_TLS_ROLLBACK_BUG } from 'constants';
import React, { useState } from 'react';
import './BackgroundTransition.scss';

interface IBackgroundTransitionProps {
}

const BackgroundTransition : React.FC<IBackgroundTransitionProps> = props => {
    return (
        <div className={`about-background-transition`}>
        </div>
    );
}

export default BackgroundTransition;