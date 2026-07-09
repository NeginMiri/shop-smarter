import React from 'react'

const Join = () => {
  return (
    <>
      <section className="grid grid-cols-1 gap-9 pt-30 px-5 pb-50">
        <div className="flex flex-col justify-center items-center px-5 gap-2">
          <h1 className="text-[24px] font-bold">Join Newsletter</h1>
          <p className="text-[14px] text-center text-tx-200 font-medium">
            Subscribe to get exclusive deals, new arrivals, and insider updates
            delivered straight to your inbox every week.
          </p>
        </div>
        <div className="flex w-full rounded-[20px] bg-bg-14 border border-gray-400 pl-6  justify-between">
          <input
            type="email"
            placeholder="Enter your email address "
            className="py-3"
          />
          <button className="bg-tx-100 px-7  rounded-[20px]   text-white font-bold">
            Get Updates
          </button>
        </div>
      </section>
    </>
  );
}

export default Join