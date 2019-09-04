import React from 'react';
import APIClient from "../API/APIClient";

class InGame extends React.Component {
    constructor(props){
        super(props);
        this.apiClient = new APIClient();
        this.eventSource = new EventSource()
        this.state = {
            cardOne:'',
            cardTwo:'',
            coins:2,
            turn:false,
            makeCall:false,
        };
    }


    checkNewData(){
        return;
    }


    render() {
        return(
            <Paper>
            //cards
            //coin label
            //Actions buttons
            //callout pass buttons
            //activity feed
            </Paper>
        )
    }
}
