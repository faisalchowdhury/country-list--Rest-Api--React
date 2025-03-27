
import Country from "./country";

export default function Countries() {

    const fetchCountries = async() => {
       const fetchData = await fetch('https://restcountries.com/v3.1/all')
       return fetchData.json();
    }
    
    const fetchData = fetchCountries();
 
   return (
        <>
        
        </>

    )
}