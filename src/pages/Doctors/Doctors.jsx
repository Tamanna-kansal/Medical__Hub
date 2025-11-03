// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import DoctorCard from '../../components/Doctors/DoctorCard';

// const Doctors = () => {
//   const [selectedSpecialization, setSelectedSpecialization] = useState('');
//   const [doctors, setDoctors] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const specializations = [
//     'Cardiologist', 'Dermatologist', 'Pediatrician',
//     'Gynecologist', 'Orthopedist', 'Urologist',
//     'Neurologist', 'Ophthalmologist', 'Dentist'
//   ];

//   useEffect(() => {
//     if (!selectedSpecialization) return setDoctors([]);

//     const fetchDoctors = async () => {
//       setLoading(true);
//       try {
//         const res = await axios.get(`http://localhost:5001/api/doctors?specialization=${selectedSpecialization}`);
//         setDoctors(res.data);
//       } catch {
//         setError('Error fetching doctors.');
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchDoctors();
//   }, [selectedSpecialization]);

//   return (
//     <>
//       <section className="bg-[#fff9ea] p-4 h-96"> 
//         <div className="text-center">
//           <h2 className="text-2xl font-bold">Find a Doctor</h2>
//           <select
//             value={selectedSpecialization}
//             onChange={(e) => setSelectedSpecialization(e.target.value)}
//             className="p-2 mt-4 w-full max-w-md mx-auto block bg-white border rounded"
//           >
//             <option value="">Select Specialization</option>
//             {specializations.map(spec => (
//               <option key={spec} value={spec}>{spec}</option>
//             ))}
//           </select>
//         </div>
//       </section>

//       <section className="p-4">
//         {loading && <p>Loading...</p>}
//         {error && <p className="text-red-500">{error}</p>}
//         <div className="grid md:grid-cols-3 gap-4">
//           {doctors.map(doctor => (
//             <div key={doctor.id} style={{ height: '100%', overflow: 'hidden' }}>
//               <DoctorCard doctor={doctor} />
//             </div>
//           ))}
//         </div>
//       </section>

//       <style>
//         {`
//           .doctor-card img {
//             width: 100%;
//             height: 800px;
//             object-fit: contain;
//           }
//         `}
//       </style>
//     </>
//   );
// };

// export default Doctors;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DoctorCard from '../../components/Doctors/DoctorCard';

const Doctors = () => {
  const [selectedSpecialization, setSelectedSpecialization] = useState('');
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const specializations = [
    "Cardiology",
    "Dermatology",
    "Neurology"
  ];

  useEffect(() => {
    if (!selectedSpecialization) {
      setDoctors([]);
      return;
    }

    const fetchDoctors = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await axios.get(`http://localhost:5000/api/doctors`, {
          params: { specialization: selectedSpecialization }
        });

        // ✅ Make sure doctors is always an array
        setDoctors(Array.isArray(res.data) ? res.data : []);
      } catch {
        setError('Error fetching doctors.');
        setDoctors([]); // ✅ Prevent crash
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, [selectedSpecialization]);

  return (
    <>
      <section className="bg-[#fff9ea] p-4 h-96 flex flex-col justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Find a Doctor</h2>

          <select
            value={selectedSpecialization}
            onChange={(e) => setSelectedSpecialization(e.target.value)}
            className="p-2 mt-4 w-full max-w-md mx-auto block bg-white border rounded"
          >
            <option value="">Select Specialization</option>
            {specializations.map(spec => (
              <option key={spec} value={spec}>
                {spec}
              </option>
            ))}
          </select>
        </div>
      </section>

      <section className="p-4">
        {loading && <p className="text-gray-600 text-center">Loading...</p>}
        {error && <p className="text-red-500 text-center">{error}</p>}

        {!loading && selectedSpecialization && doctors.length === 0 && (
          <p className="text-center text-gray-600">No doctors found.</p>
        )}

        <div className="grid md:grid-cols-3 gap-4">
          {doctors.map((doctor) => (
            <div key={doctor._id}>
              <DoctorCard doctor={doctor} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Doctors;
