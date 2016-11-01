// src/containers/Scoreboard.js
import React, { Component } from 'react'
import Player from '../components/Player'
import './Scoreboard.sass'

class Scoreboard extends Component {
  renderPlayer(player, index) {
    return <Player key={ index } rank={ index } { ...player } onChange={ this.props.plusOne } />
  }

  render() {
    const { players } = this.props

    return (
      <ul className="scoreboard">
        { players.map(this.renderPlayer.bind(this)) }
      </ul>
    )
  }
}

export default Scoreboard
