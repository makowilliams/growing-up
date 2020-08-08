import config from './config';
import TokenService from './token-service';

const AddBabyService = {
    postBaby(babyInfo) {
        debugger
        return fetch(`${config.API_ENDPOINT}/children`, {
            method: 'POST',
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
}

export default AddBabyService;