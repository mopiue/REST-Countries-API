import {
  SET_LOADING,
  SET_ERROR,
  SET_COUNTRY,
  CLEAR_DETAILS,
} from './details-actions'

const inititalState = {
  currentCountry: null,
  status: 'idle',
  error: null,
}

export const detailsReducer = (state = inititalState, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        error: null,
        status: 'loading',
      }

    case SET_ERROR:
      return {
        ...state,
        status: 'rejected',
        error: payload,
      }

    case SET_COUNTRY:
      return {
        ...state,
        status: 'received',
        currentCountry: payload,
      }

    case CLEAR_DETAILS:
      return inititalState

    default:
      return state
  }
}
