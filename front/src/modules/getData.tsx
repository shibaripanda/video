import fetch from 'node-fetch'

export const getData = async () => {

  const url = `https://api.themoviedb.org/3/discover/movie?`+
    `include_adult=false&`+
    `include_video=false&`+
    `language=en-US&`+
    `page=${sessionStorage.getItem('activePage') ? sessionStorage.getItem('activePage') : 1}&`+
    `primary_release_year=${sessionStorage.getItem('yearFilter') ? sessionStorage.getItem('yearFilter') : ''}&`+
    `sort_by=popularity.desc&`+
    `vote_average.gte=${sessionStorage.getItem('fromFilter') ? sessionStorage.getItem('fromFilter') : ''}&`+
    `vote_average.lte=${sessionStorage.getItem('toFilter') ? sessionStorage.getItem('toFilter') : ''}&`+
    `with_genres=${sessionStorage.getItem('genreFilter') ? sessionStorage.getItem('genreFilter') : ''}`+
    ``

  // const url = `https://api.themoviedb.org/3/discover/movie?`+
  // `include_adult=false&`+
  // `include_video=false&`+
  // `language=en-US&`+
  // `page=1&`+
  // `sort_by=popularity.desc`;
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

