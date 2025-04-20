import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (searchQuery = 'ReactJS', params = {}) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/search`, {
      ...options,
      params: {
        q: searchQuery,
        part: 'snippet',
        maxResults: 50,
        ...params,
      },
    });
    return data;
  } catch (error) {
    // Capture detailed error information
    console.error('Error fetching data from API:', error.response ? error.response.data : error.message);
    throw error;  // Re-throw the error or handle it appropriately
  }
};
