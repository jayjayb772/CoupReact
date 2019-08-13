import React, { Component } from 'react';
import APIClient from './API/APIClient';
import {GridList} from "@material-ui/core";

class JoinForm extends React.Component {

    constructor(props) {
        super(props);
        this.apiClient = new APIClient();
        this.state = {
            name: '',
            gamecode: '',
        };
    }

    updateName(value) {
        this.setState({
            name: value,
        });
    }

    updateGamecode(value) {
        this.setState({
            gamecode: value,
        });
    }

    submit(name, gamecode) {
        this.apiClient.playerJoin(name, gamecode)
        this.updateGamecode('');
        this.updateName('');
    }

    render() {
        return (
            <form>
                Name
                <input
                    type="text"
                    onChange={(event) => {this.updateName(event.target.value)}}
                    value={this.state.name}
                />
                <br/>
                Game Code
                <input
                    type="text"
                    onChange={(event) => {this.updateGamecode(event.target.value)}}
                    value={this.state.gamecode}
                />
                <br/>
                <button onClick={() => {this.submit(this.state.name, this.state.gamecode)}}>Submit</button>
                </form>
        )
    }
}

export default JoinForm;