
import { Typewriter } from 'react-simple-typewriter';
import { toast } from 'react-toastify';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddService = () => {
    const {user} = useAuth();
    // const  navigate = useNavigate()
    console.log(user)
    const notify = () => toast("Congratulations Added Successfully!!");
    

    const handelSubmitt =async (e)=>{
        e.preventDefault();

        const form = e.target;
        const serviceImg = form.ServiceImg.value
        const serviceName = form.ServiceName.value
        const price = form.Price.value
        const area = form.area.value
        const description = form.description.value
        const servicesData = {serviceImg, serviceName, price, area, description,
                           provider: {
                             email:user.email,
                             name: user?.displayName,
                             photo: user?.photoURL,
                           },
                           postedTime: new Date()
        }
        
        console.log(servicesData)

        try {
            const { data } = await axios.post(
              `${import.meta.env.VITE_API_URL}/services`,
              servicesData
            )
            console.log(data)
            notify()
            // navigate('/my-posted-jobs')
          } catch (err) {
            console.log(err)
          }
    }


    return (
        <div>
        <div className="text-center pt-20">
          <h1 className="text-4xl font-bold opacity-85">
          <Typewriter
                    delaySpeed={500}
                    deleteSpeed={10}
                    loop={1}
                    typeSpeed={200}
                    words={[" Add a Home Services...!"]}
                  />
           </h1>
        </div>
        <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
          <form
            onSubmit={handelSubmitt}
            className="container flex flex-col mx-auto space-y-12"
          >
            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
              <div className="space-y-2 col-span-full lg:col-span-1">
                <p className="font-medium text-2xl ">
                  
                  <Typewriter
                    delaySpeed={500}
                    deleteSpeed={10}
                    loop={1}
                    typeSpeed={200}
                    words={["Services Information...!"]}
                  />
                </p>
                <p className="text-xs">
                From repairs to renovations, we transform houses into dream homes. Our expert team delivers top-notch craftsmanship, ensuring every corner reflects comfort and style. Trust us to elevate your living space to new heights."
                </p>
              </div>
              <div className="grid grid-cols-6 space-x-5 gap-y-12 font-semibold gap-4 col-span-full lg:col-span-3">
                <div className="col-span-full sm:col-span-3">
                  <label className="text-sm">Service Image URL</label>
                  <input
                    
                    name="ServiceImg"
                    type="text"
                    placeholder="  Service Image URL"
                    className="w-full rounded-md text-black   focus:outline-none"
                  />
                   {/* <div className=" outline-none" >
                   <Select  
                   
          defaultValue={country}
          onChange={setcountry}
          options={options}
        />
                   </div> */}
                  <hr />
                </div>
                <div className="col-span-full sm:col-span-3 ">
                  <label htmlFor="lastname" className="text-sm">
                  Service Name
                  </label>
                  <input
                    name="ServiceName"
                    id="lastname"
                    type="text"
                    placeholder="    Service Name"
                    className="w-full rounded-md text-black  focus:outline-none"
                  />
                  <hr />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label className="text-sm"> Price</label>
                  <input
                    name="Price"
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
                  <label className="text-sm">Description</label>
                  <input
                    name="description"
                    type="text"
                    placeholder="    Description"
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
                    defaultValue={user?.displayName}
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
                    {/* {displayName} */}
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
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </fieldset>
          </form>
        </section>
      </div>
    );
};

export default AddService;