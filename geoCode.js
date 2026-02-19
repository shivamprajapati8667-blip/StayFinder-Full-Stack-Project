const Listing = require("./models/listing.js");
const axios = require("axios");


async function getCoordinates(location, country) {
  try {
    const response = await axios.get(
  "https://nominatim.openstreetmap.org/search",
  {
    params: {
      q: `${location}, ${country}`,
      format: "json",
      limit: 1,
      email: "shivamprajapati8667@gmail.com"
    },
    headers: {
      "User-Agent": "StayFinder-App/1.0",
      "Accept-Language": "en",
    },
  }
);

    if (response.data.length > 0) {
      return {
        lat: parseFloat(response.data[0].lat),
        lng: parseFloat(response.data[0].lon),
      };
    }

    return null;
  } catch (err) {
    console.error("Geocoding error:", err.message);
    return null;
  }
}

module.exports = getCoordinates;
