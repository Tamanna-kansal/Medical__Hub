// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// const DoctorDetails = () => {
//   const { id } = useParams();
//   const [doctor, setDoctor] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchDoctor = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5001/api/doctors/${id}`);
//         setDoctor(response.data);
//       } catch (err) {
//         setError('Failed to load doctor details');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDoctor();
//   }, [id]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p className="text-red-600">{error}</p>;

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">{doctor.name}</h2>
//       <p><strong>Specialization:</strong> {doctor.specialization}</p>
//       <p><strong>Bio:</strong> {doctor.bio}</p>
//       <p><strong>About:</strong> {doctor.about}</p>
//       <p><strong>Phone:</strong> {doctor.phone}</p>
//       <p><strong>Ticket Price:</strong> ₹{doctor.ticket_price}</p>
//       <p><strong>Rating:</strong> {doctor.average_rating} ⭐ ({doctor.total_rating} reviews)</p>
//     </div>
//   );
// };

// export default DoctorDetails;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// ✅ Correct path because DoctorAbout.jsx is inside pages/Doctors/
import DoctorAbout from "./DoctorAbout";

const DoctorDetails = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/doctors/${id}`);

        // ✅ Backend returning doctor object
        setDoctor(res.data.doctor || res.data);
      } catch (err) {
        setError("Failed to load doctor details");
      } finally {
        setLoading(false);
      }
    };

    fetchDoctor();
  }, [id]);

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (error) return <p className="text-center text-red-600 py-10">{error}</p>;

  return (
    <div className="px-6 py-10 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">

        {/* ✅ Doctor Photo */}
        <img
          src={doctor.photo || "/default-doctor.png"}
          alt={doctor.name}
          className="w-48 h-48 rounded-full object-cover shadow-lg"
        />

        {/* ✅ Doctor Info */}
        <div>
          <h2 className="text-3xl font-bold mb-2">{doctor.name}</h2>
          <p className="text-lg text-gray-600">{doctor.specialization}</p>

          <div className="mt-4 space-y-1 text-gray-700">
            <p><strong>Email:</strong> {doctor.email}</p>
            <p><strong>Phone:</strong> {doctor.phone}</p>
            <p><strong>Status:</strong> {doctor.is_approved}</p>
          </div>
        </div>
      </div>

      {/* ✅ About Section */}
      <div className="mt-10">
        <DoctorAbout doctor={doctor} />
      </div>
    </div>
  );
};

export default DoctorDetails;
