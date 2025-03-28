import { use } from "react";
import { Data } from "./Data";


export default function Country({ fetchData }) {

    const actualData = use(fetchData);
           
   

  
    return (
        <>

            {
                actualData.map((single, i) => <Data key={i} singleData={single} ></Data>)
            }

        </>
    )
}