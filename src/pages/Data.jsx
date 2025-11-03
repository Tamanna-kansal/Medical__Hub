import React, { useState } from 'react';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({});
  const [showAllData, setShowAllData] = useState(false);
  const [allFormData, setAllFormData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAllFormData([...allFormData, formData]);
    setFormData({});
  };

  const handleShowAllData = () => {
    setShowAllData(!showAllData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name || ''} onChange={handleChange} />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email || ''} onChange={handleChange} />

        <label htmlFor="date">Date:</label>
        <input type="date" id="date" name="date" value={formData.date || ''} onChange={handleChange} />

        <button type="submit">Submit</button>
      </form>

      {showAllData && (
        <div>
          <h2>All Form Data:</h2>
          <ul>
            {allFormData.map((data, index) => (
              <li key={index}>
                Name: {data.name}, Email: {data.email}, Date: {data.date}
              </li>
            ))}
          </ul>
        </div>
      )}

      <button onClick={handleShowAllData}>
        {showAllData ? 'Hide All Data' : 'Show All Data'}
      </button>
    </div>
  );
};

export default AppointmentForm;