import { useEffect } from "react";
import { useState } from "react";
import Recepi from "../recepi/Recepi";

const Recepies = () => {
    const [recepies, setRecepies] = useState([])
    useEffect(() => {
        fetch('receips.json')
            .then(res => res.json())
            .then(data => setRecepies(data))
    }, [])
    return (
        <div className="md:w-2/3">
            <div className="grid md:grid-cols-2 gap-5">
                {recepies.map((recepi, index) => <Recepi key={index} recepi={recepi}></Recepi>)}
            </div>
        </div>
    );
};

export default Recepies;