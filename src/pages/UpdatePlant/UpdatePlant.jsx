import Swal from "sweetalert2";
import { use, useEffect, useState } from "react";
import { AuthContext } from "../../ContextProvider/Context/AuthContext";
import { useParams } from "react-router";
const UpdatePlant = () => {
  const { user } = use(AuthContext);
  const { id } = useParams();
  const [ plant, getPlant ] = useState({})
  const [ loading, setLoading ] = useState(true);
  const [ lastWateredDate, setLastWateredDate ] = useState()
  const [ nextWateringDate, setNextWateringDate ] = useState();
  const [ careLevel, setCareLevel ] = useState("");
  const [ category, setCategory ] = useState("");

  useEffect(()=>{
    fetch(`https://grow-go-server.vercel.app/plant-detail/${id}`)
      .then((res) => res.json())
      .then((data) =>{
        getPlant(data)
        setLastWateredDate(new Date(data.lastWatered).toLocaleDateString("en-CA"));
        setNextWateringDate(new Date(data.nextWatering).toLocaleDateString("en-CA"));
        setCareLevel(data.careLevel);
        setCategory(data.category);
        setLoading(false)
      });
  },[id])

  const handleUpdatePlant = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const plantData = Object.fromEntries(formData.entries());

    fetch(`https://grow-go-server.vercel.app/update-plant/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        ...plantData,
        userName: user?.displayName,
        userEmail: user?.email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount === 1) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Plant updated successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-xl dark:text-lightGreen"></span>
      </div>
    );
  }
  return (
    <div className="min-h-screen px-3">
      <h2 className="text-center text-3xl mb-7 mt-10 font-semibold text-greenPrimary dark:text-lightGreen">
        Update a Plant
      </h2>
      <div className="xl:w-[76rem] mx-auto flex items-center lg:justify-between justify-center bg-white dark:glass rounded-2xl">
        <img
          className="w-1/2 h-[800px] rounded-l-2xl object-cover hidden lg:block"
          src="https://images.unsplash.com/photo-1473081556163-2a17de81fc97?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="plant"
        />
        <form onSubmit={handleUpdatePlant} className="lg:w-1/2 p-5">
          <div className="md:grid gap-3">
            <fieldset className="fieldset">
              <legend className="fieldset-legend dark:text-lightGreen">
                Plant Name
              </legend>
              <input
                type="text"
                placeholder="Type here"
                defaultValue={plant?.plantName}
                name="plantName"
                className="input w-full mb-5 dark:focus:outline-lightGreen dark:focus:border-lightGreen"
                required
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
                defaultValue={plant?.imageURL}
                className="input w-full mb-5 dark:focus:outline-lightGreen dark:focus:border-lightGreen"
                required
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend dark:text-lightGreen">
                Category
              </legend>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="select"
                name="category"
                required
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
                className="select"
                name="careLevel"
                value={`${careLevel}`}
                onChange={(e) => setCareLevel(e.target.value)}
                // defaultValue="difficult"
                required
              >
                <option disabled={true}>Pick a level</option>
                <option value="easy">Easy</option>
                <option value="moderate">Moderate</option>
                <option value="difficult">Difficult</option>
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
                defaultValue={plant?.wateringFreq}
                className="input w-full mb-5 dark:focus:outline-lightGreen dark:focus:border-lightGreen"
                required
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
                defaultValue={lastWateredDate}
                className="input w-full mb-5 dark:focus:outline-lightGreen dark:focus:border-lightGreen"
                required
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
                defaultValue={nextWateringDate}
                className="input w-full mb-5 dark:focus:outline-lightGreen dark:focus:border-lightGreen"
                required
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
                defaultValue={plant?.health}
                className="input w-full mb-5 dark:focus:outline-lightGreen dark:focus:border-lightGreen"
                required
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend dark:text-lightGreen">
                User Name
              </legend>
              <input
                type="text"
                placeholder="Your name"
                value={user?.displayName}
                name="userName"
                disabled
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
                value={user?.email}
                name="userEmail"
                className="input w-full mb-5 dark:focus:outline-lightGreen dark:focus:border-lightGreen"
                disabled
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
                defaultValue={plant?.description}
                required
              ></textarea>
            </fieldset>
          </div>
          <div className="flex items-center justify-center mt-5">
            <button
              type="submit"
              className="py-2 px-6 outline-2 font-semibold outline-greenPrimary text-greenPrimary hover:bg-greenPrimary hover:text-lightGreen transition-colors rounded-lg text-center dark:outline-lightGreen hover:dark:bg-lightGreen hover:dark:text-greenPrimary dark:text-lightGreen cursor-pointer"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatePlant;
