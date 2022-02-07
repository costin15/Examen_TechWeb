import React, {useState, useEffect} from 'react';
import {useParams, useNavigate} from "react-router-dom";
import './confirmDialog';

function ShipsForm(props) {
	const navigate = useNavigate();
	const {shipId} = useParams();
	const [ship, setShip] = useState({
		Nume: '',
		Displacement: '',
        
	});
	const loadShip = async (shipId) => {
		if (shipId && shipId !== 'new') {
			const response = await fetch(`http://localhost:8080/models/Ship/${shipId}`);
			if (response.status === 200) {
				setShip(await response.json());
			}
		}
	}
	useEffect(() => loadShip(shipId), [shipId]);
	async function saveShip() {
		if (shipId === 'new') {
			const response = await fetch('http://localhost:8080/models/Ship/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(ship)
			});
			if (response.status === 201) {
				navigate('/');
			}
		} else {
			const response = await fetch(`http://localhost:8080/models/Ship/${shipId}`, {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(ship)
			});
			if (response.status === 204) {
				navigate('/');
			}
		}
	}
	async function deleteShip() {
		if (shipId && shipId !== 'new'
			&& await document.getElementById('dialog')
				.confirmDialog('Are you sure you want to remove this ship?')) {
			const response = await fetch(`http://localhost:8080/models/Ship${shipId}`, {
				method: 'DELETE'
			});
			if (response.status === 204) {
				navigate('/');
			}
		}
	}
	function set(property, value) {
		const record = {...ship};
		record[property] = value;
		setShip(record);
	}
	return (
		<div className="form">
			<h1>Ships</h1>
			<form onSubmit={saveShip} onReset={() => navigate('/')}>
				<label>Nume nava</label>
				<input type="text" value={ship.Nume}
					onChange={event => set('Nume', event.target.value)}/>
				<label>Displacement</label>
				<input type="text" value={ship.Displacement}
					onChange={event => set('Displacement', event.target.value)}/>
                
                
				<div className="buttons">
					<input type="submit" value="Save"/>
					{shipId && shipId !== 'new' && <input type="button" className="delete"
						value="Delete" onClick={deleteShip}/>}
					<input type="reset" value="Cancel"/>
				</div>
			</form>
			<div id="dialog" className="modal-dialog"/>
		</div>		
	);
}

export default ShipsForm;