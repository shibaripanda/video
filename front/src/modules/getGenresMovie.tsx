import { fix } from '../fix.js';
import { axiosCall } from './axiosCall.tsx';

export const getGenresMovie = async () => {

    const url = `${fix.linkserver}`

    const res = await axiosCall('GET', url, {})

    return res.data
}