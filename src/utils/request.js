import Axios from 'axios';

const request  = Axios.create({
    baseURL: process.env.REACT_APP_API_URL,
})

export const post = async (url,data)=>{
    const response = await request.post(url,data); 
    return response;
}

