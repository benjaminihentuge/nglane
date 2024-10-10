// src/api/currencyApi.ts

// Define the type for the user country data from the IP API response
interface UserCountryData {
  countryCode: string;
}

// Define the type for currency and flag data from the RestCountries API response
interface CurrencyAndFlagData {
  currencies: { [key: string]: { name: string; symbol: string } };
  flags: { png: string; svg: string };
}

// src/api/currencyApi.ts

// Function to get user country by IP (using HTTPS)
const getUserCountry = async (): Promise<UserCountryData> => {
  const response = await fetch('https://ip-api.com/json/');
  if (!response.ok) {
    throw new Error('Could not fetch country data');
  }
  return response.json();
};


// Function to get currency and flag by country code
const getCurrencyAndFlagByCountryCode = async (
  countryCode: string
): Promise<CurrencyAndFlagData[]> => {
  const response = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);
  if (!response.ok) {
    throw new Error('Could not fetch currency and flag data');
  }
  return response.json();
};

// Function to fetch the user's currency and flag
export const fetchUserCurrencyAndFlag = async (): Promise<{
  currencyCode: string;
  flagUrl: string;
}> => {
  // Fetch the user's country data
  const countryData = await getUserCountry();

  // Fetch the currency and flag data
  const currencyAndFlagData = await getCurrencyAndFlagByCountryCode(countryData.countryCode);

  // Extract the required information
  const currencyCode = Object.keys(currencyAndFlagData[0].currencies)[0]; // Currency code (e.g., USD)
  const flagUrl = currencyAndFlagData[0].flags.png; // Flag URL (e.g., a URL to the flag image)

  return { currencyCode, flagUrl };
};
