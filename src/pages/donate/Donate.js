import React, { useState } from 'react';

const Donate = () => {
  const style = {
    input: "block w-full px-4 py-2 mb-4 rounded-md border border-gray-300 focus:outline-none focus:border-primary-500"
  }

  return (
    <div className="pt-[140px] px-8">
      <form className="max-w-md mx-auto">
        <input type="email" placeholder="Email" className={style.input} />
        <input type="number" placeholder="Amount" className={style.input} />
        <input type="text" placeholder="First Name" className={style.input} />
        <input type="text" placeholder="Last Name" className={style.input} />
        <button type="submit" className="block w-full px-4 py-2 bg-[#1369A1] text-white rounded-md hover:bg-primary-600 focus:outline-none focus:bg-primary-600">Pay</button>
      </form>
    </div>
  );
};

export default Donate;
