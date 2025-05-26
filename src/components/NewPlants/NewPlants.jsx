import { useEffect, useState } from "react";
import { Link } from "react-router";

const NewPlants = () => {
  const [plants, setPlants] = useState([])
  const [ loading, setLoading ] = useState(true);
  useEffect(()=>{
    fetch("http://localhost:5000/new-plant")
      .then((res) => res.json())
      .then((result) => {
        setPlants(result)
        setLoading(false);
      });
  }, [])

  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center mb-10 text-greenPrimary dark:text-lightGreen">
        New Plants
      </h2>
      {loading ? (
        <div className="flex items-center justify-center min-h-96">
          <span className="loading loading-xl"></span>
        </div>
      ) : (
        <div>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {plants.map((plant) => (
              <div
                key={plant?._id}
                className="bg-white dark:glass shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="overflow-hidden">
                  <img
                    src={plant?.imageURL}
                    alt={plant?.plantName}
                    className="w-full h-[400px] object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-greenPrimary dark:text-lightGreen">
                    {plant?.plantName}
                  </h3>
                  <p className="text-sm text-greenPrimary/70 dark:text-lightGreen mb-2">
                    {plant?.category}
                  </p>
                  <p className="text-greenSecondary dark:text-lightGreen mb-4">
                    {plant?.description}
                  </p>
                  <Link to={`/plant-details/${plant?._id}`} className="py-2 px-6 outline-2 font-semibold outline-greenPrimary text-greenPrimary hover:bg-greenPrimary hover:text-lightGreen transition-colors rounded-lg text-center dark:outline-lightGreen hover:dark:bg-lightGreen hover:dark:text-greenPrimary dark:text-lightGreen me-0 lg:me-5 cursor-pointer">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default NewPlants;