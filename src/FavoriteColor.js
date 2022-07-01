import React, { useState } from "react"


export default function Car() {
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"

    });



   

    const [araba, setAraba] = useState(["aa", "bb", "cc"]);

    const updateColor = () => {
        setCar(previousState => {
            return { ...previousState, color: "blue" }
        });
    }


    return (
        <>


            <h1>
            {car.color} {car.brand} {car.model} {car.year}
            </h1>


            <h1> my favorite arabalar is {araba[0]}, {araba[1]} ve {araba[2]}</h1>

            <button
                type="button"
                onClick={() => setAraba(["tofas","sahin","lada"])}>araba değiş</button>
            <button
                type="button"
                onClick={updateColor}
            >Blue</button>

            {/* <button
            type="button"
            onClick={()=> setColor("blue")}>Blue</button> */}

        </>
    )

}