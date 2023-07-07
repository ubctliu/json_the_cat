const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    const data = JSON.parse(body)[0];
    if (error) {
      callback(`Error has occurred! Error code: ${error}`, null);
      return;
    }

    if (data === undefined) {
      callback(`No breeds were found matching ${breedName}, try a different search term?`, null);
      return;
    }

    callback(null, data.description);
  });
};

module.exports = { fetchBreedDescription };