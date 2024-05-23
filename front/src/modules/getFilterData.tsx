import fetch from 'node-fetch'


export const getFilterData = async (setData: any, page: number, genre, year, sort) => {

    const url = `https://api.themoviedb.org/3/discover/movie?page=${page}&primary_release_year=${year}&sort_by=popularity.desc&vote_average.gte=5&vote_average.lte=5&with_genres=${genre}`;
    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NWQ0ODYwNjYxNDI2MWM4NWYxZjQxMzU4OTk2ODhiNCIsInN1YiI6IjY2NDhjNTlmYjZmNjA5ZWFhYjBhYzI1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uFJWTWU2JyBF2f5rK9hMdobYu2HW5BbniM7tamaP6O4'
    }
    };

    await fetch(url, options)
    .then(res => res.json())
    .then(json => {
        console.log(json)
      setData(json)
    })
    .catch(err => console.error('error:' + err))

}