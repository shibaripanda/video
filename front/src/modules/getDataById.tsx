import fetch from 'node-fetch'

export const getDataById = async (id) => {
   
  const url = `https://api.themoviedb.org/3/movie/${id}?append_to_response=videos%2Cimages`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NWQ0ODYwNjYxNDI2MWM4NWYxZjQxMzU4OTk2ODhiNCIsInN1YiI6IjY2NDhjNTlmYjZmNjA5ZWFhYjBhYzI1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uFJWTWU2JyBF2f5rK9hMdobYu2HW5BbniM7tamaP6O4'
    }
  };

const res = await fetch(url, options)
  .then(res => res.json())
  .then(json => {
    return json
  })
  .catch(err => console.error('error:' + err));

  return res
}

