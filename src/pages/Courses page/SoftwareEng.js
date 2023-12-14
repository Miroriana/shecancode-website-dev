import React, {useEffect}  from 'react';
import Header from "../../components/Header/index";
import Nav from "../../components/Nav/index";
import Footer from "../../components/Footers/footer";
import "./AllCourses.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useNavigate } from 'react-router-dom';

// import holidayPic from "../Courses page/Pictures/holidaysBootcamp.jpg";
// import SoftwareEngineeringPic from "../Courses page/Pictures/softPic.jpg";
// import WebDevPic from "../Courses page/Pictures/webdevelopment.jpg";
// import PartTimePic from "../Courses page/Pictures/soft.jpg";


const FullStack = () => {
  const navigate = useNavigate();

  useEffect(()=>{
    Aos.init({duration:3000});
  },[])

  return (
    <div>
      <Nav />
      <Header />
      <div data-aos="fade-up" className='softwareEng_Section1'>
        <div className='softwareEng_Section1--div1'>

          <h1>Unlock Your Potential with Our Software Engineering Program<br></br>
            Transform your passion into a thriving career in software engineering.
          </h1>

        </div>

        <div className="why-software-engineering">
          <div className='why-software-engineering-content'>
            <h1>Why Choose Software Engineering?</h1>
            <p> In a rapidly evolving digital landscape, software engineering is the key to unlocking endless possibilities. Whether you're fascinated by backend development, frontend web development,  our SheCanCode software Engineering program provides a comprehensive 16-week curriculum designed to equip you with the skills needed to thrive in the tech industry.</p>
          </div>

        </div>


      </div>

      <div className="program-highlights">
       <p><strong>Dual Specialization:</strong> Our curriculum is uniquely structured, allowing you to tailor your journey by selecting one of two specialized tracks: Frontend Development or Backend Development.</p>
       
      </div>
      <div className='specialization-section'>
        <div className='frontend-specialization'>
          <h4>Frontend Development</h4>
          <p>

          Welcome to our Frontend Development hub! Here, we craft seamless user experiences by bringing web interfaces to life. Using the powerful combination of JavaScript, HTML, and CSS, we transform ideas into interactive and visually appealing websites. Our expertise extends to harnessing the capabilities of ReactJS, ensuring dynamic and efficient web solutions.<span className='hide'> Dive into the world of responsive design and cutting-edge web skills with us – where simplicity meets innovation, and user interfaces come to vibrant life. Elevate your digital presence with our frontend development prowess!</span>
          </p>
          <button onClick={() => navigate('/februaryintake')} className='speci-card-btn'>Apply Now!</button>
        </div>
        <div className='backend-specialization'>
          <h4>Backend Development</h4>
          <p>
          Backend development is the behind-the-scenes magic that powers websites, making them functional and dynamic. In this process, we leverage a powerful trio of technologies: JavaScript for scripting, Express JS for building robust web applications, and Node JS for executing server-side code efficiently. MongoDB, a flexible and scalable database, helps store and manage data seamlessly.<span className='hide'>Together, these tools enable us to create interactive and responsive web applications, ensuring a smooth and efficient user experience.</span> 
          </p>
          <button onClick={() => navigate('/februaryintake')} className='speci-card-btn'>Apply Now!</button>
        </div>
      </div>

      





      <Footer />
    </div>
  )
}

export default FullStack
