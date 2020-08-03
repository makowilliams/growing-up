import React from 'react';
import config from './config';
//import TokenService from './token-service';

const GrowingContext = React.createContext({
    type: '',
    sleepData: [],
    currentUser: '',
    currentChild: '',
    feedingData: [],
    duration: '',
    date: '',

    updateContext: () => {},
    login: () => {},
    postUser: () => {},
    getUser: () => {},
    getSleepData: () => {},
    getUserInfo: () => {},
    getChildInfo: () => {},
    updateDuration: () => {},
    updateDate: () => {},
    updateType: () => {}
});

export default GrowingContext;

export class GrowingContextProvider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            type: '',
            sleepData: [],
            currentUser: '',
            currentChild: '',
            feedingData: [],
            duration: '',
            date: ''
        };

        this.updateContext = this.updateContext.bind(this);
        this.updateDuration = this.updateDuration.bind(this);
        this.updateDate = this.updateDate.bind(this);
        this.updateType = this.updateType.bind(this);
    }

    login = (credentials) => {
        return fetch(`${config.API_ENDPOINT}/auth/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(credentials)
        }).then((res) => {
            return !res.ok
                ? res.json().then((e) => Promise.reject(e))
                : res.json();
        });
    };

    postUser = (user) => {
        return fetch(`${config.API_ENDPOINT}/users`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then((res) => {
            return !res.ok
                ? res.json().then((e) => Promise.reject(e))
                : res.json();
        });
    };

    getUserInfo = () => {
        return fetch(`${config.API_ENDPOINT}/users`, {
            headers: {
                //authorization: `bearer ${TokenService.getAuthToken()}`,
                authorization:
                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTYyMDk3MjksInN1YiI6InRlc3RfdyJ9.wc43jIJWACSMhexrMeHSyGpYZNZoHjiKPEMhGW4hyRM'
            }
        })
            .then((res) => res.json())
            .then((currentUser) => {
                console.log('current user', currentUser);
<<<<<<< HEAD
                this.setState({
                    currentUser
                });
=======
                this.setState(
                    {
                        currentUser
                    }
                    //not sure what cb() means or what it is trying to set
                    //cb(currentUser.id)
                );
>>>>>>> master
            });
    };

    getChildInfo = () => {
        return fetch(`${config.API_ENDPOINT}/children`, {
            headers: {
                //authorization: `bearer ${TokenService.getAuthToken()}`,
                authorization:
                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTYyMDk3MjksInN1YiI6InRlc3RfdyJ9.wc43jIJWACSMhexrMeHSyGpYZNZoHjiKPEMhGW4hyRM'
            }
        })
            .then((res) => res.json())
            .then((currentChild) => {
                this.setState({
                    currentChild
                });
                return currentChild;
            });
    };

    getSleepData = (childId) => {
        return fetch(`${config.API_ENDPOINT}/sleeping/all/${childId}`, {
            headers: {
                //authorization: `bearer ${TokenService.getAuthToken()}`,
                authorization:
                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTYyMDk3MjksInN1YiI6InRlc3RfdyJ9.wc43jIJWACSMhexrMeHSyGpYZNZoHjiKPEMhGW4hyRM'
            }
        })
            .then((res) => res.json())
            .then((sleepData) => {
                this.context.setState({
                    sleepData
                });
            })
            .catch((err) => console.error(err));
    };

    updateContext(newUpdate) {
        this.setState({ ...newUpdate });
    }

    updateDuration(item) {
        this.setState({ duration: item });
    }
    updateDate(item) {
        this.setState({ date: item });
    }
    updateType(item) {
<<<<<<< HEAD
        this.setState({ type: item });
=======
        this.setState({type: item})
>>>>>>> master
    }

    render() {
        return (
            <GrowingContext.Provider
                value={{
                    ...this.state,
                    updateContext: this.updateContext,
                    login: this.login,
                    postUser: this.postUser,
                    getUser: this.getUser,
                    getSleepData: this.getSleepData,
                    getUserInfo: this.getUserInfo,
                    getChildInfo: this.getChildInfo,
                    updateDuration: this.updateDuration,
                    updateDate: this.updateDate,
                    updateType: this.updateType
                }}
            >
                {this.props.children}
            </GrowingContext.Provider>
        );
    }
}
