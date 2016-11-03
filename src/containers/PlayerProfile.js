import React, { Component } from 'react'
import { connect } from 'react-redux'
import selectPlayer from '../actions/select-player-profile'
import Title from '../components/Title'

export class PlayerProfile extends Component {
  componentDidMount() {
    const { selectPlayer, routeParams } = this.props
    selectPlayer(routeParams.playerId)
  }

  render() {
    if (this.props.player) {
      const { name } = this.props.player

      return (
        <div className="player-profile">
          <Title label={ name } />
        </div>
      )
    }

    return (
      <div className="player-profile">
        <Title label="Player not Found" />
        <p>with id: { this.props.routeParams.playerId }</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    player: state.players.reduce((prev, next) => {
        return (next.playerId === state.playerProfileId) ?
          next : null
      }, null)
  }
}

export default connect(mapStateToProps, { selectPlayer })(PlayerProfile)
