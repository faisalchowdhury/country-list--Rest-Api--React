import { use, useState } from "react";
import { Data } from "./Data";





export default function Country({ fetchData, visitedCountrySoFar }) {


    const [visited, setVisited] = useState([])
    const visitedCountry = (name) => {

        const newVisited = [...visited, name]
        setVisited(newVisited);

        visitedCountrySoFar(newVisited)
        // console.log(newVisited)

    }

    // const actualData = use(fetchData);
    const actualData = fetchData;

    return (
        <>

            {
                actualData.map((single, i) => <Data key={i} visitedCountry={visitedCountry} singleData={single} ></Data>)
            }

        </>
    )
}