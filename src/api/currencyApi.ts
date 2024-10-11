// Function to get user country by IP using ipdata.co
const getUserCountry = async () => {
  const apiKey = '95ece3baa2e731568576ae6648b168de71a0a32433b9b60cb83547e9'; // Replace with your actual ipdata.co API key
  const response = await fetch(`https://api.ipdata.co?api-key=${apiKey}`);
  
  if (!response.ok) {
    throw new Error('Could not fetch country data');
  }

  const data = await response.json();
  return {
    countryCode: data.country_code, // Extract the country code
    countryName: data.country_name, // Optionally, you can get the country name
  };
};

// Function to get currency and flag by country code
const getCurrencyAndFlagByCountryCode = async (countryCode: string) => {
  const response = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);
  
  if (!response.ok) {
    throw new Error('Could not fetch currency and flag data');
  }

  const data = await response.json();
  const currencyCode = Object.keys(data[0].currencies)[0]; // Extract currency code
  const flagUrl = data[0].flags.png; // Extract flag URL

  return { currencyCode, flagUrl };
};

// Fetch user currency and flag
export const fetchUserCurrencyAndFlag = async () => {
  const userCountry = await getUserCountry(); // Get country based on IP
  
  const currencyAndFlag = await getCurrencyAndFlagByCountryCode(userCountry.countryCode); // Get currency and flag using country code
  
  return currencyAndFlag; // Return currency code and flag URL
};
