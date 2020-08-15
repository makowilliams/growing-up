import React from 'react';
import MainMenu from '../../Components/main-menu';

export default class LandingPage extends React.Component {
    render() {
        return (
            <div className="landing-page">
                <MainMenu />
                <div className="hero-container container">
                    <h1>The App That Grows With Your Family</h1>
                    <p className="hero-copy">
                        Growing Up makes it simple to track and identify the 
                        eating and sleeping patterns of your baby in one 
                        place. Logging your baby's important infomation 
                        couldnt be easier. 
                    </p>
                    <p className="hero-copy">
                        To Demo our app, you can login with:
                    </p>
                    <p className="hero-copy">
                        username: test_user
                    </p>
                    <p className="hero-copy">
                        password: Pass5555
                    </p>
                </div>
                <div className="feature-one feature">
                    <div className="feature-one-copy-container feature-container container">
                        <h2 className="feature-one-header">Feature #1</h2>
                        <p className="feature-one-copy">
                            -Start and stop sleeping timer
                            -Helps distinguish between naps and nightime sleeping
                            -Keep track of how well your baby slept
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
                            -Start and stop eating timer
                            -Settings for different types of nursing
                            -Track nursing time per breast
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
