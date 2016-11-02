export const DELETE_PLAYER = 'DELETE_PLAYER'

export default (playerId) => {
  return {
    type: DELETE_PLAYER,
    payload: playerId
  }
}
