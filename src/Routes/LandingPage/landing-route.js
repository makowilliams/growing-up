import React from 'react';
import MainMenu from '../../Components/main-menu';
import { Link } from 'react-router-dom';

export default class LandingPage extends React.Component {
    render() {
        return (
            <div className="landing-page">
                <MainMenu />
                <div className="hero-container container">
                    <h1>The App That Grows With Your Family</h1>
                    <p className="hero-copy">
                        Cum sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus. Nullam id dolor id nibh
                        ultricies vehicula ut id elit.
                    </p>
                    <Link to="/signup" className="link sign-up">
                        Sign Up
                    </Link>
                    <p className="demo-copy">
                        To Demo our app, you can login with:
                    </p>
                    <p className="demo-copy">username: test_user</p>
                    <p className="demo-copy">password: Pass5555</p>
                </div>
                <div className="feature-one feature">
                    <div className="feature-one-copy-container feature-container container">
                        <h2 className="feature-one-header">Feature #1</h2>
                        <p className="feature-one-copy">
                            Cras mattis consectetur purus sit amet fermentum.
                            Integer posuere erat a ante venenatis dapibus
                            posuere velit aliquet. Sed posuere consectetur est
                            at lobortis.
                        </p>
                    </div>
                    <div className="feature-one-image image">
                        <p className="image-text">Image</p>
                    </div>
                </div>
                <div className="feature-two feature">
                    <div className="feature-two-image image">
                        <p className="image-text">Image</p>
                    </div>
                    <div className="feature-container container feature-two-copy-container">
                        <h2 className="feature-two-header">Feature #2</h2>
                        <p className="feature-two-copy">
                            Cras mattis consectetur purus sit amet fermentum.
                            Integer posuere erat a ante venenatis dapibus
                            posuere velit aliquet. Sed posuere consectetur est
                            at lobortis.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
