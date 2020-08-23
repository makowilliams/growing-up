import React from 'react';
import config from './config';
import TokenService from './token-service';

const GrowingContext = React.createContext({
    type: '',
    currentChild: '',
    currentChildren: [],
    duration: '',
    date: '',
    image: '',
    imageChild: null,

    updateContext: () => {},
    postUser: () => {},
    getChildInfo: () => {},
    updateDuration: () => {},
    updateSession: () => {},
    deleteSession: () => {},
    updateWeight: () => {},
    updateAge: () => {},
    deleteBaby: () => {},
    addNewChild: () => {},
    updateDate: () => {},
    updateType: () => {},
    setSelectedChild: () => {},
    updateImageState: () => {}
});

export default GrowingContext;

export class GrowingContextProvider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            type: '',
            currentChild: '',
            currentChildren: [],
            duration: '',
            date: '',
            image: null
        };

        this.updateContext = this.updateContext.bind(this);
        this.updateSession = this.updateSession.bind(this);
        this.deleteSession = this.deleteSession.bind(this);
        this.updateWeight = this.updateWeight.bind(this);
        this.updateAge = this.updateAge.bind(this);
        this.deleteBaby = this.deleteBaby.bind(this);
        this.addNewChild = this.addNewChild.bind(this);
        this.updateDuration = this.updateDuration.bind(this);
        this.updateDate = this.updateDate.bind(this);
        this.updateType = this.updateType.bind(this);
        this.setSelectedChild = this.setSelectedChild.bind(this);
        this.updateImageState = this.updateImageState.bind(this);
        this.renderImage = this.renderImage.bind(this);
    }

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

    getChildInfo = () => {
        return fetch(`${config.API_ENDPOINT}/children`, {
            headers: {
                authorization: `Bearer ${TokenService.getAuthToken()}`
            }
        })
            .then((res) => res.json())
            .then((currentChildren) => {
                // create an array of promises
                const sleepingPromises = currentChildren.map((child) =>
                    this.getData(child.id, 'sleeping')
                );
                Promise.all(sleepingPromises)
                    .then((sleepingData) => {
                        // an array of sleeping data
                        sleepingData.forEach((currSleepingData, index) => {
                            currentChildren[index].sleeping = currSleepingData;
                        });
                    })
                    .then(() => {
                        // create an array of promises
                        const eatingPromises = currentChildren.map((child) =>
                            this.getData(child.id, 'eating')
                        );
                        return Promise.all(eatingPromises);
                    })
                    .then((eatingData) => {
                        // an array of eating data
                        eatingData.forEach((currEatingData, index) => {
                            currentChildren[index].eating = currEatingData;
                        });
                    })
                    .then(() => {
                        this.setState({
                            currentChildren
                        });
                    });
                return currentChildren;
            });
    };

    updateSession(data, type) {
        let newState = this.state;
        let index = this.state.currentChildren.findIndex(
            (child) => child.id === data.child_id
        );
        if (newState.currentChildren[index][type]) {
            newState.currentChildren[index][type].push(data);
        } else {
            newState.currentChildren[index][type] = [data];
        }
        this.setState(newState);
    }

    deleteSession(session) {
        let newState = { ...this.state };

        let newSessions = newState.currentChild[session.type].filter(
            (each_session) => each_session.id !== session.id
        );
        newState.currentChild[session.type] = newSessions;

        this.setState(newState);
    }

    updateWeight(data) {
        let newState = { ...this.state };
        let index = newState.currentChildren.findIndex(
            (child) => child.id === data.childId
        );
        newState.currentChildren[index].weight = data.weight;
        this.setState(newState);
    }

    renderImage(image, childId) {
        let newState = { ...this.state };
        let index = newState.currentChildren.findIndex(
            (child) => child.id === childId
        );
        newState.currentChildren[index].image = image;
        this.setState(newState);
    }
    updateAge(data) {
        let newState = { ...this.state };
        let index = newState.currentChildren.findIndex(
            (child) => child.id === data.childId
        );
        newState.currentChildren[index].age = data.age;
        this.setState(newState);
    }

    deleteBaby(childId) {
        let currChildren = this.state.currentChildren;
        let newChildren = currChildren.filter((child) => child.id !== childId);
        this.setState({
            currentChildren: newChildren
        });
    }

    addNewChild(data) {
        let currChildren = this.state.currentChildren;
        currChildren = [...currChildren, data];
        this.setState({
            currentChildren: currChildren
        });
    }

    getData = (childId, type) => {
        return fetch(`${config.API_ENDPOINT}/${type}/all/${childId}`, {
            headers: {
                authorization: `Bearer ${TokenService.getAuthToken()}`
            }
        })
            .then((res) => res.json())
            .catch((err) => console.error(err));
    };

    updateContext(newUpdate) {
        this.setState({ ...newUpdate });
    }

    updateImageState(newImg) {
        this.setState({ image: newImg });
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

    setImageChild = (childId) => {
        this.setState({ imageChild: childId });
    };

    render() {
        return (
            <GrowingContext.Provider
                value={{
                    ...this.state,
                    updateContext: this.updateContext,
                    postUser: this.postUser,
                    getChildInfo: this.getChildInfo,
                    updateSession: this.updateSession,
                    deleteSession: this.deleteSession,
                    updateWeight: this.updateWeight,
                    updateAge: this.updateAge,
                    deleteBaby: this.deleteBaby,
                    addNewChild: this.addNewChild,
                    updateDuration: this.updateDuration,
                    updateDate: this.updateDate,
                    updateType: this.updateType,
                    setSelectedChild: this.setSelectedChild,
                    updateImageState: this.updateImageState,
                    renderImage: this.renderImage,
                    setImageChild: this.setImageChild
                }}
            >
                {this.props.children}
            </GrowingContext.Provider>
        );
    }
}
