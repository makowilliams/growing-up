import React from 'react';
import config from './config';
import TokenService from './token-service';

console.log('merged')
const GrowingContext = React.createContext({
    type: '',
    logData: [],
    currentUser: '',
    currentChild: '',
    currentChildren: [],
    feedingData: [],
    duration: '',
    date: '',

    updateContext: () => {},
    login: () => {},
    postUser: () => {},
    getData: () => {},
    getUserInfo: () => {},
    getChildInfo: () => {},
    updateDuration: () => {},
    updateDate: () => {},
    updateType: () => {},
    setSelectedChild: () => {}
});

export default GrowingContext;

export class GrowingContextProvider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            type: '',
            logData: [],
            currentUser: '',
            currentChild: '',
            currentChildren: [],
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
            });
    };

    getChildInfo = () => {
        return fetch(`${config.API_ENDPOINT}/children`, {
            headers: {
                authorization: `Bearer ${TokenService.getAuthToken()}`
            }
        })
            .then((res) => res.json())
            .then((currentChildren) => {
                this.setState({
                    currentChildren
                });
                return currentChildren;
            });
    };

    getData = (childId, type) => {
        console.log(`${config.API_ENDPOINT}/${type}/all/${childId}`)
        return fetch(`${config.API_ENDPOINT}/${type}/all/${childId}`, {
            headers: {
                authorization: `Bearer ${TokenService.getAuthToken()}`
            }
        })
            .then((res) => res.json())
            .then((logData) => {
                console.log(logData)
                this.setState({
                    [type]: logData
                });
            })
            .catch((err) => console.error(err));
    };

    // setChildData(data, type){
    //     let newState = this.state
    //     let selectedChild = this.state.currentChildren.find(child => child.id === data[0].child_id)
    //     console.log(this.state.currentChildren)
    //     this.setState({

    //     })
    //     console.log(selectedChild, type)
    // }
    // getData = (childId, type) => {
    //     return fetch(`${config.API_ENDPOINT}/${type}/all/${childId}`, {
    //         headers: {
    //             authorization: `Bearer ${TokenService.getAuthToken()}`
    //         }
    //     })
    //         .then((res) => res.json())
    //         .then((logData) => {
    //             console.log(logData)
    //             this.setChildData(logData, type)
    //             this.setState({
    //                 [type]: logData
    //             });
    //         })
    //         .catch((err) => console.error(err));
    // };

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
    setSelectedChild(child) {
        this.setState({ currentChild: child });
    }

    render() {
        return (
            <GrowingContext.Provider
                value={{
                    ...this.state,
                    updateContext: this.updateContext,
                    login: this.login,
                    postUser: this.postUser,
                    getData: this.getData,
                    getUserInfo: this.getUserInfo,
                    getChildInfo: this.getChildInfo,
                    updateDuration: this.updateDuration,
                    updateDate: this.updateDate,
                    updateType: this.updateType,
                    setSelectedChild: this.setSelectedChild
                }}
            >
                {this.props.children}
            </GrowingContext.Provider>
        );
    }
}
