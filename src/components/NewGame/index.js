import React, { Component } from 'react';
import { Typography, Button } from '@material-ui/core';
import './styles.css';
import InputPlayer from '../InputPlayer';

class NewGame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: ['']
        };

        this.handleChange = this.handleChange.bind(this);
        this.createGame = this.createGame.bind(this);
        this.addPlayer = this.addPlayer.bind(this);
    }

    addPlayer() {
        const inputs = this.state.inputs.slice();
        this.setState({
            inputs: inputs.concat('')
        });
    }

    removePlayer(index) {
        const inputs = this.state.inputs.slice();
        inputs.splice(index, 1);
        this.setState({
            inputs: inputs
        });
    }

    handleChange(e, index) {
        const inputs = this.state.inputs.slice();
        inputs[index] = e.target.value;
        this.setState({
            inputs: inputs
        })
    }

    createGame() {
        const inputs = this.state.inputs.slice();
        let players = [];
        inputs.forEach((name) => {
            if (name)
                players = players.concat({
                    name: name.trim(),
                    score: 0
                })
        });
        this.props.history.push({
            pathname: '/game',
            state: { players: players }
          });
    }

    renderInputList() {
        return (this.state.inputs.map((name, index) => (
            <InputPlayer key={index} handleChange={(e) => this.handleChange(e, index)} value={this.state.inputs[index]} addPlayer={this.addPlayer} removePlayer={() => this.removePlayer(index)} showAddButton={index + 1 === this.state.inputs.length ? true : false} />
        )));
    }

    render() {
        return (
            <div className='content'>
                <div className='header'>
                    <Typography variant='h3'>Novo jogo</Typography>
                </div>
                <div className='players'>
                        <Typography variant='h6'>Jogadores</Typography>
                        <div className='inputList'>
                            {
                                this.renderInputList()                                 
                            }
                        </div>
                        <Button variant='contained' style={{ marginTop: '10px' }} color='primary' onClick={this.createGame}>Criar</Button>
                </div>
            </div>
        );
    }
}

export default NewGame;