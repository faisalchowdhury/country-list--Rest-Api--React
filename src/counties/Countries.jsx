import { Suspense } from "react";
import Country from "./country";
import "./css/country.css"

export default function Countries() {

    const fetchCountries = async() => {
       const fetchData = await fetch('https://restcountries.com/v3.1/all')
       return fetchData.json();
    }
    
    const fetchData = fetchCountries();
 
   return (
        <>
        <div className="country-list">
        <Suspense fallback="Loading....">
         <Country fetchData={fetchData}></Country>
        </Suspense>
        </div>
        </>

    )
}