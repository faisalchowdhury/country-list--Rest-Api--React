import { use } from "react";


export default function Country({ fetchData }) {

    const actualData = use(fetchData);

    return (
        <>

            {
                actualData.map((single, i) => {
                   return ( 
                   <div key={i} className="country">
                        <h4>Country: <span>{single.name.common}</span></h4>
                        <img src={single?.flags?.png} alt="" />
                    </div>)
                })
            }

        </>
    )
}