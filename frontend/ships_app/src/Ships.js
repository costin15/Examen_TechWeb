import { useState, useEffect } from "react";
import ShipTable from './ShipTable';

function Ships() {
    const [ships, setShips] = useState([]);
    const loadShips = async () => {
        const response = await fetch('http://localhost:8080/models/Ship');
        if(response.status === 200) {
            setShips(await response.json());
        }
    }
    useEffect(() => loadShips(), []);
    return(
        <> 
        <div>
            {
                ships.map((ship, index) => <ShipTable key={index} ship={ship}/>)
            }
        </div>
        <a href="#/crewMembers">Crew Members</a>

        </>
    );
}
export default Ships;