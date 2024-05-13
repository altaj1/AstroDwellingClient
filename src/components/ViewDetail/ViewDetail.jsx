import { Helmet } from "react-helmet";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import axios from "axios";

const ViewDetail = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { data } = useLoaderData();
  const { user, setUser } = useAuth();
  const  navigate = useNavigate()
  // console.log(data);
  const notify = () => toast("Congratulations Booking Successfully!!");
  const {
    area,
    description,
    price,
    provider,
    serviceName,
    postedTime,
    serviceImg,
    _id,
  } = data;

  const handelSubmitt = async (e) => {
    e.preventDefault();

    const form = e.target;
    
    const area = form.area.value;
    const takingdate = startDate;
    const instruction = form.instruction.value;
    const servicesData = {
      
      area,
      description,
      
      takingdate,
      bookingDate: new Date(),
      buyer: {
        userEmail: user?.email,
        name: user?.displayName,
        photo: user?.photoURL,
      },
      instruction,
      status: "pending",
    };

    

    try {
      const { data } = await axios.put(
        `${import.meta.env.VITE_API_URL}/booking/${_id}`,
        servicesData
      );
      console.log(data);
      if (data.modifiedCount > 0) {
        notify();
        form.reset();
      }

      navigate('/booked-services')
    } catch (err) {
      // console.log(err);
    }
  };

  useEffect(() => {
    if (user) {
      setUser(user);
    }
  }, [user]);
  return (
    <div className="pt-24  space-y-7">

      <Helmet>
        <title>View Detail</title>
      </Helmet>
      <div className="text-center">
        <h1 className="text-3xl font-semibold">View Details</h1>
        <p>Offers a concise two-line description highlighting the main benefits or unique selling points of the service. This description aims to capture <br /> the attention of users quickly and encourage them to explore further</p>
      </div>
      <div className="flex flex-col  p-6 space-y-6 md:mb-40 lg:mb-0 sm:mb-20 lg:px-96 rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
        <div className="flex space-x-4 w-3/4">
          <img
            alt=""
            src={provider.photo}
            className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
          />
          <div className="flex flex-col space-y-1">
            <a
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/al-taj1/"
              className="text-sm font-semibold"
            >
              {provider.name}
            </a>
            <p> {area}</p>
            <span className="text-xs dark:text-gray-600">
              {new Date(postedTime).toLocaleDateString()}
            </span>
          </div>
        </div>
        <div className="lg:flex justify-between gap-10 space-y-5">
          <img
            src={serviceImg}
            alt=""
            className="   mb-4 h-60 rounded-md sm:h-96 dark:bg-gray-500"
          />
          <div  className="text-start  lg:w-[30%]  flex flex-col lg:items-center md:p-10 p-8 justify-center">
          <div className=" space-y-5">
            <h2 className="mb-1 text-xl font-semibold">{serviceName}</h2>
            <p className="text-sm dark:text-gray-600">{description}</p>

            <h1 className="font-bold">Price: {price}$</h1>

            <p>Services Area: </p>

            <div className="flex space-x-2 text-sm dark:text-gray-600 mb-20">
              <div>
                <button
                  className="btn bg-blue-300"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Book Now
                </button>
                
              </div>
            </div>
          </div>

          {/* end */}
          </div>
          {/* end */}
          

          <dialog id="my_modal_3" className="modal">
                  <div className="modal-box">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    <div>
                      <div className="text-center pt-20">
                        <h1 className="text-4xl font-bold opacity-85">
                          <Typewriter
                            delaySpeed={500}
                            deleteSpeed={10}
                            loop={1}
                            typeSpeed={200}
                            words={[" Booking a Home Services...!"]}
                          />
                        </h1>
                      </div>
                      <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
                        <form
                          onSubmit={handelSubmitt}
                          className="container flex flex-col mx-auto space-y-12"
                        >
                          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
                            <div className="grid grid-cols-6 space-x-5 gap-y-12 font-semibold gap-4 col-span-full lg:col-span-3">
                              <div className="col-span-full sm:col-span-3">
                                <label className="text-sm">Service ID</label>
                                <input
                                  defaultValue={_id}
                                  disabled
                                  readOnly
                                  name=""
                                  type="text"
                                  placeholder="  Service Image URL"
                                  className="w-full rounded-md text-black   focus:outline-none"
                                />

                                <hr />
                              </div>
                              <div className="col-span-full sm:col-span-3 ">
                                <label htmlFor="lastname" className="text-sm">
                                  Service Name
                                </label>
                                <input
                                  defaultValue={serviceName}
                                  disabled
                                  readOnly
                                  name=""
                                  id="lastname"
                                  type="text"
                                  placeholder="    Service Name"
                                  className="w-full rounded-md text-black  focus:outline-none"
                                />
                                <hr />
                              </div>
                              <div className="col-span-full sm:col-span-3">
                                <label className="text-sm">
                                  Service Image URL
                                </label>
                                <input
                                  disabled
                                  defaultValue={serviceImg}
                                  readOnly
                                  name=""
                                  type="text"
                                  placeholder="  Service Image URL"
                                  className="w-full rounded-md text-black   focus:outline-none"
                                />

                                <hr />
                              </div>
                              <div className="col-span-full sm:col-span-3">
                                <label className="text-sm">Provider Emai</label>
                                <input
                                  disabled
                                  defaultValue={provider.email}
                                  readOnly
                                  name=""
                                  type="text"
                                  placeholder="  Service Image URL"
                                  className="w-full rounded-md text-black   focus:outline-none"
                                />

                                <hr />
                              </div>
                              <div className="col-span-full sm:col-span-3">
                                <label className="text-sm">Provider Name</label>
                                <input
                                  disabled
                                  defaultValue={provider.name}
                                  readOnly
                                  name="ServiceImg"
                                  type="text"
                                  placeholder="  Service Image URL"
                                  className="w-full rounded-md text-black   focus:outline-none"
                                />

                                <hr />
                              </div>

                              <div className="col-span-full sm:col-span-3 ">
                                <label className="text-sm"> Service Taking Date</label>

                                <ReactDatePicker
                                  className="border p-2 rounded-md border-none underline"
                                  selected={startDate}
                                  onChange={(date) => setStartDate(date)}
                                />
                                
                              </div>
                              <div className="col-span-full sm:col-span-3">
                                <label className="text-sm"> Price</label>
                                <input
                                defaultValue={price}
                                disabled
                                readOnly
                                  name=""
                                  type="number"
                                  placeholder="      Price..."
                                  className="w-full rounded-md text-black  focus:outline-none"
                                />
                                <hr />
                              </div>
                              <div className="col-span-full sm:col-span-3">
                                <label className="text-sm">Service Area</label>
                                <input
                                  name="area"
                                  type="text"
                                  placeholder="    Service Area"
                                  className="w-full rounded-md text-black  focus:outline-none"
                                />
                                <hr />
                              </div>

                              <div className="col-span-full sm:col-span-">
                                <label className="text-sm">
                                  Special Instruction
                                </label>
                                <input
                                  name="instruction"
                                  type="text"
                                  placeholder="   Special instruction"
                                  className="w-full rounded-md  text-black focus:outline-none"
                                />
                                <hr />
                              </div>
                            </div>
                          </fieldset>
                          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
                            <div className="space-y-2 col-span-full lg:col-span-1">
                              <p className="font-bold">Profile</p>
                              {/* <p className="text-xs">{user?.displayName}</p> */}
                            </div>
                            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                              <div className="col-span-full sm:col-span-3">
                                <label htmlFor="username" className="text-sm">
                                  User Name
                                </label>
                                <input
                                  type="text"
                                  defaultValue={user?.displayName || ""}
                                  className="w-full rounded-md   focus:outline-none"
                                  readOnly
                                  disabled
                                />
                                <hr />
                              </div>
                              <div className="col-span-full sm:col-span-3">
                                <label htmlFor="website" className="text-sm">
                                  Email
                                </label>
                                <input
                                  id="website"
                                  type="text"
                                  defaultValue={user?.email}
                                  className="w-full rounded-md   focus:outline-none"
                                  readOnly
                                  disabled
                                />
                                <hr />
                              </div>

                              <div className="col-span-full">
                                <label htmlFor="bio" className="text-sm m-4">
                                  {user?.displayName}
                                </label>
                                <div className="flex items-center space-x-2">
                                  <img
                                    src={user?.photoURL}
                                    alt=""
                                    className="w-10 h-10 dark:bg-gray-500 rounded-full "
                                  />
                                  <button
                                    type="submit"
                                    className="px-4 py-2 border rounded-md dark:border-gray-800 btn bg-blue-300"
                                  >
                                    Purchase
                                  </button>
                                </div>
                              </div>
                            </div>
                          </fieldset>
                        </form>
                      </section>
                    </div>
                  </div>
                </dialog>

        </div>
      </div>
    </div>
  );
};

export default ViewDetail;
