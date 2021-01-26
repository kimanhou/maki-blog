import React from 'react';
import TextModel from '../../../model/Text';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Text from '../LocalisationContext/Text';
import SectionHeader from '../SectionHeader/SectionHeader';
import './Contact.scss';

const Contact : React.FC = props => {
    return (
        <div className={`contact`}>
            <Header/>
            <SectionHeader title={new TextModel('Contact us', 'Nous contacter')} subtitle={new TextModel('', '')}/>
            <div className={`contact-content`}>
                <div className={`contact-item email`}>
                    <div className={`contact-big-item email`}>
                        mark.kimanh@gmail.com
                    </div>
                    <div className={`contact-item-relative`}>
                        <Text english='By email' french='Par email' />
                    </div>
                </div>
                <div className={`contact-item tel`}>
                    <div className={`contact-big-item tel`}>
                        0123456789
                    </div>
                    <div className={`contact-item-relative`}>
                        <Text english='By telephone' french='Par téléphone' />
                    </div>
                </div>
                <div className={`contact-item instagram`}>
                    <div className={`contact-big-item instagram`}>
                        thisismakiworld
                    </div>
                    <div className={`contact-item-relative`}>
                        <Text english='On Instagram' french='Sur Instagram' />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;