import React, { useState } from 'react';
import { PaystackButton } from 'react-paystack'

const Donate = () => {
  const publicKey = "pk_live_760f43f8d49529b4040c1b0fe7e23dce81c965a3";
  const [ email, setEmail ] = useState("");
  const [ amount, setAmount ] = useState(0);
  const [ name, setName ] = useState("");
  const [ phone, setPhone ] = useState(0);

  const componentProps = {
    email,
    amount: amount * 100,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      alert("Thanks for donating to us! we do not take it for granted!!"),
    onClose: () => alert("Wait! You need to donate, don't go!!!!"),
  }

  const style = {
    input: "block w-full px-4 py-2 mb-4 rounded-md border border-gray-300 focus:outline-none focus:border-primary-500",
    button: "block w-full px-4 py-2 bg-[#1369A1] text-white rounded-md hover:bg-primary-600 focus:outline-none focus:bg-primary-600"
  }

  return (
    <div className="pt-[140px] px-8">
      <div className="max-w-md mx-auto my-4">
        <input type="email" placeholder="Email" className={style.input} value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="number" placeholder="Amount" className={style.input} value={amount} onChange={(e) => setAmount(e.target.value)} />
        <input type="text" placeholder="Name" className={style.input} value={name} onChange={(e) => setName(e.target.value)} />
        <input type="number" placeholder="Phone number" className={style.input} value={phone} onChange={(e) => setPhone(e.target.value)} />
        <PaystackButton className={style.button} {...componentProps} />
      </div>
    </div>
  );
};

export default Donate;

// import { useState } from 'react';
// import { MdContentCopy } from 'react-icons/md';

// const AccountPage = () => {
//   const [copied, setCopied] = useState(false);

//   const handleCopy = () => {
//     // Copy the account number to the clipboard
//     const accountNumber = '1234567890'; // Replace this with your actual account number
//     navigator.clipboard.writeText(accountNumber);

//     // Set copied to true to show the copied alert
//     setCopied(true);

//     // Reset copied state after 3 seconds
//     setTimeout(() => {
//       setCopied(false);
//     }, 3000);
//   };

//   return (
//     <div>
//       <div>
//         <p>Account Number: 1234567890</p>
//         <button onClick={handleCopy}>
//           Copy <MdContentCopy />
//         </button>
//       </div>
//       {copied && <div>Copied!</div>}
//     </div>
//   );
// };

// export default AccountPage;
