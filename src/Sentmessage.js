import React from 'react';

const Sentmessage = ({ toggleModal }) => {
  return (
    <div className='fixed inset-0 flex items-center justify-center z-50'>
      <div className='bg-black bg-opacity-50 w-full h-full flex items-center justify-center'>
        <div className='bg-white p-8 rounded-lg shadow-md'>
          <h1 className='text-3xl text-black mb-4'>Sent successfully!!</h1>
          <button
            onClick={toggleModal}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sentmessage;
