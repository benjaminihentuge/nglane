"use client"; // Ensure this is a client-side component
import React, { useState, useEffect } from 'react';
import { fetchUserCurrencyAndFlag } from '../../src/api/currencyApi'; // Adjust the import path if necessary

const TopBar = () => {
  const [currency, setCurrency] = useState('');      // Holds the currency code
  const [flagUrl, setFlagUrl] = useState('');        // Holds the flag URL
  const [loading, setLoading] = useState(true);      // Loading state

  useEffect(() => {
    const getCurrencyAndFlag = async () => {
      try {
        const { currencyCode, flagUrl } = await fetchUserCurrencyAndFlag();
        setCurrency(currencyCode);
        setFlagUrl(flagUrl);
      } catch (error) {
        console.error('Error fetching currency and flag:', error);
        setCurrency('USD'); // Fallback currency
        setFlagUrl('/path/to/default-flag.png'); // Fallback flag
      } finally {
        setLoading(false);  // Stop loading after API call completes
      }
    };

    getCurrencyAndFlag();
  }, []);

  // Render a loading state while fetching data
  if (loading) {
    return (
      <div className="bg-black text-white p-2 text-sm flex justify-end items-center fixed top-0 left-0 right-0 z-30">
        <span>Loading...</span>
      </div>
    );
  }

  return (
    <div className="bg-black text-white p-2 text-sm flex justify-end items-center fixed top-0 left-0 right-0 z-30">
      <div className="flex items-center space-x-2">
        {flagUrl && <img src={flagUrl} alt="Flag" className="w-6 h-4" />}
        <span>{currency}</span>
      </div>
    </div>
  );
};

export default TopBar;
