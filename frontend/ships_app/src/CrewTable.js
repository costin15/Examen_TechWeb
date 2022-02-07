function CrewTable(props) {
    const {crew} = props;
    return(
        <>
        <div>
            <table class="table table-striped">
                <tr>
                <th>Nume membru echipaj</th>
                
                <th>Rol</th>
                
                </tr>
                <tr>
                    <td>{crew.Name}</td>
                    <td>{crew.Rol}</td>
                   
                </tr>
                
            </table>
        </div>
        <a href={`#/crewMembers/${props.crew.id}`}>{props.crew.Name}</a>
        </>
    );
}
export default CrewTable;