import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import LandingPage from './Routes/LandingPage/landing-route';
import '../src/Sass/style.sass';
import HomePage from './Routes/HomePage/home-route';
import TrackingHomePage from './Routes/TrackingHomePage/tracking-home-route';
import LoginPage from './Routes/LoginPage/LoginPage';
import NotFoundPage from './Routes/NotFoundPage/not-found-route';
import TrackingActivePage from './Routes/TrackingActivePage/tracking-active-route';
import GrowingContextProvider from './growing-up-context';
import SignUpPage from './Routes/SignUpPage/SignUpPage';

export default class App extends React.Component {
    render() {
        return (
            <GrowingContextProvider>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={LandingPage} />
                        <Route path="/home" component={HomePage} />
                        <Route
                            exact
                            path="/tracking/:type"
                            component={TrackingHomePage}
                        />
                        <Route
                            path="/tracking/:type/active"
                            component={TrackingActivePage}
                        />
                        <Route path="/signup" component={SignUpPage} />
                        <Route path="/login" component={LoginPage} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </BrowserRouter>
            </GrowingContextProvider>
        );
    }
}
