import React from "react";
export const countries = [
  { code: "US", name: "United States", currency: "USD" },
  { code: "IN", name: "India", currency: "INR" },
  { code: "EU", name: "Europe", currency: "EUR" },
  { code: "CA", name: "Canada", currency: "CAD" }, // Added Canada
  // Add more countries as needed
];
const CountrySelector = ({ selectedCountry, onSelectCountry }) => {
  return (
    <select
      value={selectedCountry}
      onChange={(e) => onSelectCountry(e.target.value)}
      className="p-2 rounded-md border border-gray-300"
    >
      {countries.map((country) => (
        <option key={country.code} value={country.code}>
          {country.name}
        </option>
      ))}
    </select>
  );
};

export default CountrySelector;
