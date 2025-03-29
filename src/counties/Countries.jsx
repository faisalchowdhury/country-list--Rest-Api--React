import { Suspense, useState } from "react";
import Country from "./Country";
import "./css/country.css"

export default function Countries() {

    const fetchCountries = async() => {
       const fetchData = await fetch('https://restcountries.com/v3.1/all')
       console.log('test')
       return fetchData.json();
       
    }
    
    const fetchData = fetchCountries();
 
   
    const [country, setCountry] =useState([]);

   function visitedCountrySoFar(visitedCountry,toggle){
    setCountry(visitedCountry);
   }
   
   
   console.log(country)

   return (
        <>
        
          {/* <h1>Visited Country :</h1> 
          { 
            
            country.map((visited , i) => <span key={i}>{visited} ,</span>)

          }    */}
        <div className="country-list">
        
        <Suspense fallback="Loading....">
         <Country fetchData={fetchData} ></Country>
        </Suspense>
        </div>
        </>

    )
}