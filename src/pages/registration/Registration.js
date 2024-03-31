import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import html2pdf from 'html2pdf.js';
import { renderToString } from 'react-dom/server';

const Registration = () => {
  const form = useRef();

  // for Registration
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_gizr1g2', 'template_sk3lqim', form.current, {
        publicKey: 'Afv1quRobLzRf3668',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  // the template for the form
  const Receipt = () => (
    <div>
      <h1>The Download</h1>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </div>
  );

  // this function handles the download of the form
  const handleDownload = () => {
    const receiptElement = document.createElement('div');
    receiptElement.innerHTML = renderToString(<Receipt />);
    const opt = {
      margin: 1,
      filename: 'Afec.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true,
      },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().from(receiptElement).set(opt).save();
  };


  return (
    <div className="pt-[140px]">
      {/* registration form to register */}
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input className='block' placeholder='name' type="text" name="user_name" />
        <label>Email</label>
        <input className='block' placeholder='email' type="email" name="user_email" />
        <label>Message</label>
        <textarea className='block' placeholder='message' name="message" />
        <input className='block' type="submit" value="Send" />
      </form>
      {/* button to download form */}
      <button type='button' onClick={() => handleDownload()}>Download form</button>
    </div>
  );
};

export default Registration;