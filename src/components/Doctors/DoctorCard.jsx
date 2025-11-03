// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import starIcon from '../../assets/images/Star.png';

// const DoctorCard = ({ doctor }) => {
//   const navigate = useNavigate();

//   return (
//   <div
//     onClick={() => navigate(`/doctors/${doctor.id}`)}
//     className="bg-white border border-gray-200 rounded-2xl p-6 mt-10 shadow-md hover:shadow-xl transition duration-300 ease-in-out cursor-pointer max-w-xs mx-auto flex flex-col md:flex-row gap-6 items-start"
//   >
//     <img
//       src={doctor.photo || "https://via.placeholder.com/150"}
//       alt={doctor.name}
//       className="w-200 h-200 object-cover rounded-full border shadow-sm"
//     />

//     <div className="flex-1">
//       <h2 className="text-2xl font-bold text-gray-800 mb-2">{doctor.name}</h2>
//       <p className="text-sm text-gray-500 mb-1">
//         <span className="font-semibold text-gray-700">Specialization:</span> {doctor.specialization}
//       </p>
//       <p className="text-sm text-gray-500 mb-1">
//         <span className="font-semibold text-gray-700">Bio:</span> {doctor.bio}
//       </p>
//       <p className="text-sm text-gray-500 mb-1">
//         <span className="font-semibold text-gray-700">About:</span> {doctor.about}
//       </p>
//       <p className="text-sm text-gray-500 mb-1">
//         <span className="font-semibold text-gray-700">Phone:</span> {doctor.phone}
//       </p>
//       <p className="text-sm text-gray-500 mb-1">
//         <span className="font-semibold text-gray-700">Ticket Price:</span> ₹{doctor.ticket_price?.toFixed(2)}
//       </p>
//       <div className="flex items-center gap-2 mt-2">
//         <img src={starIcon} alt="Star" className="w-4 h-4" />
//         <span className="text-sm font-medium text-gray-700">
//           {doctor.average_rating?.toFixed(1) || 'N/A'} ({doctor.review_count || 0} reviews)
//         </span>
//       </div>
//     </div>
//   </div>
// );}

// export default DoctorCard;



// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import starIcon from '../../assets/images/Star.png';

// const DoctorCard = ({ doctor }) => {
//   const navigate = useNavigate();

//   return (
//     <div
//       onClick={() => navigate(`/doctors/${doctor._id}`)}
//       className="bg-white border border-gray-200 rounded-2xl p-6 mt-10 shadow-md hover:shadow-xl transition duration-300 ease-in-out cursor-pointer max-w-xs mx-auto flex flex-col md:flex-row gap-6 items-start"
//     >
//       <img
//         src={doctor.photo || "https://via.placeholder.com/150"}
//         alt={doctor.name}
//         className="w-32 h-32 object-cover rounded-full border shadow-sm"
//       />

//       <div className="flex-1">
//         <h2 className="text-2xl font-bold text-gray-800 mb-2">{doctor.name}</h2>

//         <p className="text-sm text-gray-500 mb-1">
//           <span className="font-semibold text-gray-700">Specialization:</span> {doctor.specialization}
//         </p>

//         <p className="text-sm text-gray-500 mb-1">
//           <span className="font-semibold text-gray-700">Bio:</span> {doctor.bio}
//         </p>

//         <p className="text-sm text-gray-500 mb-1">
//           <span className="font-semibold text-gray-700">About:</span> {doctor.about}
//         </p>

//         <p className="text-sm text-gray-500 mb-1">
//           <span className="font-semibold text-gray-700">Phone:</span> {doctor.phone}
//         </p>

//         <p className="text-sm text-gray-500 mb-1">
//           <span className="font-semibold text-gray-700">Ticket Price:</span> ₹{doctor.ticket_price?.toFixed(2)}
//         </p>

//         <div className="flex items-center gap-2 mt-2">
//           <img src={starIcon} alt="Star" className="w-4 h-4" />
//           <span className="text-sm font-medium text-gray-700">
//             {doctor.average_rating?.toFixed(1) || 'N/A'} ({doctor.review_count || 0} reviews)
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DoctorCard;




import React from 'react';
import { useNavigate } from 'react-router-dom';

const DoctorCard = ({ doctor }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/doctors/${doctor._id}`)}
      className="bg-white border border-gray-200 rounded-2xl p-6 mt-10 shadow-md hover:shadow-xl transition duration-300 ease-in-out cursor-pointer max-w-xs mx-auto flex flex-col items-center gap-4"
    >
      {/* Doctor Image */}
      <img
        src={doctor.photo || "https://via.placeholder.com/150"}
        alt={doctor.name}
        className="w-32 h-32 object-cover rounded-full border shadow-sm"
      />

      {/* Doctor Details */}
      <div className="text-center">
        <h2 className="text-xl font-bold text-gray-800 mb-1">{doctor.name}</h2>

        <p className="text-sm text-gray-600 mb-1">
          <b>Specialization:</b> {doctor.specialization}
        </p>

        <p className="text-sm text-gray-600 mb-1">
          <b>Experience:</b> {doctor.experience} years
        </p>

        <p className="text-sm text-gray-600 mb-1">
          <b>Phone:</b> {doctor.phone}
        </p>

        <p className="text-sm text-gray-600 mb-1">
          <b>Email:</b> {doctor.email}
        </p>
      </div>
    </div>
  );
};

export default DoctorCard;
