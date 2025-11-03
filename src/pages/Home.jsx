import React , {useState} from 'react'
import icon02 from '../assets/images/icon02.png'
import icon03 from '../assets/images/icon03.png'
import featureImg from '../assets/images/feature-img.png'
import faqImg from '../assets/images/faq-img.png'
import videoIcon from '../assets/images/video-icon.png'
import avatarIcon from '../assets/images/avatar-icon.png'
import {Link} from 'react-router-dom'
import {BsArrowRight} from 'react-icons/bs'
import About from '../components/About/About'
import ServiceList from '../components/Services/ServiceList'
import FaqList from '../components/Faq/FaqList'
import DoctorList from '../components/Doctors/DoctorList'
import Request from './Request'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Doctors from '../pages/Doctors/Doctors.jsx'
import './Home.css';
// import { Link } from "react-scroll";
// import Testimonial from '../components/Testimonial/Testimonial'
const Home = () => {
  const [menu, setMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const openForm = () => {
    setShowForm(true);
    // setMenu(false);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
  <>
    {/* hero section */}
  
    <section className='hero_section pt-[60px] 2xl:h-[800px]'>
    <div className='container'>
      <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>

        {/* hero content */}
        <div>  
          <div className='lg:w-[570px]'>
            <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]'>We help patients live a healthy, longer life.</h1>
          <p className='text_para'>Gone are the days of dialing the front desk for appointments. Nowadays, patients love the ease of booking online. And the best part? It's available round the clock, whenever you need it!</p>

          <div className=" hidden lg:flex">
          <button className='btn'
              onClick={openForm}>Request an appointment</button></div>
            {showForm && <Request closeForm={closeForm} />}

<div className=" lg:hidden flex items-center">
  {menu ? (
    <AiOutlineClose size={28} onClick={handleChange} />
  ) : (
    <AiOutlineMenu size={28} onClick={handleChange} />
  )}
</div>
<div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-backgroundColor text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        ></div>
<div className=" lg:hidden">
            <button
              className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out"
              onClick={openForm}
            >
              Request an appointment
            </button>
          </div>
          </div>

          {/* hero-counter */}

          <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>
          <div>
            <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>30+</h2>
            <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
            <p className='text_para'>Years of Experience</p>
          </div>

          <div>
            <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>15+</h2>
            <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]'></span>
            <p className='text_para'>Clinic Location</p>
          </div>

          <div>
            <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>100%</h2>
            <span className='w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]'></span>

            <p className='text_para'>Patient Satisfaction</p>
          </div> 

          

        </div>
      </div>
    

      {/* hero content */}

      <div className='flex gap-[10px] justify-end'>
      <div style={{ height: '70vh', width: '90vh', position: 'relative' }}>
  <img
    className='w-full rounded-lg shadow'
    src="https://img.freepik.com/free-photo/team-young-specialist-doctors-standing-corridor-hospital_1303-21199.jpg"
    alt=""
    style={{ position: 'absolute', top: '1%', left: '1%', transform: 'translate(-50%, -50%)', animation: 'oscillate 2s infinite' }}
  />
</div>

        
      </div>

      </div>
    </div>
    </section>
    {/* hero section-end  */}
   

    <section>
      <div className='container'>
        <div className='lg:w-[470px] mx-auto'>
          <h2 className='heading text-center'>
              Providing the best medical services
          </h2>
          <p className='text_para text-center'> World-class care for evevryone. Our health Sysytem offers unmatched, expert health care</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
 
        <div className='py-[30px] px-5'>
          <div className='flex items-center justify-center'><img src="data:image/png;base64,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" alt="" style={{height:'20vh'}}/></div>
        

        <div className='mt-[30px]'>
          <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Find a Doctor</h2>
          <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center '> World Class care for everyone. Our health System offers unmatched, expert health care. From th elab to the clinic.</p>

          <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none '>
          
          <BsArrowRight className='group-hover:text-white w-6 h-5'/>
          </Link>

        </div>

        </div>

        <div className='py-[30px] px-5'>
          <div className='flex items-center justify-center'><img src={icon02} alt="" /></div>
        

        <div className='mt-[30px]'>
          <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Find a Location</h2>
          
          <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center '> World Class care for everyone. Our health System offers unmatched, expert health care. From th elab to the clinic.</p>

          <Link to ="/Nearby" className='w-[44px] h-[44px] rounded-full border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none '>
  <BsArrowRight className='group-hover:text-white w-6 h-5'/>
</Link>
  

        </div>

        </div>
        <div className='py-[30px] px-5'>
          <div className='flex items-center justify-center'><img src={icon03} alt="" /></div>
        

        <div className='mt-[30px]'>
          <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Book Appointment </h2>

          <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center '> World Class care for everyone. Our health System offers unmatched, expert health care. From th elab to the clinic.</p>

          <Link to='/request' className='w-[44px] h-[44px] rounded-full border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none '>
          
          <BsArrowRight className='group-hover:text-white w-6 h-5'/>
          </Link>

        </div>

        </div>




      </div>
      </div>
    </section>

    <About/>

    <section>
      <div className='container'>
        <div className='xl:w-[470px] mx-auto'>
          <h2 className='heading text-center'>Our medical services</h2>
          <p className='text_para text-center'>World-class care for everyone. Our health System offers unmatched, expert health care.</p>
        </div>

        <ServiceList/>

      </div>
    </section>

    <section>
      <div className='container'>
        <div className='flex items-center justify-between flex-col lg:flex-row'>
          <div className='xl:w-[670px]'>
            <h2 className='heading'>Get virtual treatment <br />anytime</h2>
            <ul className='pl-4'>
              <li className='text_para'>1. Schedule the appointment directly</li>
              <li className='text_para'>2. Search for your physician here, and contact their office.</li>
              <li className="text_para">3. View our physicias who are accepting new patients, use the online scheduling tool to select an appointment time.</li>
            </ul>
            <div className=" hidden lg:flex">
          <button className='btn'
              onClick={openForm}>Consult</button></div>
            {showForm && <Request closeForm={closeForm} />}

{/* <div className=" lg:hidden flex items-center">
  {menu ? (
    <AiOutlineClose size={28} onClick={handleChange} />
  ) : (
    <AiOutlineMenu size={28} onClick={handleChange} />
  )}
</div> */}
            {/* <Link to='./Request'> <button className='btn'>Consult</button>
            </Link> */}
          </div>


          {/* featute img */}
          <div className='relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0'>
            <img src="https://i.pinimg.com/474x/f5/9e/e4/f59ee4d21909ed6503e89b4a70d91650.jpg" className='w-3/4' alt=""  style={{height:'90vh', width:'70vh',borderRadius:'20px'}}/>
            <div className='w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]'>
              <div className="flex items-center justify-between">
                <div className='flex items-center gap-[6px] lg:gap-3'>
                <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]'>Tue,24</p>
                <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]'>10:00AM</p>
                </div>
                <span className='w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]'>
                  <img src={videoIcon} alt="" />

                </span>
              </div>

            <div className='w-[65px] lg:w-[96px] bg-[#CCF0F3] py0-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4'>Consultation</div>

            <div className='flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]'>
            {/* <img src={avatarIcon} alt="" /> */}
            <h4 className='text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor'>
              Dr. Neelam
            </h4>


            </div>  
            </div>
          </div>
        </div>  
      </div>
    </section>
    {/* feature section end */}

    {/* our great doctors  */}
    <section>
      <div className='container'>
        <div className='xl:w-[470px] mx-auto'>
          <h2 className='heading text-center'>Our Great Doctors</h2>
          <p className='text_para text-center'>World-class care for everyone. Our health System offers unmatched, expert health care.</p>
        </div>

        <DoctorList/>
        </div>

    </section>
    {/* our great doctors end */}

    {/* faq section */}
    <section>
      <div className='container'>
        <div className='flex justify-between gap-[50px] lg:gap-0'>
          <div className='w-1/2 hidden md:block'><img src="https://i.pinimg.com/474x/a9/2b/64/a92b64e1d66d35633eae7bd9d38874fd.jpg" alt="" style={{height:'75vh',width:'70vh',borderRadius:'20px'}}/>
          </div>
        <div className='w-full md:w-1/2'>
          <h2 className='heading'>Most questions by our patients</h2>
          <FaqList/>
        </div>
      </div>
      </div>
    </section>
    {/* faq section END */}

    {/* testtimonial */}
    {/* <section>
      <div className="container">
      <div className='xl:w-[470px] mx-auto'>
          <h2 className='heading text-center'>What our patient say</h2>
          <p className='text_para text-center'>World-class care for everyone. Our health System offers unmatched, expert health care.</p>
        </div>
        <Testimonial/>
      </div>
    </section> */}
    {/* testtimonial end */}




  </>
  )
}

export default Home
