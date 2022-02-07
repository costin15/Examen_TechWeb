function ShipTable(props) {
    const {ship} = props;
    return(
        <>
        <div>
            <table class="table table-striped">
                <tr>
                <th>Nume Nava</th>
                
                <th>Displacement</th>
                
                </tr>
                <tr>
                    <td>{ship.Nume}</td>
                    <td>{ship.Displacement}</td>
                   
                </tr>
                
            </table>
        </div>

        <a href={`#/ships/${props.ship.id}`}>{props.ship.Nume}</a>
        </>
    );
}
export default ShipTable;