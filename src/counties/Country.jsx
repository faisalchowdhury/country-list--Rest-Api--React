import { use, useState } from "react";
import { Data } from "./Data";





export default function Country({ fetchData }) {
    
    const actualData = use(fetchData);
    // console.log(visitedCountrySoFar());

    // const [visited , setVisited] = useState([])
    
    // const visitedCountry = (name) => {
      
    //     const newVisited = [...visited , name]
    //     setVisited(newVisited);

        // visitedCountrySoFar(newVisited)
        // console.log(newVisited)
        
    // }
    

    return (
        <>

            {
                actualData.map((single, i) => <Data key={i}  singleData={single} ></Data>)
            }

        </>
    )
}