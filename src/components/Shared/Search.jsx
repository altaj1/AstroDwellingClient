import { MdLocationPin } from "react-icons/md";
const Search = () => {
    const thanasInDhaka = [
        { name: "Dhanmondi" },
        { name: "Gulshan" },
        { name: "Banani" },
        { name: "Mohammadpur" },
        { name: "Mirpur" },
        { name: "Uttara" },
        { name: "Badda" },
        { name: "Tejgaon" },
        { name: "Pallabi" },
        { name: "Khilgaon" },
        { name: "Lalbagh" },
        { name: "Kotwali" },
        { name: "Hazaribagh" },
        { name: "Shahbagh" },
        { name: "Ramna" },
        { name: "Sutrapur" },
        { name: "Motijheel" },
        { name: "Jatrabari" },
        { name: "Savar" },
        { name: "Demra" }
      ];
      
      console.log(thanasInDhaka);
      
  return (
    <div>
        <h1 className="text-4xl text-center p-6">Your Personal Assistant, always ready </h1>
      <form action="">
       <div className="flex items-center justify-center gap-5">
       <div className="flex items-center ">
       <span className="text-4xl"><MdLocationPin /></span> 
            <select name="" id="" className="bg-opacity-50 py-3  rounded-lg outline cursor-pointer outline-blue-400 bg-slate-400 text-white">
                {
                    thanasInDhaka.map((thana, idx) =><option 
                    className=" bg-opacity-30  bg-slate-400 text-black"
                    key={idx} value={thana.name}>  {thana.name} </option>)
                } 
               
            </select>
        </div>
      <div>
      <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-info w-full max-w-xs bg-opacity-50 bg-slate-400 text-white"
        />
      </div>
       </div>
      </form>
   
    </div>
  );
};

export default Search;
