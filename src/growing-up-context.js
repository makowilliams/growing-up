import React from 'react';
import config from './config';
import TokenService from './token-service';
// import ImageUploader from 'react-images-upload';

const GrowingContext = React.createContext({
    type: '',
    logData: [],
    currentUser: '',
    currentChild: '',
    currentChildren: [],
    duration: '',
    date: '',
    image: '',

    updateContext: () => {},
    login: () => {},
    postUser: () => {},
    getData: () => {},
    getUserInfo: () => {},
    getChildInfo: () => {},
    updateDuration: () => {},
    updateSession: () => {},
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
            duration: '',
            date: '',
            image: ''
        };

        this.updateContext = this.updateContext.bind(this);
        this.updateSession = this.updateSession.bind(this);
        this.updateDuration = this.updateDuration.bind(this);
        this.updateDate = this.updateDate.bind(this);
        this.updateType = this.updateType.bind(this);
        this.setSelectedChild = this.setSelectedChild.bind(this);
    }

    // onDrop(picture) {
    //     this.setState({
    //         pictures: this.state.pictures.concat(picture)
    //     });
    // }

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

    updateSession(data, type) {
        let newState = this.state;
        let index = this.state.currentChildren.findIndex(
            (child) => child.id === data.child_id
        );
        if(newState.currentChildren[index][type]){
            newState.currentChildren[index][type].push(data);
        } else {
            newState.currentChildren[index][type] = [data];
        }
        this.setState(newState);
    }

    setChildData(data, type) {
        let newState = this.state;
        let index = this.state.currentChildren.findIndex(
            (child) => child.id === data[0].child_id
        );
        newState.currentChildren[index][type] = data;
        this.setState(newState);
    }

    getData = (childId, type) => {
        return fetch(`${config.API_ENDPOINT}/${type}/all/${childId}`, {
            headers: {
                authorization: `Bearer ${TokenService.getAuthToken()}`
            }
        })
            .then((res) => res.json())
            .then((logData) => {
                if(logData.length){
                    this.setChildData(logData, type);
                }
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
                    updateSession: this.updateSession,
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
