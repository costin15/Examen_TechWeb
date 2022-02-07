import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Ships from './Ships';
import Crew from './Crew';
import ExportCSV from './ExportCSV';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Routes, Route } from "react-router-dom";
import ShipsForm from './ShipsForm';
import CrewForm from './CrewForm';

ReactDOM.render(
  <HashRouter>
    <Routes>
    <Route path="/" element={<Ships />} />
    <Route path="/ships" element={<Ships />} />
    <Route path="/crewMembers" element={<Crew />} />
    <Route path="/ships/:shipId" element={<ShipsForm />} />
    <Route path="/crewMembers/:crewMembersId" element={<CrewForm />} />
    <Route path="/export" element={<ExportCSV />} />
    </Routes>
  </HashRouter>,
  document.getElementById('root')
);



reportWebVitals();
