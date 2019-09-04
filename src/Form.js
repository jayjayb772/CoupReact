import React, { Component } from 'react';
import APIClient from './Components/API/APIClient';
import {GridList} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
}));

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

                <TextField id="name" label="Name"/>
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