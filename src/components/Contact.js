import React from 'react';

function Contact() {
  return (
    <div>
      <p>Email: your.email@example.com</p>
      <p><a href="path_to_your_CV.pdf" download>Download CV</a></p>
      <p><a href="https://github.com/yourusername">GitHub</a></p>
      <p><a href="https://linkedin.com/in/yourusername">LinkedIn</a></p>
      <form>
        {/* Form content here */}
      </form>
    </div>
  );
}

export default Contact;
