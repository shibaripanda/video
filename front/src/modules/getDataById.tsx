import { fix } from '../fix.js';
import { axiosCall } from './axiosCall.tsx';

export const getDataById = async (id) => {
   
  const url = `${fix.linkserver}/id/${id}`

    const res = await axiosCall('GET', url, {})
    

    return res.data
}

