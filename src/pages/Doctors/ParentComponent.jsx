// ParentComponent.js

import React, { useState } from 'react';
import DoctorCard from '../../components/Doctors/DoctorCard';
import DoctorDetails from './DoctorDetails';

const ParentComponent = () => {
  // Define state to hold the selected doctor
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  // Function to handle selecting a doctor
  const handleSelectDoctor = (doctor) => {
    setSelectedDoctor(doctor);
  };

  return (
    <div>
      {/* Render DoctorCard component and pass handleSelectDoctor function */}
      <DoctorCard onSelectDoctor={handleSelectDoctor} />
      
      {/* Render DoctorDetails component and pass selectedDoctor as prop */}
      {selectedDoctor && <DoctorDetails selectedDoctor={selectedDoctor} />}
    </div>
  );
};

export default ParentComponent;
