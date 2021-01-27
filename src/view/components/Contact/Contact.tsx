import React from 'react';
import TextModel from '../../../model/Text';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Text from '../LocalisationContext/Text';
import SectionHeader from '../SectionHeader/SectionHeader';
import './Contact.scss';
import ContactBackground from './ContactBackground';

const Contact : React.FC = props => {
    return (
        <div className={`contact`}>
            <Header/>
            <SectionHeader title={new TextModel('Contact us', 'Nous contacter')} subtitle={new TextModel('', '')}/>
            <ContactBackground />
            <div className={`contact-content`}>
                <div className={`contact-item email`}>
                    <div className={`contact-big-item email`}>
                        <span className={`mark-kim-anh`}>mark.kimanh</span><br></br><span>@gmail.com</span>
                    </div>
                    <div className={`contact-item-relative`}>
                        <a href='mailto:mark.kimanh@gmail.com'><Text english='By email' french='Par email' /></a>
                    </div>
                </div>
                <div className={`contact-item tel`}>
                    <div className={`contact-big-item tel`}>
                        0123456789
                    </div>
                    <div className={`contact-item-relative`}>
                        <a href='tel:0123456789'><Text english='By telephone' french='Par téléphone' /></a>
                    </div>
                </div>
                <div className={`contact-item instagram`}>
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