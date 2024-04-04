import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import html2pdf from 'html2pdf.js';
import { renderToString } from 'react-dom/server';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from "../../assets/AFEC LOGO 3.png";

const Registration = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    team_name: '',
    team_address: '',
    team_leader: '',
    contact_numbers: '',
    team_jersey_home: '',
    team_jersey_away: '',
    venue: '',
    date: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    setIsLoading(true);
    emailjs
      .sendForm('service_gizr1g2', 'template_2yofyxw', form.current, {
        publicKey: 'Afv1quRobLzRf3668',
      })
      .then(
        () => {
          toast.success('Registration successful', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          setIsLoading(false);
          setFormData({
            team_name: '',
            team_address: '',
            team_leader: '',
            contact_numbers: '',
            team_jersey_home: '',
            team_jersey_away: '',
            venue: '',
            date: ''
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  const Receipt = () => (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-md">
        <div className="flex justify-between items-start gap-2 my-4">
          <h1 className="text-2xl font-bold mb-4 text-center border-b-2 border-gray-300 pb-2">PARTICIPATING FOOTBALL TEAM INFORMATION</h1>
          <img className='w-10 my-1' src={logo} alt='ball' />
        </div>
        <form>
          <label className="block text-sm font-medium text-gray-700">Team Name:</label>
          <input type="text" className="w-full border-2 border-gray-300 p-2 rounded mt-1 mb-4" />

          <label className="block text-sm font-medium text-gray-700">Team Address:</label>
          <input type="text" className="w-full border-2 border-gray-300 p-2 rounded mt-1 mb-4" />

          <label className="block text-sm font-medium text-gray-700">Team Leader or Coach:</label>
          <input type="text" className="w-full border-2 border-gray-300 p-2 rounded mt-1 mb-4" />

          <label className="block text-sm font-medium text-gray-700">Contact Numbers:</label>
          <input type="text" className="w-full border-2 border-gray-300 p-2 rounded mt-1 mb-4" />

          <div className="border-t-2 border-gray-300 pt-4">
            <h2 className="text-lg font-bold mb-2">Team Jersey Colours:</h2>
            <label className="block text-sm font-medium text-gray-700">Home:</label>
            <input type="text" className="w-full border-2 border-gray-300 p-2 rounded mt-1 mb-4" />

            <label className="block text-sm font-medium text-gray-700">Away:</label>
            <input type="text" className="w-full border-2 border-gray-300 p-2 rounded mt-1 mb-4" />

            <label className="block text-sm font-medium text-gray-700">Venue:</label>
            <input type="text" className="w-full border-2 border-gray-300 p-2 rounded mt-1 mb-4" />

            <label className="block text-sm font-medium text-gray-700">Date:</label>
            <input type="text" className="w-full border-2 border-gray-300 p-2 rounded mt-1 mb-4" />
          </div>

          <div className="border-t-2 border-gray-300 pt-4">
            <label className="block text-sm font-medium text-gray-700">I Mr/Mrs:</label>
            <input type="text" className="w-full border-2 border-gray-300 p-2 rounded mt-1 mb-4" />
            <p className="text-sm mb-4">of the above mention team had read the tournament rules and regulations and have agreed to the term/conditions of tournament.</p>
            <label className="block text-sm font-medium text-gray-700">Signed:</label>
            <input type="text" className="w-full border-2 border-gray-300 p-2" />
            <input type="text" className="w-full border-2 border-gray-300 p-2 rounded mt-1 mb-4" />
            <p className="text-sm mb-4">(TEAM LEADER/COACH)</p>
          </div>

          <div className="mt-6 text-sm">
            <p>NOTE: All payment is made through bank transactions. No Cash is allowed</p>
          </div>

          <div className="mt-6 text-sm font-bold">
            <p>AFEC FOOTBALL</p>
            <p>1310663493</p>
            <p>Zenith Bank</p>
          </div>
        </form>
      </div>
  );

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
    <div className="pt-[140px] px-4">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div class="max-w-md mx-auto py-8 px-4 bg-white shadow-md rounded-lg my-4">
        <form id="form" ref={form} onSubmit={sendEmail} className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="team_name" className="text-blue-500 font-semibold">Team Name</label>
            <input
              className="block w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Team Name" type="text" id="team_name" name="team_name"
              required
              value={formData.team_name} onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="team_address" className="text-blue-500 font-semibold">Team Address</label>
            <input
              className="block w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Team Address" type="text" id="team_address" name="team_address"
              required
              value={formData.team_address} onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="team_leader" className="text-blue-500 font-semibold">Team Leader</label>
            <input
              className="block w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Team Leader" type="text" id="team_leader" name="team_leader"
              required
              value={formData.team_leader} onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="contact_numbers" className="text-blue-500 font-semibold">Contact Numbers</label>
            <input
              className="block w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Contact Numbers" type="number" id="contact_numbers" name="contact_numbers"
              required
              value={formData.contact_numbers} onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <p className="font-semibold text-blue-700">Team Jersey Colours:</p>
            <label htmlFor="team_jersey_home" className="text-blue-500 font-semibold">Home</label>
            <input
              className="block w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Home" type="text" id="team_jersey_home" name="team_jersey_home"
              required
              value={formData.team_jersey_home} onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <p className="font-semibold text-blue-700 visibility-hidden">Team Jersey Colours:</p>
            <label htmlFor="team_jersey_away" className="text-blue-500 font-semibold">Away</label>
            <input
              className="block w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Away" type="text" id="team_jersey_away" name="team_jersey_away"
              required
              value={formData.team_jersey_away} onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="venue" className="text-blue-500 font-semibold">Venue</label>
            <input
              className="block w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Venue" type="text" id="venue" name="venue"
              required
              value={formData.venue} onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="text-blue-500 font-semibold">Date</label>
            <input
              className="block w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Date" type="date" id="date" name="date"
              value={formData.date} onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <input
              className="block w-full bg-blue-500 text-white py-2 px-4 rounded-md cursor-pointer"
              type="submit" value={isLoading ? "sending..." : "Send"}
            />
          </div>
        </form>
        <button class="bg-blue-500 text-white py-2 px-4 rounded-md cursor-pointer" type='button' onClick={() => handleDownload()}>Download form</button>
      </div>
    </div>
  );
};

export default Registration;
