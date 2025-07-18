import './App.css';
import img from './assets/my-img.jpg';
import { FaTelegramPlane, FaGraduationCap } from "react-icons/fa";
import { GrDocumentPdf } from "react-icons/gr";
import { SlCalender } from "react-icons/sl";
import { FaBagShopping } from "react-icons/fa6";
import { HiBadgeCheck } from "react-icons/hi";
import { IoIosMailUnread } from "react-icons/io";
import aerohub from "./assets/app-logo.jpg";
import texttoaudio from "./assets/text-to-audio.png";
import Navbar from './components/Navbar.jsx';

function App() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('Contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className='container'>
      <Navbar />

      {/* Home Section */}
      <section className='home-section' id='Home'>
        <section className='home-icons'>
          <a href="https://github.com/senthilnathan-es02"><i className="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/senthilnathan-developer/"><i className="fa-brands fa-linkedin"></i></a>
          <a href="https://mail.google.com/mail/u/0/#inbox"><i className="fa-solid fa-envelope"></i></a>
        </section>

        <section className='home-content'>
          <h1>Senthilnathan,</h1>
          <h5><span>✋</span></h5>
          <h5>⏤⏤⏤ Web Developer</h5>
          <p>I'm a Web developer from Theni, and I'm very passionate and dedicated to my work.</p>
          <button onClick={scrollToContact}>
            Say Hello <span className='btn-span'><FaTelegramPlane /></span>
          </button>
        </section>

        <section className='home-img-section'>
          <img className='home-img' src={img} alt="home-img" />
        </section>
      </section>

      {/* About Section */}
      <section className='about-container' id='About'>
        <section className='about-head'>
          <h1>About me</h1>
          <p>My Introduction</p>
        </section>

        <section className='about-content'>
          <section className='about-img-content'>
            <img className='about-img' src={img} alt="about-img" />
          </section>
          <section className='about-details'>
            <p>Hello everyone, my name is Senthilnathan, and I’m from Theni. I come from a family of weavers. Currently, I’m a student at the Freshworks STS Software Academy, where I’m building a strong foundation in frontend technologies.

              As part of my learning, I developed a flight ticket booking platform, which helped me improve my UI/UX skills and understand how to design the flow of a web page.

              My short-term goal is to work on real-world projects to gain hands-on experience, and my long-term goal is to become a skilled full-stack developer.
            </p>

<a href="/Senthilnathan-resume.pdf" download>
  <button>
    Download CV <span><GrDocumentPdf /></span>
  </button>
</a>

          </section>
        </section>
      </section>

      {/* Education Section */}
      <section className='education-container' id='Education'>
        <section className='education-head'>
          <h1>Qualification</h1>
          <p>My personal journey</p>
        </section>

        <section className='education-content'>
          <section className='first-section'>
            <h1><span><FaGraduationCap /></span> Education</h1>
            <h6>Student</h6>
            <p>GHSS</p>
            <p><span><SlCalender /></span> 2010 - 2024</p>
          </section>

          <section className='second-section'>
            <h1><span><FaBagShopping /></span> Experience</h1>
            <h6>Web Developer</h6>
            <p>Freshworks STS Software Academy</p>
            <p><span><SlCalender /></span> 2024 - 2025</p>
          </section>
        </section>
      </section>

      {/* Skill Section */}
      <section className='skill-container' id='Skill'>
        <section className='skill-head'>
          <h1>Skill</h1>
          <p>My technical level</p>
        </section>

        <section className='skill-content'>
          {[
            "HTML", "CSS", "JavaScript", "Bootstrap", "React",
            "Firebase", "Canva", "Figma", "Cloudinary", "Designs Principles"
          ].map((skill, index) => (
            <section className='skill' key={index}>
              <span><HiBadgeCheck /></span> <p>{skill}</p>
            </section>
          ))}
        </section>
      </section>

      {/* Projects Section */}
      <section className='project-container' id='Project'>
        <section className='project-head'>
          <h1>Projects</h1>
          <p>My Works</p>
        </section>

        <section className='project-content'>
          <section className='project'>
            <img src={aerohub} alt="aero hub" />
            <button>View</button>
          </section>

          <section className='project'>
            <img src={texttoaudio} alt="text to audio" />
            <button>View</button>
          </section>
        </section>
      </section>

      {/* Contact Section */}
      <section className='contact-container' id='Contact'>
        <header className='contact-head'>
          <h1>Get in touch</h1>
          <p>Contact Me</p>
        </header>

        <section className='contact-details'>
          <section className='contact-email-section'>
            <p><IoIosMailUnread /></p>
            <p>Email</p>
            <p>Write me</p>
          </section>

          <form className="form-container">
            <p className="form-title">Write a mail</p>

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Enter your Name" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Enter your Email" />
            </div>

            <div className="form-group">
              <label htmlFor="desc">Description</label>
              <textarea id="desc" rows="5" placeholder="Enter description"></textarea>
            </div>

            <button type="submit" className='form-btn'>Send Message</button>
          </form>
        </section>
      </section>

      {/* Footer */}
      <footer>
        <h1>Spritfull_Senthilnathan</h1>
        <p>© 2025 by Senthilnathan. All rights reserved.</p>
      </footer>
    </section>
  );
}

export default App;
