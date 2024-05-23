import fetch from 'node-fetch'

export const getData = async () => {
    // const dataAr = [
    //     {
    //       title: 'The Green Mile',
    //       year: 1999,
    //       rate: 9.3,
    //       view: '2.9M',
    //       genre: ['Drama', 'Crime', 'Fantasy']
    //     },
    //     {
    //       title: 'The Green Mile1',
    //       year: 2000,
    //       rate: 9.3,
    //       view: '2.9M',
    //       genre: ['Drama', 'Crime', 'Fantasy']
    //     },
    //     {
    //       title: 'The Green Mile2',
    //       year: 1986,
    //       rate: 9.3,
    //       view: '2.9M',
    //       genre: ['Drama', 'Crime', 'Fantasy']
    //     },
    //     {
    //       title: 'The Green Mile3',
    //       year: 2017,
    //       rate: 9.3,
    //       view: '2.9M',
    //       genre: ['Drama', 'Crime', 'Fantasy']
    //     },
    //     {
    //       title: 'The Green Mile4',
    //       year: 2022,
    //       rate: 9.3,
    //       view: '2.9M',
    //       genre: ['Drama', 'Crime', 'Fantasy']
    //     },
    //     {
    //       title: 'The Green Mile5',
    //       year: 1943,
    //       rate: 9.3,
    //       view: '2.9M',
    //       genre: ['Drama', 'Crime', 'Fantasy']
    //     },
    //     {
    //       title: 'The Green Mile6',
    //       year: 1995,
    //       rate: 9.3,
    //       view: '2.9M',
    //       genre: ['Drama', 'Crime', 'Fantasy']
    //     },
    //     {
    //       title: 'The Green Mile7',
    //       year: 1999,
    //       rate: 9.3,
    //       view: '2.9M',
    //       genre: ['Drama', 'Crime', 'Fantasy']
    //     },
    //     {
    //       title: 'The Green Mile8',
    //       year: 2000,
    //       rate: 9.3,
    //       view: '2.9M',
    //       genre: ['Drama', 'Crime', 'Fantasy']
    //     },
    //     {
    //       title: 'The Green Mile9',
    //       year: 1999,
    //       rate: 9.3,
    //       view: '2.9M',
    //       genre: ['Drama', 'Crime', 'Fantasy']
    //     },
    //     {
    //       title: 'The Green Mile10',
    //       year: 1991,
    //       rate: 9.3,
    //       view: '2.9M',
    //       genre: ['Drama', 'Crime', 'Fantasy']
    //     },
    //     {
    //       title: 'The Green Mile11',
    //       year: 1999,
    //       rate: 9.3,
    //       view: '2.9M',
    //       genre: ['Drama', 'Crime', 'Fantasy']
    //     }
    // ]

  const url = `https://api.themoviedb.org/3/discover/movie?`+
  `include_adult=false&`+
  `include_video=false&`+
  `language=en-US&`+
  `page=1&`+
  `sort_by=popularity.desc`;
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
    .catch(err => console.error('error:' + err));

    return res
}

