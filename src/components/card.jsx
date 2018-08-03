import React, { Component } from 'react';


export default class Card extends Component {
  render() {
    const {id, name, nickname, rol} = this.props;
    return (
      <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
        <img src={`https://robohash.org/${id}?200x200`} alt={`player-${id}`}/>
        <div>
            <h2>{name} - {nickname}</h2>
            <p>{rol.toString()}</p>
        </div>
      </div>
    )
  }
}
