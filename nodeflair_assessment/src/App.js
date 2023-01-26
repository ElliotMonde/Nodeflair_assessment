// By Elliot Phua for Nodeflair Assessment, https://github.com/ElliotMonde
import React, { useState } from 'react';
import './App.css';
import JobListingCardContainer from './components/jobListingContainerComponents/JobListingCardContainer';
import JobDetailedInformation from './components/JobDetailedInformation'

function App() {
  const [currChildFocus, setCurrChildFocus] = useState(0);
  function handleChildFocus(key) {
    setCurrChildFocus(key);
  }
  return (
    <div className="App">
      <JobListingCardContainer whenClicked={handleChildFocus} />
      <JobDetailedInformation jobKey={currChildFocus} />
    </div>
  );
}

export default App;
