import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import "./NewForm.css";

import APIClient from "../Components/API/APIClient";



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

const currencies = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
];

// function join(name, gamecode) {
//     let resp = client.playerJoin(name, gamecode);
//     console.log(resp.status);
// }

export default function NewForm() {
    const client = new APIClient();
    const classes = useStyles();
    const [values, setValues] = React.useState({
        name: '',
        gameCode: '',
    });

    const handleChange = name => event => {
        setValues({...values, [name]: event.target.value});
    };


    function playerJoin(name, gameCode) {
        let resp = client.playerJoin(name, gameCode);
        console.log(resp);
    }

    return (
        <Paper className="paper">
            <Grid container className="grid">
                <form noValidate autoComplete="off">
                    <Grid item xs={12}>

                        <TextField
                            id="standard-name"
                            label="Name"
                            className={classes.textField}
                            value={values.name}
                            onChange={handleChange('name')}
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="standard-uncontrolled"
                            label="Game code"
                            value={values.gameCode}
                            className={classes.textField}
                            onChange={handleChange('gameCode')}
                            margin="normal"
                        />
                    </Grid>
                </form>

                <Grid item xs={12} className="grid">
                    <Button onClick={() => playerJoin(values.name,values.gameCode)} variant="outlined" color="primary" size="small">Join
                        Game</Button>
                </Grid>
            </Grid>

        </Paper>
    );
}