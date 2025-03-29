import { useState, useEffect } from "react";
import Country from "./Country";
import "./css/country.css";

export default function Countries() {
  const [countriesData, setCountriesData] = useState(null);
  const [country, setCountry] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      console.log("test");
      const data = await response.json();
      setCountriesData(data);
    };

    fetchCountries();
  }, []);

  function visitedCountrySoFar(visitedCountry) {
    setCountry(visitedCountry);
  }

  console.log(country);

  if (!countriesData) {
    return <div>Loading....</div>;
  }

  return (
    <>
      <h1>Visited Country :</h1>
      {country.map((visited, i) => (
        <span key={i}>{visited}, </span>
      ))}
      <div className="country-list">
        <Country fetchData={countriesData} visitedCountrySoFar={visitedCountrySoFar} />
      </div>
    </>
  );
}