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

    const actualData = use(fetchData);

    return (
        <>
            <div>
                <h1>Visited Country :</h1>

                {

                    visited.map((visited, i) => <span key={i}>{visited} ,</span>)

                }
            </div>
            {
                actualData.map((single, i) => <Data key={i} visitedCountry={visitedCountry} singleData={single} ></Data>)
            }

        </>
    )
}