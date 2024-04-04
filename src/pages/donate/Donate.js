import React, { useState } from 'react';
import { MdContentCopy } from 'react-icons/md';

const Donate = () => {

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    // Copy the account number to the clipboard
    const accountNumber = '1310663493'; // Replace this with your actual account number
    navigator.clipboard.writeText(accountNumber);

    // Set copied to true to show the copied alert
    setCopied(true);

    // Reset copied state after 3 seconds
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <div className="pt-[140px] px-8">
      <div className="bg-[#fff] my-4 p-4 w-fit m-auto rounded-[10px]">
        <h1 className="text-[24px] font-[600] py-4">Make payments to this account</h1>
        <div>
          <p className="text-[14px] font-[400]">Account Name</p>
          <p className="font-[500] text-[#1369A1]">AFEC FOOTBALL</p>
        </div>
        <div className="my-4">
          <p className="text-[14px] font-[400]">Account Number</p>
          <div className="font-[500] text-[#1369A1] flex gap-[3px]">
            <p>1310663493</p>
            <button onClick={handleCopy}><MdContentCopy /></button>
            {copied && <p>Copied!</p>}
          </div>
        </div>
        <div>
          <p className="text-[14px] font-[400]">Bank Name</p>
          <p className="font-[500] text-[#1369A1]">Zenith Bank</p>
        </div>
      </div>
    </div>
  );
}
export default Donate;
