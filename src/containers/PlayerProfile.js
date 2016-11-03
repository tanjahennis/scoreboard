import React, { Component } from 'react'
import Title from '../components/Title'

class PlayerProfile extends Component {
  render() {
    return (
      <div>
        <Title label="Player Profile" />
        <p>{ this.props.routeParams.playerId }</p>
      </div>
    )
  }
}

export default PlayerProfile
