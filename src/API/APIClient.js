import axios from 'axios';

const BASE_URI = 'http://localhost:5000';

const client = axios.create({
    baseURL: BASE_URI,
    json: true
});

class APIClient {
    constructor() {
    }

    playerJoin(player, gamecode){
       let data = {'player':player,'gamecode':gamecode};
       return this.perform('post','/joinSubmit',data);
    }

    getPlayers(gamecode){
        let players= this.perform('get', '/getPlayers', gamecode);
    }

    async perform (method, resource, data) {
        return client({
            method,
            url: resource,
            data,
        }).then(resp => {
            return resp.data ? resp.data : [];
        })
    }
}

export default APIClient;