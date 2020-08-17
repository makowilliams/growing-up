import config from './config';
import TokenService from './token-service';

const AddBabyService = {
    postBaby(babyInfo) {
        return fetch(`${config.API_ENDPOINT}/children`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(babyInfo)
        }).then((res) => (!res.ok ? res.json() : res.json()));
    },
    patchWeight(babyInfo) {
        return fetch(`${config.API_ENDPOINT}/children/${babyInfo.childId}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(babyInfo)
        }).then((res) => (!res.ok ? res.json() : res.json()));
    },
    patchAge(babyInfo) {
        return fetch(`${config.API_ENDPOINT}/children/${babyInfo.childId}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                "Authorization": `Bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(babyInfo),
            
        })
        .then(res => 
            (!res.ok)
            ? res.json()
            : res.json()
            )
    },
    delete_session(sessionInfo) {
        return fetch(
            `${config.API_ENDPOINT}/${sessionInfo.type}/${sessionInfo.id}`,
            {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json',
                    Authorization: `Bearer ${TokenService.getAuthToken()}`
                }
            }
        ).then((res) => {
            if (!res.ok) {
                return res.json().then((error) => {
                    throw error;
                });
            }
            return;
        });
    },
    updateImage(childId, encodedImage) {
        return fetch(`${config.API_ENDPOINT}/children/${childId}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify({
                image: encodedImage
            })
        }).then((res) => {
            if (!res.ok) {
                return res.json().then((error) => {
                    throw error;
                });
            }
            return;
        });
    },
    delete_baby(childId) {
        return fetch(`${config.API_ENDPOINT}/children/${childId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${TokenService.getAuthToken()}`
            }
        }).then((res) => {
            if (!res.ok) {
                return res.json().then((error) => {
                    throw error;
                });
            }
            return;
        });
    }
};

export default AddBabyService;
