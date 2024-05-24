import { fix } from '../fix.js';
import { axiosCall } from './axiosCall.tsx';

export const getData = async () => {

  const urls =
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
    const url = `${fix.linkserver}/filter/${urls}`

    const res = await axiosCall('GET', url, {})
    

    return res.data
}

