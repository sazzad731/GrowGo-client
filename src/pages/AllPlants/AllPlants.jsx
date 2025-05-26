import { useEffect, useState } from "react";
import { Link } from "react-router";

const AllPlants = () => {
  const [ plants, setPlants ] = useState([]);
  const [ sortBy, setSortBy ] = useState("default")
  const [ loading, setLoading ] = useState(true);
  useEffect(()=>{
    fetch(`https://grow-go-server.vercel.app/all-plants?sortParams=${sortBy}`)
      .then((res) => res.json())
      .then((data) =>{
        setPlants(data)
        setLoading(false);
      });
  }, [ sortBy ])
  
  if(loading){
    return <div className="min-h-screen flex items-center justify-center"><span className="loading loading-xl dark:text-lightGreen"></span></div>
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 min-h-screen">
      <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">
        🌿 All Plants
      </h2>

      <fieldset className="fieldset">
        <legend className="fieldset-legend text-greenPrimary text-lg">
          Sort by
        </legend>
        <select
          onChange={(e) => setSortBy(e.target.value)}
          defaultValue="default"
          name="sort"
          className="select"
        >
          <option disabled={true}>default</option>
          <option value="nextWatering"> Next Watering Date</option>
          <option value="careLevel">Care Level</option>
        </select>
      </fieldset>

      <div className="overflow-x-auto rounded-lg shadow border border-gray-200">
        <table className="min-w-full bg-white dark:glass">
          <thead className="bg-green-100 text-green-800">
            <tr>
              <th className="py-3 px-6 text-left">Image</th>
              <th className="py-3 px-6 text-left">Plant Name</th>
              <th className="py-3 px-6 text-left">Category</th>
              <th className="py-3 px-6 text-left">Watering Frequency</th>
              <th className="py-3 px-6 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 dark:text-lightGreen">
            {plants?.map((plant) => (
              <tr key={plant._id} className="border-t">
                <td className="py-3 px-6">
                  <img
                    src={plant.imageURL}
                    alt={plant.plantName}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                </td>
                <td className="py-3 px-6 font-medium">{plant.plantName}</td>
                <td className="py-3 px-6 capitalize">{plant.category}</td>
                <td className="py-3 px-6">{plant.wateringFreq}</td>
                <td className="py-3 px-6">
                  <Link to={`/plant-details/${plant._id}`}>
                    <button className="text-sm py-2 px-6 outline-2 font-semibold outline-greenPrimary text-greenPrimary hover:bg-greenPrimary hover:text-lightGreen transition-colors rounded-lg text-center dark:outline-lightGreen hover:dark:bg-lightGreen hover:dark:text-greenPrimary dark:text-lightGreen cursor-pointer">
                      View Details
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {plants?.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No plants available yet.
          </div>
        )}
      </div>
    </section>
  );
};

export default AllPlants;
