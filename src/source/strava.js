const accessTokenPublic = 'c087a02680711eddadbc58c0afe18710766e024f';
const baseUrl = 'https://www.strava.com/api/v3'

export function getAthlete() {
  return fetch(`${url}/athletes`, {
    headers: {
      'Authorization': 'Bearer ${accessTokenPublic}'
    }
  });
};
