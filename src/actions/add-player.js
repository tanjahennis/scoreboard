// src/actions/add-player.js

export const ADD_PLAYER = 'ADD_PLAYER'

export default (name) => {
  return {
    type: ADD_PLAYER,
    payload: name
  }
}
