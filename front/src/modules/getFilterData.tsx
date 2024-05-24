import { fix } from '../fix.js'
import { axiosCall } from './axiosCall.tsx'


export const getFilterData = async (page: number, genre, year, sort, from, to) => {
    // console.log(genre)
    const urls = 
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

    const url = `${fix.linkserver}/filterdata/${urls}`

    const res = await axiosCall('GET', url, {})
    

    return res.data

}