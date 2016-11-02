import { ADD_PLAYER } from '../actions/add-player'

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case ADD_PLAYER :
      const newPlayer = {
        playerId: nextPlayerId(state),
        name: payload,
        avatar: `https://api.adorable.io/avatars/285/${payload}.png`,
        points: 0
      }
      return state.concat([ newPlayer ])
    default:
      return state
  }
}

export const nextPlayerId = (players) => {
  return players.reduce((previousHighestValue, nextPlayerToCheck) => {
    return (previousHighestValue > nextPlayerToCheck.playerId) ?
      previousHighestValue : nextPlayerToCheck.playerId
  }, 0) + 1
}
