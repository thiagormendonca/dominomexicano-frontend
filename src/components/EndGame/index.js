import React, { Component } from 'react';
import { Typography, TableHead, TableRow, TableCell, Table, TableBody } from '@material-ui/core';
import './style.css'

class EndGame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            players: this.props.history.location.state.players
        }
    }

    ascSort(a, b) {
        if (a.score > b.score)
            return 1
        if (a.score < b.score)
            return -1
        return 0
    }

    sortTable() {
        const players = this.state.players.slice();
        return players.sort(this.ascSort)
    }

    render() {
        return (
            <div className='content'>
                <div className='header'>
                    <Typography variant='h3'>Final</Typography>
                </div>
                <div className='body'>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell
                                    align='left'
                                    sortDirection={false}
                                >
                                    Jogador
                                </TableCell>
                                <TableCell
                                    align='right'
                                    sortDirection='asc'
                                >
                                    Pontos
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                this.sortTable().map((player, index) => (
                                    <TableRow key={index}>
                                        <TableCell
                                            align='left'
                                        >
                                            {player.name}
                                        </TableCell>
                                        <TableCell
                                            align='right'
                                        >
                                            {player.score}
                                        </TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </div>
            </div>
        );
    }
}

export default EndGame;