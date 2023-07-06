const request = require('request');
const input = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${input[0]}`, (error, response, body) => {
  if (error) {
    console.log("Error encountered when fetching resource. Error:", error);
    return;
  } else {
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log("No breed matching those terms was found. Try again?");
      return;
    }

    console.log("Response received! Response code:", response && response.statusCode);
    console.log(data);
  }
});