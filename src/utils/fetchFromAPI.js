// src/utils/fetchFromAPI.js or src/api/index.js
import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

// 🔍 Log your API key to verify if it's loaded correctly
console.log('API Key:', process.env.REACT_APP_RAPID_API_KEY);  // Add this line here

const headers = {
  'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
  'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
};

export const fetchFromAPI = async (searchQuery = 'ReactJS', params = {}) => {
  try {
    const response = await axios.get(`${BASE_URL}/search`, {
      headers,
      params: {
        part: 'snippet',
        q: searchQuery,
        maxResults: 50,
        ...params,
      },
    });
    return response.data;
  } catch (error) {
    console.error('API Error:', error.response?.data || error.message);
    throw error;
  }
};
