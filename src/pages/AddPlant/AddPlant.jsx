import Swal from "sweetalert2";
import sidePhoto from "../../assets/image/add-plant.png"
const AddPlant = () => {
  
  const handleAddPlant = (event)=>{
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const plantData = Object.fromEntries(formData.entries());
    
    fetch("http://localhost:5000/add-plant", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(plantData)
    })
      .then(res => res.json())
      .then(data => {
        if(data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Plant added successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset()
        }
      });
  }
  
  return (
    <div className="min-h-screen">
      <h2 className="text-center text-3xl mb-7 mt-10 font-semibold text-greenPrimary dark:text-lightGreen">Add a Plant</h2>
      <div className="w-[76rem] mx-auto flex items-center bg-white dark:glass rounded-2xl">
        <img
          className="w-2xl h-[800px] rounded-l-2xl"
          src={sidePhoto}
          alt="plant"
        />
        <form onSubmit={handleAddPlant}>
          <div className="grid grid-cols-2 gap-3 px-10">
            <fieldset className="fieldset">
              <legend className="fieldset-legend dark:text-lightGreen">
                Plant Name
              </legend>
              <input
                type="text"
                placeholder="Type here"
                name="plantName"
                className="input w-full mb-5 dark:focus:outline-lightGreen dark:focus:border-lightGreen"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend dark:text-lightGreen">
                Plant Image
              </legend>
              <input
                type="url"
                placeholder="Type here"
                name="imageURL"
                className="input w-full mb-5 dark:focus:outline-lightGreen dark:focus:border-lightGreen"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend dark:text-lightGreen">
                Category
              </legend>
              <select
                defaultValue="Pick a browser"
                className="select"
                name="category"
              >
                <option disabled={true}>Pick a Category</option>
                <option>Succulent</option>
                <option>Fern</option>
                <option>Flowering</option>
                <option>Tropical</option>
                <option>Bonsai</option>
              </select>
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend dark:text-lightGreen">
                Care Level
              </legend>
              <select
                defaultValue="Pick a Level"
                className="select"
                name="careLevel"
              >
                <option disabled={true}>Pick a level</option>
                <option>easy</option>
                <option>moderate</option>
                <option>difficult</option>
              </select>
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend dark:text-lightGreen">
                Watering Frequency
              </legend>
              <input
                type="text"
                placeholder="e.g., Every 3 days"
                name="wateringFreq"
                className="input w-full mb-5 dark:focus:outline-lightGreen dark:focus:border-lightGreen"
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend dark:text-lightGreen">
                Last Watered Date
              </legend>
              <input
                type="date"
                placeholder="Type here"
                name="lastWatered"
                className="input w-full mb-5 dark:focus:outline-lightGreen dark:focus:border-lightGreen"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend dark:text-lightGreen">
                Next Watering Date
              </legend>
              <input
                type="date"
                placeholder="Type here"
                name="nextWatering"
                className="input w-full mb-5 dark:focus:outline-lightGreen dark:focus:border-lightGreen"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend dark:text-lightGreen">
                Health Status
              </legend>
              <input
                type="text"
                placeholder="e.g., Healthy, Needs Attention"
                name="health"
                className="input w-full mb-5 dark:focus:outline-lightGreen dark:focus:border-lightGreen"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend dark:text-lightGreen">
                User Name
              </legend>
              <input
                type="text"
                placeholder="Your name"
                name="userName"
                className="input w-full mb-5 dark:focus:outline-lightGreen dark:focus:border-lightGreen"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend dark:text-lightGreen">
                User Email
              </legend>
              <input
                type="email"
                placeholder="Your email"
                name="userEmail"
                className="input w-full mb-5 dark:focus:outline-lightGreen dark:focus:border-lightGreen"
              />
            </fieldset>
            <fieldset className="fieldset col-span-2 w-full">
              <legend className="fieldset-legend dark:text-lightGreen">
                Description
              </legend>
              <textarea
                className="textarea h-24 w-full dark:focus:outline-lightGreen dark:focus:border-lightGreen"
                placeholder="Description"
                name="description"
              ></textarea>
            </fieldset>
          </div>
          <div className="flex items-center justify-center mt-5">
            <button
              type="submit"
              className="py-2 px-6 outline-2 font-semibold outline-greenPrimary dark:text-lightGreen text-greenPrimary dark:text-lightGreen hover:bg-greenPrimary dark:text-lightGreen hover:text-lightGreen transition-colors rounded-lg text-center dark:outline-lightGreen hover:dark:bg-lightGreen hover:dark:text-gre dark:text-lightGreenenPrimary dark:text-lightGreen cursor-pointer"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPlant;