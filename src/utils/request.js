import Http from './http'

function getStarDetail(params) {
  return Http.get('/starDetail', { params }).then(({ starDetail }) => starDetail || {})
}

function getStarList(params) {
  return Http.get('/avatar', { params }).then(({ avatarList }) => avatarList || {})
}

function getSeriesList(params) {
  return Http.get('/series', { params }).then(({ avatarList }) => avatarList || {})
}

function noon() {}

export {
  getStarDetail,
  getStarList,
  getSeriesList,
  noon,
}
