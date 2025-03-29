import { useState } from "react";

export function Data ({singleData }){


     //   Active style

  const active = {
    padding: "10px",
    backgroundColor: "purple",
    border: "none",
    color: "white",
    borderRadius: "5px"
}

const notActive = {
    padding: "10px",
    backgroundColor: "gray",
    border: "none",
    color: "white",
    borderRadius: "5px"
}


const [toggle, setToggle] = useState(false);
const handleClick = (id) => {

    if(toggle){
      setToggle(false )
    }else {
      setToggle(true)
    }

    // // console.log('test')
    // visitedCountry('dsf')
}
      return (
        <div className="country">
        <h4>Country: <span>{singleData.name.common}</span></h4>

        <img src={singleData?.flags?.png} alt="" />
        <h4>Country: <span>{singleData.name.official}</span></h4>
        <p>Capital : {singleData?.capital}</p>
        <span style={{ backgroundColor: "green", color: '#fff' }}>{singleData?.independent && "Independent"}</span>
        <span style={{ backgroundColor: "red", color: '#fff' }}>{singleData?.independent || "Not Independent"}</span> <br />
        <button style={toggle ? notActive : active} onClick={() => handleClick()}>{toggle ? "Visited" : "Not Visited"}</button>
    </div>
      )
}