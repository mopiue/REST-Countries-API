export const SET_SERACH = '@@controls/SET_SERACH'
export const SET_REGION = '@@controls/SET_REGION'
export const CLEAR_CONTROLS = '@@controls/CLEAR_CONTROLS'

export const setSearch = (search) => ({
  type: SET_SERACH,
  payload: search,
})

export const setRegion = (region) => ({
  type: SET_REGION,
  payload: region,
})

export const clearControls = () => ({
  type: CLEAR_CONTROLS,
})
