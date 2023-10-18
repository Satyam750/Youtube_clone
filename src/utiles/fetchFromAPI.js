import axios from "axios"

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
    url: BASE_URL,
    params: {
        maxResults: '50'
      },
      headers: {
        'X-RapidAPI-Key': '9b49701ef2msh0cf168f47fc890fp1429ccjsnfefff9a2bda6',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
      }
    };
  
    export const fetchFromAPI = async (url) =>{
      const {data} =   await axios.get(`${BASE_URL}/${url}`, options);
      return data
    }