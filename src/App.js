import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import LandingPage from './Routes/LandingPage/landing-route';
import '../src/Sass/style.sass';
import HomePage from './Routes/HomePage/home-route';
import TrackingHomePage from './Routes/TrackingHomePage/tracking-home-route';
import NotFoundPage from './Routes/NotFoundPage/not-found-route';
import TrackingActivePage from './Routes/TrackingActivePage/tracking-active-route';
import GrowingContextProvider from './growing-up-context';

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
                        <Route component={NotFoundPage} />
                    </Switch>
                </BrowserRouter>
            </GrowingContextProvider>
        );
    }
}
