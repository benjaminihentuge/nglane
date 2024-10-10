// src/api/currencyApi.js

// Function to get user country by IP
const getUserCountry = async () => {
    const response = await fetch('http://ip-api.com/json/');
    if (!response.ok) {
      throw new Error('Could not fetch country data');
    }
    return response.json();
  };
  
  // Function to get currency and flag by country code
  const getCurrencyAndFlagByCountryCode = async (countryCode) => {
    const response = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);
    if (!response.ok) {
      throw new Error('Could not fetch currency and flag data');
    }
    return response.json();
  };
  
  export const fetchUserCurrencyAndFlag = async () => {
    // Fetch the user's country data
    const countryData = await getUserCountry();
    
    // Fetch the currency and flag data
    const currencyAndFlagData = await getCurrencyAndFlagByCountryCode(countryData.countryCode);
    
    // Extract the required information
    const currencyCode = Object.keys(currencyAndFlagData[0].currencies)[0]; // Currency code (e.g., USD)
    const flagUrl = currencyAndFlagData[0].flags.png; // Flag URL (e.g., a URL to the flag image)
  
    return { currencyCode, flagUrl };
  };
  