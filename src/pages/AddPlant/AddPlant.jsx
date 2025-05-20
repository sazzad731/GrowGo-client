import sidePhoto from "../../assets/image/add-plant.png"
const AddPlant = () => {
  return (
    <div className="min-h-screen pt-7">
      <div className="w-[76rem] mx-auto flex items-center bg-white dark:glass rounded-2xl">
        <img
          className="w-2xl h-[800px] rounded-l-2xl"
          src={sidePhoto}
          alt="plant"
        />
        <form>
          <div className="grid grid-cols-2 gap-3 px-10">
            <fieldset className="fieldset">
              <legend className="fieldset-legend dark:text-bgLight">
                Plant Name
              </legend>
              <input
                type="text"
                placeholder="Type here"
                className="input w-full mb-5 dark:focus:outline-bgLight dark:focus:border-bgLight"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend dark:text-bgLight">
                Plant Image
              </legend>
              <input
                type="url"
                placeholder="Type here"
                className="input w-full mb-5 dark:focus:outline-bgLight dark:focus:border-bgLight"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend dark:text-bgLight">
                Category
              </legend>
              <select defaultValue="Pick a browser" className="select">
                <option disabled={true}>Pick a Category</option>
                <option>Succulent</option>
                <option>Fern</option>
                <option>Flowering</option>
                <option>Tropical</option>
                <option>Bonsai</option>
              </select>
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend dark:text-bgLight">
                Care Level
              </legend>
              <select defaultValue="Pick a browser" className="select">
                <option disabled={true}>Pick a level</option>
                <option>easy</option>
                <option>moderate</option>
                <option>difficult</option>
              </select>
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend dark:text-bgLight">
                Watering Frequency
              </legend>
              <input
                type="text"
                placeholder="e.g., Every 3 days"
                className="input w-full mb-5 dark:focus:outline-bgLight dark:focus:border-bgLight"
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend dark:text-bgLight">
                Last Watered Date
              </legend>
              <input
                type="date"
                placeholder="Type here"
                className="input w-full mb-5 dark:focus:outline-bgLight dark:focus:border-bgLight"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend dark:text-bgLight">
                Next Watering Date
              </legend>
              <input
                type="date"
                placeholder="Type here"
                className="input w-full mb-5 dark:focus:outline-bgLight dark:focus:border-bgLight"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend dark:text-bgLight">
                Health Status
              </legend>
              <input
                type="text"
                placeholder="e.g., Healthy, Needs Attention"
                className="input w-full mb-5 dark:focus:outline-bgLight dark:focus:border-bgLight"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend dark:text-bgLight">
                User Name
              </legend>
              <input
                type="text"
                placeholder="Your name"
                className="input w-full mb-5 dark:focus:outline-bgLight dark:focus:border-bgLight"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend dark:text-bgLight">
                User Email
              </legend>
              <input
                type="email"
                placeholder="Your email"
                className="input w-full mb-5 dark:focus:outline-bgLight dark:focus:border-bgLight"
              />
            </fieldset>
            <fieldset className="fieldset col-span-2 w-full">
              <legend className="fieldset-legend dark:text-bgLight">
                Your bio
              </legend>
              <textarea
                className="textarea h-24 w-full dark:focus:outline-bgLight dark:focus:border-bgLight"
                placeholder="Bio"
              ></textarea>
            </fieldset>
          </div>
          <div className="flex items-center justify-center mt-5">
            <button
              type="submit"
              className="py-2 px-6 outline-2 font-semibold outline-greenBtn text-greenBtn hover:bg-greenBtn hover:text-bgLight transition-colors rounded-lg text-center dark:outline-bgLight hover:dark:bg-bgLight hover:dark:text-greenBtn dark:text-bgLight cursor-pointer"
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