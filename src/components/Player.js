import React, { Component } from 'react'
import { connect } from 'react-redux'
import deletePlayer from '../actions/delete-player'
import Trophy from './Trophy'
import './Player.sass'

export class Player extends Component {
  plusOne() {
    const { playerId, onChange } = this.props
    onChange(playerId)
  }

  deleteMe() {
    const { playerId, deletePlayer } = this.props
    deletePlayer(playerId)
  }

  render() {
    const { name, avatar, points, rank } = this.props

    return (
      <li className="player">
        <div className="avatar">
          <img src={ avatar } />
        </div>
        <div className="label">
          <Trophy points={ points } rank={ rank } />
          <span className="score">{ points }</span>
          .&nbsp;
          <span className="name">{ name }</span>
        </div>
        <button className="plus-one" onClick={ this.plusOne.bind(this) }>+1</button>
        <button className="delete" onClick={ this.deleteMe.bind(this) }>x</button>
      </li>
    )
  }
}

export default connect(null, { deletePlayer })(Player)
