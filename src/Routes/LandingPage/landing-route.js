import React from 'react';
import MainMenu from '../../Components/main-menu';
import { Link } from 'react-router-dom';
import { ReactComponent as BlueCloud } from '../../assets/blue-cloud.svg';
import { ReactComponent as PinkCloud } from '../../assets/pink-cloud.svg';
import { ReactComponent as PurpleCloud } from '../../assets/purple-cloud.svg';
import cribIcon from '../../assets/crib-icon/crib-icon-lg.png';

export default class LandingPage extends React.Component {
    render() {
        return (
            <div className="landing-page">
                <MainMenu />
                <div className="hero-container container">
                    <BlueCloud
                        className="cloud blue-cloud"
                        fill="currentColor"
                    />
                    <PinkCloud className="cloud pink-cloud" />
                    <PurpleCloud className="cloud purple-cloud" />
                    <h1 className="hero-header">
                        The App That Grows
                        <br />
                        With Your Family
                    </h1>
                    <p className="hero-copy copy">
                        Cum sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus. Nullam id dolor id nibh
                        ultricies vehicula ut id elit.
                    </p>
                    <Link to="/signup" className="link sign-up">
                        Sign Up
                    </Link>
                    <p className="demo-copy copy">
                        To Demo our app, you can login with:
                        <br />
                        username: test_user
                        <br />
                        password: Pass5555
                    </p>
                </div>
                <div className="features-container">
                    <div className="feature-one feature">
                        <div className="feature-one-copy-container feature-container container">
                            <img
                                src={cribIcon}
                                alt="Crib Icon"
                                className="crib-icon icon"
                            />
                            <h2 className="feature-one-header feature-header">
                                Track Sleep
                            </h2>
                            <p className="feature-one-copy feature-copy copy">
                                Duis mollis, est non commodo luctus, nisi erat
                                porttitor ligula, eget lacinia odio sem nec
                                elit.
                            </p>
                        </div>
                    </div>
                    <div className="feature-two feature">
                        <div className="feature-container container feature-two-copy-container">
                            <img
                                src={cribIcon}
                                alt="Crib Icon"
                                className="crib-icon icon"
                            />
                            <h2 className="feature-two-header feature-header">
                                Track Feeding
                            </h2>
                            <p className="feature-two-copy feature-copy copy">
                                Cras mattis consectetur purus sit amet
                                fermentum. Integer posuere erat a ante venenatis
                                dapibus posuere velit aliquet. Sed posuere
                                consectetur est at lobortis.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
