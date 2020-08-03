import React from 'react';
import config from './config';
import TokenService from './token-service';

const GrowingContext = React.createContext({
    type: '',
    sleepData: [],
    currentUser: '',
    usersChildren: [],
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
    updateType: () => {},
    setSelectedChild: () => {},
});

export default GrowingContext;

export class GrowingContextProvider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            type: '',
            sleepData: [],
            currentUser: '',
            usersChildren: [],
            currentChild: '',
            feedingData: [],
            duration: '',
            date: ''
        };

        this.updateContext = this.updateContext.bind(this);
        this.updateDuration = this.updateDuration.bind(this);
        this.updateDate = this.updateDate.bind(this);
        this.updateType = this.updateType.bind(this);
        this.setSelectedChild = this.setSelectedChild.bind(this);
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
                authorization: `Bearer ${TokenService.getAuthToken()}`
            }
        })
            .then((res) => res.json())
            .then((currentUser) => {
                this.setState({
                    currentUser
                });
                return currentUser
            });
    };

    getChildInfo = () => {
        return fetch(`${config.API_ENDPOINT}/children`, {
            headers: {
                authorization: `Bearer ${TokenService.getAuthToken()}`
            }
        })
            .then((res) => res.json())
            .then((usersChildren) => {
                this.setState({
                    usersChildren
                });
                return usersChildren;
            });
    };

    getSleepData = (childId) => {
        return fetch(`${config.API_ENDPOINT}/sleeping/all/${childId}`, {
            headers: {
                authorization: `Bearer ${TokenService.getAuthToken()}`
            }
        })
            .then((res) => res.json())
            .then((sleepData) => {
                this.setState({
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
        this.setState({ type: item });
    }
    setSelectedChild(child){
        this.setState({ currentChild: child})
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
                    updateType: this.updateType,
                    setSelectedChild: this.setSelectedChild,
                }}
            >
                {this.props.children}
            </GrowingContext.Provider>
        );
    }
}
