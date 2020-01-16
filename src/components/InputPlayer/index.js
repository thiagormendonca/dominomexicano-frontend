import React from 'react';
import { TextField, IconButton } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import './styles.css'

function InputPlayer(props) {
    const input = (
        <div className='input'>
            <TextField label='Nome' value={props.value} onChange={props.handleChange} autoFocus />
            {
                props.showAddButton ?
                <IconButton aria-label='Adicionar jogador' onClick={props.addPlayer}>
                    <AddCircleIcon />
                </IconButton> :
                <IconButton aria-label='Remover jogador' onClick={props.removePlayer}>
                    <RemoveCircleIcon />
                </IconButton>
            }
        </div>
    );
    return input;
}

export default InputPlayer;