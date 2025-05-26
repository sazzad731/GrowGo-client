import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { format, formatDistanceToNow } from "date-fns";

const PlantDetails = () => {
  const { id } = useParams();
  const [plant, setPlant] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/plant-detail/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPlant(data);
        setLoading(false);
      });
  }, [ id ]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-xl dark:text-lightGreen"></span>
      </div>
    );
  }

  if (!plant) {
    return (
      <div className="text-center mt-20 text-gray-500 dark:text-lightGreen">Plant not found.</div>
    );
  }

  return (
    <section className="max-w-4xl mx-auto p-6 mt-40 bg-white dark:glass shadow-xl rounded-xl">
      <div className="flex flex-col md:flex-row items-start gap-8">
        <img
          src={plant?.imageURL}
          alt={plant?.plantName}
          className="w-full md:w-1/2 rounded-lg object-cover shadow"
        />
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl font-bold text-green-700 dark:text-lightGreen">
            {plant?.plantName}
          </h2>
          <p className="text-sm text-gray-500 dark:text-lightGreen">
            Category:{" "}
            <span className="font-medium capitalize">{plant?.category}</span>
          </p>
          <p className="text-sm text-gray-500 dark:text-lightGreen">
            Care Level:{" "}
            <span className="font-medium capitalize">{plant?.careLevel}</span>
          </p>
          <p className="text-sm text-gray-500 dark:text-lightGreen">
            Watering Frequency:{" "}
            <span className="font-medium">{plant?.wateringFreq}</span>
          </p>
          <p className="text-sm text-gray-500 dark:text-lightGreen">
            Last Watered:{" "}
            <span className="font-medium">
              {format(new Date(plant?.lastWatered), "MMMM dd, yyyy")}
            </span>
          </p>
          <p className="text-sm text-gray-500 dark:text-lightGreen">
            Next Watering:{" "}
            <span className="font-medium">
              {formatDistanceToNow(new Date(plant?.nextWatering), {
                addSuffix: true,
              })}
            </span>
          </p>
          <p className="text-sm text-gray-500 dark:text-lightGreen">
            Health Status: <span className="font-medium">{plant?.health}</span>
          </p>
          <p className="text-sm text-gray-500 dark:text-lightGreen">
            Added By:{" "}
            <span className="font-medium">
              {plant?.userName} ({plant?.userEmail})
            </span>
          </p>
          <div>
            <h4 className="mt-4 font-semibold text-gray-700 dark:text-lightGreen">
              Description:
            </h4>
            <p className="text-gray-600 dark:text-lightGreen">
              {plant?.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlantDetails;
