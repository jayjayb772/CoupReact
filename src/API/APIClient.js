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

       let resp = fetch('http://127.0.0.1:5000/joinSubmit',{
           method:'POST',
           body: JSON.stringify({
               name: player,
               gamecode: gamecode
           })
       }).then(res=>res.json())
           .then(res=>console.log(res));


        console.log(resp);
        // this.perform('POST','/joinSubmit',data)
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