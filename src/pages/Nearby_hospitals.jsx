import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NearbyHospitals.css'; 
const HospitalComponent = ({ hospitals }) => (
  <div>
    <h2>Hospitals Nearby:</h2>
    <div className="hospital-list">
      {hospitals.map((hospital) => (
        <div key={hospital.id} className="hospital-card">
          <img src={hospital.image} alt={hospital.name} className="hospital-image" />
          <div className="hospital-details">
            <h3>{hospital.name}</h3>
            <p>{hospital.address}</p>
            <p>{hospital.phone}</p>
          </div>
          <button className="book-appointment">Book Appointment</button>
        </div>
      ))}
    </div>
  </div>
);

const HospitalFinder = () => {
  const [city, setCity] = React.useState('');
  const [hospitals, setHospitals] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (!city) {
      setHospitals([]);
      return;
    }
    setLoading(true);
    fetch(`http://localhost:5001/api/hospitals?city=${city}`)
      .then((res) => res.json())
      .then((data) => {
        setHospitals(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [city]);

  return (
    <div>
      <h1 className="heading">Find Hospitals</h1>

      <div className="input-container">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>

      {loading && <p className="loading-message">Loading...</p>}

      <HospitalComponent hospitals={hospitals} />

      <Link to="/Nearby_hospitals" className="link-to-nearby-hospitals">
        See Nearby Hospitals
      </Link>
    </div>
  );
};

export default HospitalFinder;
