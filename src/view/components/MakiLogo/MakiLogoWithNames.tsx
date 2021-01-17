import React from 'react';
import { Link } from 'react-router-dom';
import MakiLogo from './MakiLogo';
import './MakiLogoWithNames.scss';

interface IMakiLogoWithNamesProps {
}

const MakiLogoWithNames : React.FC<IMakiLogoWithNamesProps> = props => {
    return (
        <Link className={`maki-logo-with-names`} to='/'>
            <MakiLogo />
            <div className={`maki-logo-with-names-subtitle`}>
                <span className={`mark`}>Mark</span>
                <span className={`plus`}>+</span>
                <span className={`kim-anh`}>Kim Anh</span>
            </div>
        </Link>
    );
}
       
export default MakiLogoWithNames;