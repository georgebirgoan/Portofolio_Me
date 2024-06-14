import './contact.scss';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { toast } from 'react-toastify'; // Import funcțiile de notificare



export default function Contact() {
  const form = useRef();
    
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_p8evuw8', 'template_sgqgxsg', form.current, {
        publicKey: 'aNPcmG8clCvEN2WiY',
      })
      .then(
        () => {
          toast.success("Email sent successfully!")
          form.current.reset();
        },
        () => {
          toast.error("Failed to send email!")
        },
      );
  };
      
  
  return (
    <div id="contact" className='contactContainer'>

      <div className="leftContact">
        <h1>Contact <span>Me</span></h1>
      

      <div className="contactInfo">
        <h2>Let's Work Together</h2>
        <p>Feel free to reach out for collaboration or any inquiries about web development projects. I'm always open to discussing new opportunities and bringing innovative ideas to life!</p>
        
        <div className="dateContact">
          <div className="email">
            <i className='bx bxs-envelope'></i>
            <span><a href="georgebirgoan@gmail.com">georgebirgoan@gmail.com</a></span>
          </div>
          <div className="phone">
            <i className='bx bx-phone' ></i>
            <span>0754845468</span>
          </div>
        </div>
        <div className="socialIcons">
          <a href="mailto:georgebirgoan@gmail.com"><i className='bx bxs-envelope'></i>Email</a>
          <a href="https://github.com/"><i className='bx bxl-github' ></i>GitHub</a>
          <a href="https://www.linkedin.com/feed/"><i className='bx bxl-linkedin' ></i>Linkedin</a>
        </div>
      </div>
      </div>

      <div id='contact-form' className="contactForm">
        <form ref={form} onSubmit={sendEmail} action="#">
          <input type="text" name='user_name' placeholder="Enter Your Name" required />
          <input type="email" name='user_email' placeholder="Enter Your Email" required />
          <input type="text" name='user_subject' placeholder="Enter Your Subject" required />
          <textarea name='message' placeholder="Enter Your Message" required></textarea>
          <button type="submit" value="send">Submit</button>
        </form>
      </div>
    </div>
  )
}
