import React from 'react';
import { CSVLink } from "react-csv";
 
const headers = [
  { label: "Nume Membru", key: "memberName" },
  { label: "Rol Membru", key: "memberRole" },
 
];
 
const data = [
  { memberName: "Warren Morrow", memberRole: "CAPTAIN" },
  { memberName: "Gwendolyn Galloway", memberRole: "CAPTAIN"},
  { memberName: "Astra Wyatt", memberRole: "BOATSWAIN" },
  { memberName: "Jasmine Wong", memberRole: "BOATSWAIN"},
  
];
 
const csvReport = {
  data: data,
  headers: headers,
  filename: 'Members_Roles.csv'
};
 
function CSV_Export() {
  return (
    <div classname="CSV_Export">
      
      <CSVLink {...csvReport}>Export to CSV</CSVLink>
    </div>
  );
}
 
export default CSV_Export;