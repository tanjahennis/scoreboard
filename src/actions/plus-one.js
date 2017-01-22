import api from '../middleware/api'
import appLoading from './loading'

export const PLUS_ONE = 'PLUS_ONE'

export default (background = false) => {
  return (dispatch) => {
    if (background) dispatch(appLoading(true))

    api.patch('player')
      .then((playerId) => {
        dispatch(plusOne(playerId))
        if (background) dispatch(appLoading(false))
      })
  }
}

export const plusOne = (playerId) => {
  return {
    type: PLUS_ONE,
    payload: playerId
  }
}
