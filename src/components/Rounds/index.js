import React, { Component } from 'react';
import { Typography, TextField, Button } from '@material-ui/core';
import './styles.css'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

class Rounds extends Component {
    constructor(props) {
        super(props);
        this.state = {
            players: this.props.history.location.state.players,
            round: 1,
            inputs: Array(this.props.history.location.state.players.length).fill('')
        }
    }

    generateList() {
        return this.state.players.map((player, index) => (
            <ListItem key={index} divider={true} style={{ justifyContent: 'space-between' }} >
                <Typography variant='body1'>{player.name}</Typography>
                <TextField value={this.state.inputs[index]} style={{ width: '25%' }} type='number' onChange={(e) => this.handleChange(e, index)} />
            </ListItem>
        ));
    }

    handleChange(e, index) {
        const inputs = this.state.inputs.slice();
        inputs[index] = e.target.value.trim();
        this.setState({
            inputs: inputs
        })
    }

    nextRound() {
        const inputs = this.state.inputs.slice();
        const players = this.state.players.slice();
        inputs.forEach((score, index) => {
            players[index].score += parseInt(score);
        });
        this.setState({
            players: players,
            round: this.state.round + 1,
            inputs: Array(this.state.players.length).fill('')
        });
    }

    endGame() {
        const inputs = this.state.inputs.slice();
        const players = this.state.players.slice();
        inputs.forEach((score, index) => {
            players[index].score += parseInt(score);
        });
        this.props.history.push({
            pathname: '/end',
            state: { players: players }
          });
    }

    render() {
        return (
            <div className='content'>
                <div className='header'>
                    <Typography variant='h3'>Rodada {this.state.round}</Typography>
                </div>
                <div className='players'>
                    <List>
                        {this.generateList()}
                    </List>
                    <div className='buttons'>
                        <Button variant="contained" onClick={() => this.endGame()} >Finalizar</Button>
                        <Button variant="contained" color='primary' style={{ marginLeft: '8px' }} onClick={() => this.nextRound()} >Próxima</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Rounds;