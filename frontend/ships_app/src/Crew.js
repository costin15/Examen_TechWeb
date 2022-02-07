import { useState, useEffect } from "react";
import CrewTable from './CrewTable';

function Crew() {
    const [crews, setCrew] = useState([]);
    const loadCrew = async () => {
        const response = await fetch('http://localhost:8080/models/CrewMember');
        if(response.status === 200) {
            setCrew(await response.json());
        }
    }
    useEffect(() => loadCrew(), []);
    return(
        <>
               
        <div>
            {
                crews.map((crew, index) => <CrewTable key={index} crew={crew}/>)
            }
        </div>
        <a href="#/ships">Ships</a>
        </>
    );
}
export default Crew;