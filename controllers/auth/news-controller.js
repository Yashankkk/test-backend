const axios = require('axios');

const API_KEY = 'api_live_ueZ3kbq9YJHcziLyALsAEEIUU4ywc0jp0gg65yJR69XaHOond';

const getCarNews = async (req, res) => {
  try {
    const response = await axios.get(`https://api.apitube.io/v1/news/everything?category=automotive&api_key=YOUR_API_KEY&industry.id=industry.automotive_news`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
      params: {
        "category": "automotive",
      }
    });

    res.status(200).json(response.data);
  } catch (error) {
    if (error.response) {
      console.error('API Error:', error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error('Network Error:', error.message);
      res.status(500).json({ error: 'Server error' });
    }
  }
};

module.exports = getCarNews;