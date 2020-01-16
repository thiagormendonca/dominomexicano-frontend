import React, { Component } from 'react';
import './styles.css';
import { Switch, Route } from 'react-router-dom';
import NewGame from '../../components/NewGame';
import Rounds from '../../components/Rounds'
import EndGame from '../../components/EndGame';

class Box extends Component {

    render() {
        return (
            <div className='mainBox'>
                <Switch>
                    <Route exact path='/' component={NewGame} />
                    <Route exact path='/game' component={Rounds} />
                    <Route exact path='/end' component={EndGame} />
                </Switch>
            </div>
        );
    }
}

export default Box;