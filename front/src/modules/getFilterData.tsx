import fetch from 'node-fetch'


export const getFilterData = async (page: number, genre, year, sort, from, to) => {
    console.log(genre)
    const url = `https://api.themoviedb.org/3/discover/movie?`+
    `include_adult=false&`+
    `include_video=false&`+
    `language=en-US&`+
    `page=${page}&`+
    `primary_release_year=${year}&`+
    `sort_by=popularity.desc&`+
    `vote_average.gte=${from}&`+
    `vote_average.lte=${to}&`+
    `with_genres=${genre}`+
    ``
    console.log(url)
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
    .catch(err => console.error('error:' + err))

    return res

}