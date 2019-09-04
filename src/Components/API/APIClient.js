import axios from 'axios';

//const BASE_URI = 'http://localhost:5000';
const BASE_URI = 'https://flaskcoup.herokuapp.com'

const client = axios.create({
    baseURL: BASE_URI,
    json: true
});

class APIClient {
    constructor() {
        this.client = client;
    }

    playerJoin(player, gamecode){
       let data = {'player':player,'gamecode':gamecode};
       let resp = client.post(`${BASE_URI}/joinSubmit`, JSON.stringify({
           name: player,
           gamecode: gamecode
       }) ).then(res => {
           console.log(res);
       }).catch(error => {
           console.log('erro', error);
       })
        // console.log(resp);
        // this.perform('POST','/joinSubmit',data)
        return resp;
    }

    getPlayers(gamecode){
        let players= this.perform('GET', '/getPlayers', gamecode);
    }

    // async perform (method, resource, data) {
    //     return client({
    //         method,
    //         url: resource,
    //         data,
    //     }).then(resp => {
    //         return resp.data ? resp.data : [];
    //     })
    // }





}

export default APIClient;
