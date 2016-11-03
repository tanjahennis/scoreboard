export const SELECT_PLAYER = 'SELECT_PLAYER'

export default (playerId) => {
  return {
    type: SELECT_PLAYER,
    payload: playerId
  }
}
