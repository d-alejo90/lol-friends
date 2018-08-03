import React, { Component } from 'react';
import Card from '../components/card';
import { players } from '../players';

export default class CardList extends Component {
  render() {
    return (
      <div>
        {
            players.map((player) => {
                return <Card 
                    key={player.nickname} 
                    id={player.id} 
                    name={player.name}
                    nickname={player.nickname}
                    rol={player.rol}
                />;
            })
        }
      </div>
    )
  }
}
