import { ADD_PLAYER } from '../actions/add-player'

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case ADD_PLAYER :
      return state.concat(payload)
    default:
      return state
  }
}
