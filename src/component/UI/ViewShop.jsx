import React from 'react'

const ViewShop = () => {
  return (
    <section className="flex flex-col px-5 py-5">
      <div className="flex flex-col justify-center items-center py-4">
        <h1 className="text-tx-300 text-[24px] font-bold">Latest Products</h1>
        <div className="flex justify-center items-center gap-5">
          <h1 className="text-tx-400 text-[14px]">Showing 4 of 12 products</h1>
          <div className="flex gap-1 items-center">
            <Link to="/view">
              <p className="text-bg-100 text-[14px]">View more </p>
              <AiOutlineArrowRight className="text-bg-100 text-[14px]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ViewShop