const axios = require('axios');

const API_KEY = 'pub_801f89928a744473a9298568db0f3487';

const getCarNews = async (req, res) => {
  try {
    const response = await axios.get('https://newsdata.io/api/1/latest', {
      params: {
        apikey: API_KEY,
        q: 'cars',
        country: 'in',
        language: 'en,hi,pa',
        category: 'technology,domestic,environment,world',
      },
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
