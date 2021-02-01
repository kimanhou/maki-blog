import React, { useEffect, useRef, useState } from 'react';
import TextModel from '../../../model/Text';
import { isMobile } from '../../hooks/UseMediaQuery';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Text from '../LocalisationContext/Text';
import SectionHeader from '../SectionHeader/SectionHeader';
import './Contact.scss';
import ContactBackground from './ContactBackground';

const Contact : React.FC = props => {
    const mobile = isMobile();

    const [ startAnimation, setStartAnimation ] = useState(false);
    const [ showEmail, setShowEmail ] = useState(false);
    const [ showPhone, setShowPhone ] = useState(false);
    const [ showInstagram, setShowInstagram ] = useState(false);

    useEffect(() => {
        setTimeout(() => setStartAnimation(true), 5000);
    }, []);
    const currentTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const setShowInstagramTimeout = () => {
        currentTimeoutRef.current = setTimeout(() => {
            setShowPhone(false);
            setShowInstagram(true);
            setShowEmailTimeout();
        }, 5000);
    }
    const setShowPhoneTimeout = () => {
        currentTimeoutRef.current = setTimeout(() => {
            setShowEmail(false);
            setShowPhone(true);
            setShowInstagramTimeout();
        }, 5000);
    }
    const setShowEmailTimeout = () => {
        currentTimeoutRef.current = setTimeout(() => {
            setShowInstagram(false);
            setShowEmail(true);
            setShowPhoneTimeout();
        }, 5000);
    }
    useEffect(() => {
        if(startAnimation && mobile){
            setShowPhone(false);
            setShowInstagram(false);
            setShowEmail(true);
            setShowPhoneTimeout();
        }
        return () => {
            if(currentTimeoutRef.current != null){
                clearTimeout(currentTimeoutRef.current);
                currentTimeoutRef.current = null;
            }
        }
    }, [ mobile, startAnimation]);
    
    const showEmailClassname = showEmail ? "show" : "";
    const showPhoneClassname = showPhone ? "show" : "";
    const showInstagramClassname = showInstagram ? "show" : "";
    return (
        <div className={`contact`}>
            <Header/>
            <SectionHeader title={new TextModel('Contact us', 'Nous contacter')} subtitle={new TextModel('', '')}/>
            <ContactBackground />
            <div className={`contact-content`}>
                <div className={`contact-item email ${showEmailClassname}`}>
                    <div className={`contact-big-item email`}>
                        <span className={`mark-kim-anh`}>mark.kimanh</span><br></br><span>@gmail.com</span>
                    </div>
                    <div className={`contact-item-relative`}>
                        <a href='mailto:mark.kimanh@gmail.com'><Text english='By email' french='Par email' /></a>
                    </div>
                </div>
                <div className={`contact-item tel ${showPhoneClassname}`}>
                    <div className={`contact-big-item tel`}>
                        0123456789
                    </div>
                    <div className={`contact-item-relative`}>
                        <a href='tel:0123456789'><Text english='By telephone' french='Par téléphone' /></a>
                    </div>
                </div>
                <div className={`contact-item instagram ${showInstagramClassname}`}>
                    <div className={`contact-big-item instagram`}>
                        <span className={`this-is`}>thisis</span><br></br><span>makiworld</span>
                    </div>
                    <div className={`contact-item-relative`}>
                        <a href='https://www.instagram.com/thisismakiworld/' target='_blank'><Text english='On Instagram' french='Sur Instagram' /></a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;