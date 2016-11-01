import React, { Component } from 'react'
import './Player.sass'

class Player extends Component {
  plusOne() {
    const { playerId, onChange } = this.props
    onChange(playerId)
  }

  render() {
    const { name, avatar, points } = this.props

    return (
      <li className="player">
        <div className="avatar">
          <img src={ avatar } />
        </div>
        <div className="label">
          <span className="score">{ points }</span>
          .&nbsp;
          <span className="name">{ name }</span>
        </div>
        <button onClick={ this.plusOne.bind(this) }>+1</button>
      </li>
    )
  }
}

export default Player
