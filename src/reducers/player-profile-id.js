import { SELECT_PLAYER } from '../actions/select-player-profile'

export default (state = null, { type, payload } = {}) => {
  switch(type) {
    case SELECT_PLAYER :
      return parseInt(payload)
    default :
      return state
  }
}
