import React, { Component } from 'react'
import './Player.sass'

class Player extends Component {
  render() {
    const { name, avatar, points } = this.props

    return (
      <li className="player">
        <div className="avatar">
          <img src={ avatar } />
        </div>
        <div className="label">
          <span className="points">{ points }</span>
          .&nbsp;
          <span className="name">{ name }</span>
        </div>
      </li>
    )
  }
}

export default Player
