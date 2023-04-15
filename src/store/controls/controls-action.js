export const SET_SERACH = '@@controls/SET_SERACH'
export const SET_REGION = '@@controls/SET_REGION'

export const setSearch = (search) => ({
  type: SET_SERACH,
  payload: search,
})

export const setRegion = (region) => ({
  type: SET_REGION,
  payload: region,
})
