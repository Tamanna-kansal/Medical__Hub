// import React from 'react'
// import { formatDate } from '../../utils/formatDate'

// function DoctorAbout() {
//   return (
//     <div>
//         <div>

//             <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex-item-center gap-2'>About of
//             <span className='text-irisBlueColor font-bold text-[24px] leading-9'>
//             Dr.Shah
//             </span>

//             </h3>
//             <p className='text_para'>
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus neque delectus necessitatibus illum natus maiores quasi, veniam fugiat commodi. A similique tempore provident! Nisi culpa praesentium, beatae incidunt voluptates facilis. 
//             </p>
//         </div>
//         <div className='mt-12'>
//             <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>Education</h3>
//             <ul className='pt-4 md:p-5'>
//                 <li className='flex flex-col sm:flex-row sm:justify-between sm:item-end md:gap-5 mb-[30px]'>
//                     <div>
//                         <span className='text-irisBlueColor text-[15px] leading-6'>{formatDate('09-03-2014')}-{formatDate('09-03-2016')}
//                         </span>
//                         <p className='text-[16px] leading-6 font-medium text-textColor'>PHD in Surgeon
//                         </p>
//                     </div>
//                     <p className='text-[14px] leading-5 font-medium text-textColor'>
//                         New Apollo Hospital, New York.
//                     </p>
//                 </li>
//                 <li className='flex flex-col sm:flex-row sm:justify-between sm:item-end md:gap-5 mb-[30px]'>
//                     <div>
//                         <span className='text-irisBlueColor text-[15px] leading-6'>{formatDate('07-04-2010')}-{formatDate('09-13-2014')}
//                         </span>
//                         <p className='text-[16px] leading-6 font-medium text-textColor'>PHD in Surgeon
//                         </p>
//                     </div>
//                     <p className='text-[14px] leading-5 font-medium text-textColor'>
//                         New Apollo Hospital, New York.
//                     </p>
//                 </li>

//             </ul>
//         </div>

//         <div className='mt-12'>
//         <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>Experience</h3>
//         <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:pt-5'>
//             <li className='p-4 rounded bg-[#fff9ea]'>
//                 <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
//                     {formatDate("07-04-2010")}-{formatDate("08-13-2014")}
//                 </span>
//                 <p className='text-[16px] leading-6 font-medium text-textColor'>Sr. Surgeon
//                         </p>
//                 <p className='text-[15px] leading-5 font-medium text-textColor'>New Apollo Hospital, New York.
//                         </p>
//             </li>
//             <li className='p-4 rounded bg-[#fff9ea]'>
//                 <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
//                     {formatDate("07-04-2010")}-{formatDate("08-13-2014")}
//                 </span>
//                 <p className='text-[16px] leading-6 font-medium text-textColor'>Sr. Surgeon
//                         </p>
//                 <p className='text-[15px] leading-5 font-medium text-textColor'>New Apollo Hospital, New York.
//                         </p>
//             </li>
//         </ul>
//         </div>
//     </div>
//   )
// }

// export default DoctorAbout


import React from 'react';

const DoctorAbout = ({ doctor }) => {
    if (!doctor) return null;

    return (
        <div className="space-y-6">
            <h3 className='text-[22px] font-bold'>
                About Dr. {doctor.name}
            </h3>

            <p className='text-gray-700'>
                Dr. {doctor.name} is a specialist in {doctor.specialization}.
            </p>

            <div>
                <h3 className='text-[18px] font-semibold'>Specialization</h3>
                <p className='text-gray-600'>
                    {doctor.specialization}
                </p>
            </div>

            <div>
                <h3 className='text-[18px] font-semibold'>Experience</h3>
                <p className='text-gray-600'>
                    {doctor.experience} years of experience
                </p>
            </div>

            <div>
                <h3 className='text-[18px] font-semibold'>Contact Info</h3>
                <p className='text-gray-600'><b>Email:</b> {doctor.email}</p>
                <p className='text-gray-600'><b>Phone:</b> {doctor.phone}</p>
            </div>

            <div>
                <h3 className='text-[18px] font-semibold'>Approval Status</h3>
                <p className='text-gray-600 capitalize'>
                    {doctor.is_approved}
                </p>
            </div>
        </div>
    );
};

export default DoctorAbout;
