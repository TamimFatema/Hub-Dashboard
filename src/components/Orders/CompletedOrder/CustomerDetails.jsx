import React from 'react'

const CustomerDetails = () => {
  return (
   
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
    {/*Customer Info*/}
    <div className="bg-white  py-6 px-5 rounded-lg shadow-lg items-start flex flex-col gap-3">
      <div className="flex items-center gap-2 font-semibold text-lg">
        <img src="/Icons/user.png" alt="" width={15} height={15} />
        <p>Customer Information</p>
      </div>
      <div className="flex flex-wrap gap-6">
        <img
          className="rounded-full h-[80px] w-[80px]"
          src="https://media.istockphoto.com/id/1300512215/photo/headshot-portrait-of-smiling-ethnic-businessman-in-office.jpg?s=612x612&w=0&k=20&c=QjebAlXBgee05B3rcLDAtOaMtmdLjtZ5Yg9IJoiy-VY="
          alt="Rounded avatar"
        />
        <div className="flex flex-col text-sm">
          <p>Mosraful Habib</p>
          <p>3 orders</p>
          <p>+8801254789632</p>
          <p>habib@ctsgroupbd.com</p>
        </div>
      </div>
    </div>

    {/*Shipping Address*/}
    <div className="bg-white flex py-6 px-5 rounded-lg shadow-lg items-start flex-col gap-3">
      <div className="flex items-center gap-2">
        <img
          src="/Icons/location-pin.png"
          alt=""
          width={15}
          height={15}
        />
        <p>Shipping Address</p>
      </div>
      <div className="flex flex-col text-sm">
        <div className="flex gap-2">
          <span>Contact person:</span>
          <p> Nafid Alam</p>
        </div>
        <div className="flex gap-2">
          <span>Phone: </span>
          <p> +8801254789632</p>
        </div>
        <div className="flex gap-2">
          <span>House no.: </span>
          <p>04</p>
        </div>
        <div className="flex gap-2">
          <span>Road no.:</span>
          <p>06</p>
        </div>
        <div className="flex gap-2">
          <span>Area: </span>
          <p>DUIP Residential Area, Mirpur 2, Dhaka</p>
        </div>
        <div className="flex gap-2">
          <span>Zip Code: </span>
          <p>1216</p>
        </div>
      </div>
    </div>

    {/*billing person */}
    <div className="bg-white py-6 px-5 rounded-lg shadow-lg items-start flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <img
          src="/Icons/location-pin.png"
          alt=""
          width={15}
          height={15}
        />
        <p>Billing Address</p>
      </div>
      <div className="flex flex-col text-sm">
        <div className="flex gap-2">
          <span>Contact person:</span>
          <p> Nafid Alam</p>
        </div>
        <div className="flex gap-2">
          <span>Phone: </span>
          <p> +8801254789632</p>
        </div>
        <div className="flex gap-2">
          <span>House no.: </span>
          <p>04</p>
        </div>
        <div className="flex gap-2">
          <span>Road no.:</span>
          <p>06</p>
        </div>
        <div className="flex gap-2">
          <span>Area: </span>
          <p>DUIP Residential Area, Mirpur 2, Dhaka</p>
        </div>
        <div className="flex gap-2">
          <span>Zip Code: </span>
          <p>1216</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CustomerDetails