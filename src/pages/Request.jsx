// import React, { useState, useEffect } from "react";
// import Button from "./Button";

// const Request = ({ closeForm }) => {
//   const [diseases, setDiseases] = useState([]);
//   const [doctors, setDoctors] = useState([]);

//   const [selectedDisease, setSelectedDisease] = useState("");
//   const [selectedDoctor, setSelectedDoctor] = useState(null); 
//   const [selectedDate, setSelectedDate] = useState("");
//   const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
//   const [timeSlots, setTimeSlots] = useState([]);

//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [gender, setGender] = useState("");
//   const [age, setAge] = useState("");

//   useEffect(() => {
//     async function fetchDiseases() {
//       const res = await fetch("http://localhost:5001/api/specializations");
//       const data = await res.json();
//       setDiseases(data);
//     }
//     fetchDiseases();
//   }, []);

//   useEffect(() => {
//     async function fetchDoctors() {
//       if (!selectedDisease) {
//         setDoctors([]);
//         return;
//       }
//       const res = await fetch(`http://localhost:5001/api/doctors?specialization=${selectedDisease}`);
//       const data = await res.json();
//       setDoctors(data);
//     }
//     fetchDoctors();
//   }, [selectedDisease]);

//   useEffect(() => {
//     if (!selectedDate) {
//       setTimeSlots([]);
//       return;
//     }

//     const slots = [];
//     const startTime = new Date(selectedDate);
//     startTime.setHours(8, 0, 0, 0);
//     for (let i = 0; i < 4; i++) {
//       const endTime = new Date(startTime.getTime() + 60 * 60000);
//       const slot = `${startTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })} - ${endTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`;
//       slots.push(slot);
//       startTime.setTime(endTime.getTime());
//     }
//     setTimeSlots(slots);
//   }, [selectedDate]);

//  const handleSubmit = async (e) => {
//   e.preventDefault();

//   if (!selectedDoctor || !selectedDate || !selectedTimeSlot) {
//     alert("Please fill all required fields");
//     return;
//   }

//   const startTimeStr = selectedTimeSlot.split(" - ")[0]; 
//   const [time, modifier] = startTimeStr.split(" ");
//   let [hours, minutes] = time.split(":").map(Number);

//   if (modifier === "PM" && hours !== 12) hours += 12;
//   if (modifier === "AM" && hours === 12) hours = 0;



// const formattedDateTime = `${selectedDate} ${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:00`;

// const appointmentPayload = {
//   username,
//   email,
//   phoneNumber,
//   gender,
//   age,
//   doctorName: selectedDoctor.name,
//   doctorId: selectedDoctor.id,
//   specialization: selectedDisease,
//   appointmentTime: formattedDateTime,  
//   patientId: null,
// };




//   try {
//     const res = await fetch("http://localhost:5001/api/appointments", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(appointmentPayload),
//     });

//     if (res.ok) {
//       alert("Appointment booked successfully!");
//       closeForm();
//     } else {
//       alert("Failed to book appointment");
//     }
//   } catch (error) {
//     console.error("Error booking appointment:", error);
//     alert("Error booking appointment");
//   }
// };


//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white p-6 rounded-xl w-full max-w-md space-y-4">
//         <h1 className="text-3xl font-bold text-center">Book Now</h1>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input value={username} onChange={(e) => setUsername(e.target.value)} required className="input" placeholder="Username" />
//           <input value={email} onChange={(e) => setEmail(e.target.value)} required type="email" className="input" placeholder="Email" />
//           <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required className="input" placeholder="Phone" maxLength={10} />
//           <div className="flex gap-2">
//             <select value={gender} onChange={(e) => setGender(e.target.value)} required className="input flex-1">
//               <option value="">Gender</option>
//               <option>male</option>
//               <option>female</option>
//               <option>other</option>
//             </select>
//             <input value={age} onChange={(e) => setAge(e.target.value)} required className="input w-20" type="number" placeholder="Age" />
//           </div>
//           <select value={selectedDisease} onChange={(e) => setSelectedDisease(e.target.value)} required className="input">
//             <option value="">Specialization</option>
//             {diseases.map((d, idx) => (
//               <option key={idx} value={d.specialization}>{d.specialization}</option>
//             ))}
//           </select>
//           {doctors.length > 0 && (
//             <select onChange={(e) => setSelectedDoctor(doctors.find(d => d.id == e.target.value))} required className="input">
//               <option value="">Select Doctor</option>
//               {doctors.map((d) => (
//                 <option key={d.id} value={d.id}>{d.name}</option>
//               ))}
//             </select>
//           )}
//           <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} required className="input" />
//           {timeSlots.length > 0 && (
//             <select value={selectedTimeSlot} onChange={(e) => setSelectedTimeSlot(e.target.value)} required className="input">
//               <option value="">Select time slot</option>
//               {timeSlots.map((slot, idx) => <option key={idx}>{slot}</option>)}
//             </select>
//           )}
//           <div className="flex justify-between">
//             <Button title="Book Appointment" />
//             <button type="button" onClick={closeForm} className="bg-red-500 text-white px-4 py-2 rounded-md">Close</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Request;


// import React, { useState, useEffect } from "react";
// import Button from "./Button";

// const Request = ({ closeForm }) => {
//   const [specializations, setSpecializations] = useState([]);
//   const [doctors, setDoctors] = useState([]);

//   const [selectedSpecialization, setSelectedSpecialization] = useState("");
//   const [selectedDoctor, setSelectedDoctor] = useState(null);
//   const [selectedDate, setSelectedDate] = useState("");
//   const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
//   const [timeSlots, setTimeSlots] = useState([]);

//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [gender, setGender] = useState("");
//   const [age, setAge] = useState("");

//   // ✅ Fetch all available specializations
//   useEffect(() => {
//     async function fetchSpecializations() {
//       try {
//         console.log("📡 Fetching specializations...");
//         const res = await fetch("http://localhost:5000/api/specialization");
//         if (!res.ok) throw new Error("Failed to fetch specializations");
//         const data = await res.json();

//         if (Array.isArray(data)) {
//           console.log("✅ Found specializations:", data);
//           setSpecializations(data);
//         } else {
//           console.error("Unexpected specialization data:", data);
//         }
//       } catch (err) {
//         console.error("Error fetching specializations:", err);
//       }
//     }
//     fetchSpecializations();
//   }, []);

//   // ✅ Fetch doctors based on selected specialization
//   useEffect(() => {
//     async function fetchDoctors() {
//       if (!selectedSpecialization) {
//         setDoctors([]);
//         return;
//       }

//       try {
//         console.log("📡 Fetching doctors for:", selectedSpecialization);
//         const res = await fetch(
//           `http://localhost:5000/api/doctors?specialization=${encodeURIComponent(
//             selectedSpecialization
//           )}`
//         );
//         const data = await res.json();

//         if (Array.isArray(data)) {
//           console.log("✅ Doctors found:", data);
//           setDoctors(data);
//         } else {
//           console.error("Invalid doctor data:", data);
//           setDoctors([]);
//         }
//       } catch (err) {
//         console.error("Error fetching doctors:", err);
//       }
//     }
//     fetchDoctors();
//   }, [selectedSpecialization]);

//   // ✅ Generate time slots dynamically
//   useEffect(() => {
//     if (!selectedDate) {
//       setTimeSlots([]);
//       return;
//     }

//     const slots = [];
//     const startTime = new Date(selectedDate);
//     startTime.setHours(8, 0, 0, 0); // 8 AM start

//     for (let i = 0; i < 4; i++) {
//       const endTime = new Date(startTime.getTime() + 60 * 60000); // 1-hour slots
//       const slot = `${startTime.toLocaleTimeString([], {
//         hour: "2-digit",
//         minute: "2-digit",
//       })} - ${endTime.toLocaleTimeString([], {
//         hour: "2-digit",
//         minute: "2-digit",
//       })}`;
//       slots.push(slot);
//       startTime.setTime(endTime.getTime());
//     }

//     setTimeSlots(slots);
//   }, [selectedDate]);

//   // ✅ Handle appointment form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!selectedDoctor || !selectedDate || !selectedTimeSlot) {
//       alert("Please fill all required fields");
//       return;
//     }

//     const startTimeStr = selectedTimeSlot.split(" - ")[0];
//     const [time, modifier] = startTimeStr.split(" ");
//     let [hours, minutes] = time.split(":").map(Number);

//     if (modifier === "PM" && hours !== 12) hours += 12;
//     if (modifier === "AM" && hours === 12) hours = 0;

//     const formattedDateTime = `${selectedDate} ${hours
//       .toString()
//       .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:00`;

//     const appointmentPayload = {
//       username,
//       email,
//       phoneNumber,
//       gender,
//       age,
//       doctorName: selectedDoctor.name,
//       doctorId: selectedDoctor.id,
//       specialization: selectedSpecialization,
//       appointmentTime: formattedDateTime,
//       patientId: null,
//     };

//     try {
//       const res = await fetch("http://localhost:5000/api/appointments", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(appointmentPayload),
//       });

//       if (res.ok) {
//         alert("✅ Appointment booked successfully!");
//         closeForm();
//       } else {
//         const err = await res.json();
//         alert("❌ Failed to book appointment: " + (err.message || ""));
//       }
//     } catch (error) {
//       console.error("Error booking appointment:", error);
//       alert("Error booking appointment");
//     }
//   };

//   // ✅ UI
//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white p-6 rounded-xl w-full max-w-md space-y-4">
//         <h1 className="text-3xl font-bold text-center">Book Now</h1>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//             className="input"
//             placeholder="Username"
//           />
//           <input
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             type="email"
//             className="input"
//             placeholder="Email"
//           />
//           <input
//             value={phoneNumber}
//             onChange={(e) => setPhoneNumber(e.target.value)}
//             required
//             className="input"
//             placeholder="Phone"
//             maxLength={10}
//           />
//           <div className="flex gap-2">
//             <select
//               value={gender}
//               onChange={(e) => setGender(e.target.value)}
//               required
//               className="input flex-1"
//             >
//               <option value="">Gender</option>
//               <option>male</option>
//               <option>female</option>
//               <option>other</option>
//             </select>
//             <input
//               value={age}
//               onChange={(e) => setAge(e.target.value)}
//               required
//               className="input w-20"
//               type="number"
//               placeholder="Age"
//             />
//           </div>

//           {/* ✅ Specialization Dropdown */}
//           <select
//             value={selectedSpecialization}
//             onChange={(e) => setSelectedSpecialization(e.target.value)}
//             required
//             className="input"
//           >
//             <option value="">Select Specialization</option>
//             {specializations.map((s, idx) => (
//               <option key={s._id || idx} value={s}>
//                 {s}
//               </option>
//             ))}
//           </select>

//           {/* ✅ Doctor Dropdown */}
//           {doctors.length > 0 && (
//             <select
//               onChange={(e) =>
//                 setSelectedDoctor(doctors.find((d) => d.id === e.target.value))
//               }
//               required
//               className="input"
//             >
//               <option value="">Select Doctor</option>
//               {doctors.map((d) => (
//                 <option key={d._id || d.id} value={d.id}>
//                   {d.name}
//                 </option>
//               ))}
//             </select>
//           )}

//           <input
//             type="date"
//             value={selectedDate}
//             onChange={(e) => setSelectedDate(e.target.value)}
//             required
//             className="input"
//           />

//           {timeSlots.length > 0 && (
//             <select
//               value={selectedTimeSlot}
//               onChange={(e) => setSelectedTimeSlot(e.target.value)}
//               required
//               className="input"
//             >
//               <option value="">Select time slot</option>
//               {timeSlots.map((slot, idx) => (
//                 <option key={idx}>{slot}</option>
//               ))}
//             </select>
//           )}

//           <div className="flex justify-between">
//             <Button title="Book Appointment" />
//             <button
//               type="button"
//               onClick={closeForm}
//               className="bg-red-500 text-white px-4 py-2 rounded-md"
//             >
//               Close
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Request;





// import React, { useState, useEffect } from "react";
// import Button from "./Button";

// const Request = ({ closeForm }) => {
//   const [specializations, setSpecializations] = useState([]);
//   const [doctors, setDoctors] = useState([]);

//   const [selectedSpecialization, setSelectedSpecialization] = useState("");
//   const [selectedDoctor, setSelectedDoctor] = useState(null);
//   const [selectedDate, setSelectedDate] = useState("");
//   const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
//   const [timeSlots, setTimeSlots] = useState([]);

//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [gender, setGender] = useState("");
//   const [age, setAge] = useState("");

//   // ✅ Fetch all available specializations
//   useEffect(() => {
//     async function fetchSpecializations() {
//       try {
//         console.log("📡 Fetching specializations...");
//         const res = await fetch("http://localhost:5000/api/specialization");
//         if (!res.ok) throw new Error("Failed to fetch specializations");
//         const data = await res.json();

//         if (Array.isArray(data)) {
//           console.log("✅ Found specializations:", data);
//           setSpecializations(data);
//         } else {
//           console.error("Unexpected specialization data:", data);
//         }
//       } catch (err) {
//         console.error("Error fetching specializations:", err);
//       }
//     }
//     fetchSpecializations();
//   }, []);

//   // ✅ Fetch doctors based on selected specialization
//   useEffect(() => {
//     async function fetchDoctors() {
//       if (!selectedSpecialization) {
//         setDoctors([]);
//         return;
//       }

//       try {
//         console.log("📡 Fetching doctors for:", selectedSpecialization);
//         const res = await fetch(
//           `http://localhost:5000/api/doctors?specialization=${encodeURIComponent(
//             selectedSpecialization
//           )}`
//         );
//         const data = await res.json();

//         if (Array.isArray(data)) {
//           console.log("✅ Doctors found:", data);
//           setDoctors(data);
//         } else {
//           console.error("Invalid doctor data:", data);
//           setDoctors([]);
//         }
//       } catch (err) {
//         console.error("Error fetching doctors:", err);
//       }
//     }
//     fetchDoctors();
//   }, [selectedSpecialization]);

//   // ✅ Generate time slots dynamically
//   useEffect(() => {
//     if (!selectedDate) {
//       setTimeSlots([]);
//       return;
//     }

//     const slots = [];
//     const startTime = new Date(selectedDate);
//     startTime.setHours(8, 0, 0, 0);

//     for (let i = 0; i < 4; i++) {
//       const endTime = new Date(startTime.getTime() + 60 * 60000);
//       const slot = `${startTime.toLocaleTimeString([], {
//         hour: "2-digit",
//         minute: "2-digit",
//       })} - ${endTime.toLocaleTimeString([], {
//         hour: "2-digit",
//         minute: "2-digit",
//       })}`;
//       slots.push(slot);
//       startTime.setTime(endTime.getTime());
//     }

//     setTimeSlots(slots);
//   }, [selectedDate]);

//   // ✅ Handle appointment form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (
//       !username ||
//       !email ||
//       !phoneNumber ||
//       !gender ||
//       !age ||
//       !selectedDoctor ||
//       !selectedSpecialization ||
//       !selectedDate ||
//       !selectedTimeSlot
//     ) {
//       alert("⚠️ Please fill all required fields");
//       return;
//     }

//     const startTimeStr = selectedTimeSlot.split(" - ")[0];
//     const [time, modifier] = startTimeStr.split(" ");
//     let [hours, minutes] = time.split(":").map(Number);
//     if (modifier === "PM" && hours !== 12) hours += 12;
//     if (modifier === "AM" && hours === 12) hours = 0;

//     const formattedDateTime = `${selectedDate} ${hours
//       .toString()
//       .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:00`;

//     const appointmentPayload = {
//       username,
//       email,
//       phoneNumber,
//       gender,
//       age,
//       doctorName: selectedDoctor.name,
//       doctorId: selectedDoctor._id, // ✅ FIXED (was .id before)
//       specialization: selectedSpecialization,
//       appointmentTime: formattedDateTime,
//       patientId: null,
//     };

//     try {
//       const res = await fetch("http://localhost:5000/api/appointments", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(appointmentPayload),
//       });

//       const data = await res.json();
//       if (res.ok) {
//         alert("✅ Appointment booked successfully!");
//         closeForm();
//       } else {
//         alert("❌ Failed to book appointment: " + (data.message || ""));
//       }
//     } catch (error) {
//       console.error("Error booking appointment:", error);
//       alert("❌ Server error. Please try again.");
//     }
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white p-6 rounded-xl w-full max-w-md space-y-4">
//         <h1 className="text-3xl font-bold text-center">Book Now</h1>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//             className="input"
//             placeholder="Username"
//           />
//           <input
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             type="email"
//             className="input"
//             placeholder="Email"
//           />
//           <input
//             value={phoneNumber}
//             onChange={(e) => setPhoneNumber(e.target.value)}
//             required
//             className="input"
//             placeholder="Phone"
//             maxLength={10}
//           />

//           <div className="flex gap-2">
//             <select
//               value={gender}
//               onChange={(e) => setGender(e.target.value)}
//               required
//               className="input flex-1"
//             >
//               <option value="">Gender</option>
//               <option value="male">Male</option>
//               <option value="female">Female</option>
//               <option value="other">Other</option>
//             </select>
//             <input
//               value={age}
//               onChange={(e) => setAge(e.target.value)}
//               required
//               className="input w-20"
//               type="number"
//               placeholder="Age"
//             />
//           </div>

//           {/* ✅ Specialization Dropdown */}
//           <select
//             value={selectedSpecialization}
//             onChange={(e) => setSelectedSpecialization(e.target.value)}
//             required
//             className="input"
//           >
//             <option value="">Select Specialization</option>
//             {specializations.map((s, idx) => (
//               <option key={idx} value={s}>
//                 {s}
//               </option>
//             ))}
//           </select>

//           {/* ✅ Doctor Dropdown */}
//           {doctors.length > 0 && (
//             <select
//               onChange={(e) =>
//                 setSelectedDoctor(
//                   doctors.find((d) => d._id === e.target.value) || null
//                 )
//               }
//               required
//               className="input"
//             >
//               <option value="">Select Doctor</option>
//               {doctors.map((d) => (
//                 <option key={d._id} value={d._id}>
//                   {d.name}
//                 </option>
//               ))}
//             </select>
//           )}

//           <input
//             type="date"
//             value={selectedDate}
//             onChange={(e) => setSelectedDate(e.target.value)}
//             required
//             className="input"
//           />

//           {timeSlots.length > 0 && (
//             <select
//               value={selectedTimeSlot}
//               onChange={(e) => setSelectedTimeSlot(e.target.value)}
//               required
//               className="input"
//             >
//               <option value="">Select time slot</option>
//               {timeSlots.map((slot, idx) => (
//                 <option key={idx}>{slot}</option>
//               ))}
//             </select>
//           )}

//           <div className="flex justify-between">
//             <Button title="Book Appointment" />
//             <button
//               type="button"
//               onClick={closeForm}
//               className="bg-red-500 text-white px-4 py-2 rounded-md"
//             >
//               Close
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Request;





import React, { useState, useEffect } from "react";
import Button from "./Button";

const Request = ({ closeForm }) => {
  const [specializations, setSpecializations] = useState([]);
  const [doctors, setDoctors] = useState([]);

  const [selectedSpecialization, setSelectedSpecialization] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [timeSlots, setTimeSlots] = useState([]);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");

  const [showSuccess, setShowSuccess] = useState(false); // ✅ Popup state

  // ✅ Fetch all specializations
  useEffect(() => {
    async function fetchSpecializations() {
      try {
        const res = await fetch("http://localhost:5000/api/specialization");
        const data = await res.json();
        if (Array.isArray(data)) setSpecializations(data);
      } catch (err) {
        console.error("Error fetching specializations:", err);
      }
    }
    fetchSpecializations();
  }, []);

  // ✅ Fetch doctors by specialization
  useEffect(() => {
    async function fetchDoctors() {
      if (!selectedSpecialization) return setDoctors([]);

      try {
        const res = await fetch(
          `http://localhost:5000/api/doctors?specialization=${encodeURIComponent(
            selectedSpecialization
          )}`
        );
        const data = await res.json();
        if (Array.isArray(data)) setDoctors(data);
      } catch (err) {
        console.error("Error fetching doctors:", err);
      }
    }
    fetchDoctors();
  }, [selectedSpecialization]);

  // ✅ Generate time slots
  useEffect(() => {
    if (!selectedDate) return setTimeSlots([]);

    const slots = [];
    const startTime = new Date(selectedDate);
    startTime.setHours(8, 0, 0, 0);

    for (let i = 0; i < 4; i++) {
      const endTime = new Date(startTime.getTime() + 60 * 60000);
      const slot = `${startTime.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })} - ${endTime.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })}`;
      slots.push(slot);
      startTime.setTime(endTime.getTime());
    }

    setTimeSlots(slots);
  }, [selectedDate]);

  // ✅ Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !username ||
      !email ||
      !phoneNumber ||
      !gender ||
      !age ||
      !selectedDoctor ||
      !selectedSpecialization ||
      !selectedDate ||
      !selectedTimeSlot
    ) {
      alert("⚠️ Please fill all required fields");
      return;
    }

    const startTimeStr = selectedTimeSlot.split(" - ")[0];
    const [time, modifier] = startTimeStr.split(" ");
    let [hours, minutes] = time.split(":").map(Number);
    if (modifier === "PM" && hours !== 12) hours += 12;
    if (modifier === "AM" && hours === 12) hours = 0;

    const formattedDateTime = `${selectedDate} ${hours
      .toString()
      .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:00`;

    const appointmentPayload = {
      username,
      email,
      phoneNumber,
      gender,
      age,
      doctorName: selectedDoctor.name,
      doctorId: selectedDoctor._id,
      specialization: selectedSpecialization,
      appointmentTime: formattedDateTime,
      patientId: null,
    };

    try {
      const res = await fetch("http://localhost:5000/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(appointmentPayload),
      });

      if (res.ok) {
        setShowSuccess(true); // ✅ Show success popup
      } else {
        const data = await res.json();
        alert("❌ Failed to book appointment: " + data.message);
      }
    } catch (error) {
      console.error("Error booking appointment:", error);
      alert("❌ Server error. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-xl w-full max-w-md space-y-4">
        <h1 className="text-3xl font-bold text-center">Book Now</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input className="input" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
          <input type="email" className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input className="input" placeholder="Phone" maxLength={10} value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />

          <div className="flex gap-2">
            <select className="input flex-1" value={gender} onChange={(e) => setGender(e.target.value)} required>
              <option value="">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>

            <input className="input w-20" type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} required />
          </div>

          <select className="input" value={selectedSpecialization} onChange={(e) => setSelectedSpecialization(e.target.value)} required>
            <option value="">Select Specialization</option>
            {specializations.map((s, i) => (
              <option key={i} value={s}>{s}</option>
            ))}
          </select>

          {doctors.length > 0 && (
            <select className="input" onChange={(e) => setSelectedDoctor(doctors.find((d) => d._id === e.target.value) || null)} required>
              <option value="">Select Doctor</option>
              {doctors.map((d) => (
                <option key={d._id} value={d._id}>{d.name}</option>
              ))}
            </select>
          )}

          <input type="date" className="input" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} required />

          {timeSlots.length > 0 && (
            <select className="input" value={selectedTimeSlot} onChange={(e) => setSelectedTimeSlot(e.target.value)} required>
              <option value="">Select time slot</option>
              {timeSlots.map((slot, idx) => (
                <option key={idx}>{slot}</option>
              ))}
            </select>
          )}

          <div className="flex justify-between">
            <Button title="Book Appointment" />
            <button type="button" onClick={closeForm} className="bg-red-500 text-white px-4 py-2 rounded-md">Close</button>
          </div>
        </form>
      </div>

      {/* ✅ Success Popup */}
      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-xl w-80 text-center shadow-xl space-y-3">
            <h2 className="text-xl font-bold text-green-600">✅ Successfully Booked!</h2>
            <p>Your appointment has been saved.</p>
            <button
              onClick={() => {
                setShowSuccess(false);
                closeForm();
              }}
              className="bg-green-600 text-white px-4 py-2 rounded-md w-full"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Request;
